
const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const pool = require("../db");
const { requireAuth } = require("../middleware/authMiddleware");

// Initialize Stripe only when valid credentials are available.
function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;

  if (!key || key === "sk_test_placeholder") {
    return null;
  }

  return new Stripe(key);
}

// POST /api/checkout
router.post("/", requireAuth, async (req, res) => {
  const { planId } = req.body;

  // Validate membership plan ID.
  const numericPlanId = Number(planId);

  if (
    !Number.isSafeInteger(numericPlanId) ||
    numericPlanId <= 0
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid membership plan.",
    });
  }

  // Check Stripe credentials before opening a database transaction.
  const stripe = getStripe();

  if (!stripe) {
    return res.status(503).json({
      success: false,
      message: "Stripe test credentials are not configured yet.",
    });
  }

  const currency = (
    process.env.STRIPE_CURRENCY || "pkr"
  ).toLowerCase();

  if (!/^[a-z]{3}$/.test(currency)) {
    return res.status(500).json({
      success: false,
      message: "Invalid Stripe currency configuration.",
    });
  }

  const client = await pool.connect();

  let orderId = null;
  let transactionStarted = false;

  try {
    // Start database transaction.
    await client.query("BEGIN");
    transactionStarted = true;

    // Get membership details and actual price from PostgreSQL.
    const planResult = await client.query(
      "SELECT * FROM plans WHERE id = $1",
      [numericPlanId]
    );

    if (planResult.rows.length === 0) {
      await client.query("ROLLBACK");
      transactionStarted = false;

      return res.status(404).json({
        success: false,
        message: "Membership plan not found.",
      });
    }

    const plan = planResult.rows[0];

    const price = Number(plan.price);
    const amount = Math.round(price * 100);

    if (
      !Number.isFinite(price) ||
      price <= 0 ||
      !Number.isSafeInteger(amount)
    ) {
      throw new Error("Invalid membership price in database.");
    }

    // Create pending order.
    const orderResult = await client.query(
      `INSERT INTO orders
        (user_id, status, total_amount, currency)
       VALUES ($1, 'pending', $2, $3)
       RETURNING id`,
      [
        req.session.user.id,
        price,
        currency.toUpperCase(),
      ]
    );

    orderId = orderResult.rows[0].id;

    // Save purchased membership details.
    await client.query(
      `INSERT INTO order_items
        (order_id, plan_id, plan_name, quantity, unit_price, currency)
       VALUES ($1, $2, $3, 1, $4, $5)`,
      [
        orderId,
        plan.id,
        plan.name,
        price,
        currency.toUpperCase(),
      ]
    );

    await client.query("COMMIT");
    transactionStarted = false;

    // Create Stripe Checkout Session.
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency,

            product_data: {
              name: `${plan.name} Membership`,
            },

            unit_amount: amount,
          },

          quantity: 1,
        },
      ],

      success_url:
        `${process.env.CLIENT_URL}/success` +
        "?session_id={CHECKOUT_SESSION_ID}",

      cancel_url:
        `${process.env.CLIENT_URL}/membership`,

      client_reference_id: String(orderId),

      metadata: {
        orderId: String(orderId),
        userId: String(req.session.user.id),
      },
    });

    // Save Stripe session ID against the order.
    await pool.query(
      `UPDATE orders
       SET stripe_checkout_session_id = $1,
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $2`,
      [checkoutSession.id, orderId]
    );

    // Return hosted checkout URL to frontend.
    return res.json({
      success: true,
      orderId,
      url: checkoutSession.url,
    });

  } catch (error) {
    if (transactionStarted) {
      await client.query("ROLLBACK").catch(() => {});
    }

    // Mark unsuccessful checkout as failed.
    if (orderId !== null) {
      await pool.query(
        `UPDATE orders
         SET status = 'failed',
             updated_at = CURRENT_TIMESTAMP
         WHERE id = $1 AND status = 'pending'`,
        [orderId]
      ).catch(() => {});
    }

    console.error("Checkout error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to start checkout.",
    });

  } finally {
    client.release();
  }
});

module.exports = router;
