
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Success() {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");

    if (!sessionId) {
      setError("No payment session was provided.");
      setLoading(false);
      return;
    }

    let cancelled = false;
    let attempts = 0;
    let timer;

    async function fetchOrder() {
      try {
        const response = await fetch(
          `${API_URL}/api/orders/session/${encodeURIComponent(sessionId)}`,
          {
            credentials: "include",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to retrieve your order.");
        }

        if (cancelled) return;

        setOrder(data.order);
        setLoading(false);

        // Give the webhook a little time to confirm the payment.
        if (data.order.status === "pending" && attempts < 9) {
          attempts += 1;
          timer = setTimeout(fetchOrder, 2000);
        }
      } catch (err) {
        if (cancelled) return;

        setError(err.message);
        setLoading(false);
      }
    }

    fetchOrder();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  const formatAmount = (amount, currency) => {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: currency || "PKR",
    }).format(Number(amount));
  };

  return (
    <main className="min-h-screen bg-[#10110f] px-5 py-20 text-white">
      <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-[#181a16] p-8 text-center sm:p-12">

        {loading ? (
          <>
            <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-[#c5f45b]" />
            <h1 className="text-3xl font-bold">VERIFYING PAYMENT</h1>
            <p className="mt-3 text-white/60">
              Please wait while we retrieve your order.
            </p>
          </>
        ) : error ? (
          <>
            <h1 className="text-3xl font-bold">ORDER NOT AVAILABLE</h1>
            <p className="mt-4 text-white/60">{error}</p>
          </>
        ) : (
          <>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#c5f45b]/15 text-3xl text-[#c5f45b]">
              {order.status === "paid" ? "✓" : "!"}
            </div>

            <h1 className="text-3xl font-bold">
              {order.status === "paid"
                ? "PAYMENT SUCCESSFUL"
                : order.status === "pending"
                  ? "PAYMENT PROCESSING"
                  : "PAYMENT NOT COMPLETED"}
            </h1>

            <p className="mt-3 text-white/60">
              {order.status === "paid"
                ? "Your membership order has been confirmed."
                : order.status === "pending"
                  ? "Your payment is still awaiting confirmation. Please check again shortly."
                  : "Your order has not been marked as paid."}
            </p>

            <div className="mt-8 rounded-xl bg-black/20 p-5 text-left">
              <div className="flex justify-between gap-4 border-b border-white/10 pb-4">
                <span className="text-white/50">Order ID</span>
                <span>#{order.id}</span>
              </div>

              <div className="py-4">
                <p className="mb-3 text-white/50">Membership</p>

                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap-4 py-1"
                  >
                    <span>{item.plan_name}</span>
                    <span>
                      {formatAmount(item.unit_price, item.currency)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between border-t border-white/10 pt-4 font-bold">
                <span>Total</span>
                <span>
                  {formatAmount(order.total_amount, order.currency)}
                </span>
              </div>

              <div className="mt-4 flex justify-between">
                <span className="text-white/50">Status</span>
                <span className="capitalize">{order.status}</span>
              </div>
            </div>
          </>
        )}

        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-[#c5f45b] px-8 py-3 font-bold text-black transition hover:bg-white"
        >
          BACK TO HOME
        </a>
      </div>
    </main>
  );
}
