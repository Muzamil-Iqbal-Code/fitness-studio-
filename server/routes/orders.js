
const express = require("express");
const router = express.Router();
const pool = require("../db");
const { requireAuth } = require("../middleware/authMiddleware");

// GET /api/orders/session/:sessionId
// Retrieve an order using its Stripe Checkout Session ID.
router.get("/session/:sessionId", requireAuth, async (req, res) => {
  const sessionId = req.params.sessionId;

  if (
    typeof sessionId !== "string" ||
    !/^cs_[a-zA-Z0-9_]+$/.test(sessionId)
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid checkout session ID.",
    });
  }

  try {
    const orderResult = await pool.query(
      `SELECT
         id,
         status,
         total_amount,
         currency,
         created_at
       FROM orders
       WHERE stripe_checkout_session_id = $1
         AND user_id = $2`,
      [sessionId, req.session.user.id]
    );

    if (orderResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    const order = orderResult.rows[0];

    const itemsResult = await pool.query(
      `SELECT
         id,
         plan_name,
         quantity,
         unit_price,
         currency
       FROM order_items
       WHERE order_id = $1
       ORDER BY id`,
      [order.id]
    );

    return res.json({
      success: true,
      order: {
        ...order,
        items: itemsResult.rows,
      },
    });

  } catch (error) {
    console.error("Order session lookup error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve order.",
    });
  }
});

// GET /api/orders/:id
// Retrieve an order using its database ID.
router.get("/:id", requireAuth, async (req, res) => {
  const orderId = Number(req.params.id);

  if (!Number.isSafeInteger(orderId) || orderId <= 0) {
    return res.status(400).json({
      success: false,
      message: "Invalid order ID.",
    });
  }

  try {
    const orderResult = await pool.query(
      `SELECT
         id,
         status,
         total_amount,
         currency,
         created_at
       FROM orders
       WHERE id = $1 AND user_id = $2`,
      [orderId, req.session.user.id]
    );

    if (orderResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    const order = orderResult.rows[0];

    const itemsResult = await pool.query(
      `SELECT
         id,
         plan_name,
         quantity,
         unit_price,
         currency
       FROM order_items
       WHERE order_id = $1
       ORDER BY id`,
      [orderId]
    );

    return res.json({
      success: true,
      order: {
        ...order,
        items: itemsResult.rows,
      },
    });

  } catch (error) {
    console.error("Order lookup error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve order.",
    });
  }
});

module.exports = router;
