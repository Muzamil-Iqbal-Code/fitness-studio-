
const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const pool = require("../db");

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (
      !stripeKey ||
      stripeKey === "sk_test_placeholder" ||
      !webhookSecret ||
      webhookSecret === "whsec_placeholder"
    ) {
      return res.status(503).json({
        message: "Stripe webhook credentials are not configured.",
      });
    }

    const stripe = new Stripe(stripeKey);

    let event;

    // Verify that the webhook really came from Stripe.
    try {
      const signature = req.headers["stripe-signature"];

      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        webhookSecret
      );
    } catch (error) {
      console.error("Webhook signature verification failed:", error.message);

      return res.status(400).json({
        message: "Invalid webhook signature.",
      });
    }

    try {
      const session = event.data.object;

      // Successful payment.
      if (
        (
          event.type === "checkout.session.completed" ||
          event.type === "checkout.session.async_payment_succeeded"
        ) &&
        session.payment_status === "paid"
      ) {
        const paymentIntentId =
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent?.id || null;

        const result = await pool.query(
          `UPDATE orders
           SET status = 'paid',
               stripe_payment_intent_id = $1,
               updated_at = CURRENT_TIMESTAMP
           WHERE stripe_checkout_session_id = $2
             AND status = 'pending'
           RETURNING id`,
          [paymentIntentId, session.id]
        );

        if (result.rowCount === 0) {
          const existingOrder = await pool.query(
            `SELECT id, status
             FROM orders
             WHERE stripe_checkout_session_id = $1`,
            [session.id]
          );

          if (existingOrder.rowCount === 0) {
            console.error("No order found for Stripe session:", session.id);
            return res.status(500).json({
              message: "Order not found. Stripe can retry this webhook.",
            });
          }

          // Already processed: safe for Stripe to retry.
        }

        console.log("Payment confirmed for Stripe session:", session.id);
      }

      // Payment failed.
      else if (
        event.type === "checkout.session.async_payment_failed"
      ) {
        await pool.query(
          `UPDATE orders
           SET status = 'failed',
               updated_at = CURRENT_TIMESTAMP
           WHERE stripe_checkout_session_id = $1
             AND status = 'pending'`,
          [session.id]
        );
      }

      // Checkout expired without completing.
      else if (
        event.type === "checkout.session.expired"
      ) {
        await pool.query(
          `UPDATE orders
           SET status = 'cancelled',
               updated_at = CURRENT_TIMESTAMP
           WHERE stripe_checkout_session_id = $1
             AND status = 'pending'`,
          [session.id]
        );
      }

      return res.status(200).json({
        received: true,
      });

    } catch (error) {
      console.error("Webhook processing error:", error.message);

      return res.status(500).json({
        message: "Webhook processing failed.",
      });
    }
  }
);

module.exports = router;
