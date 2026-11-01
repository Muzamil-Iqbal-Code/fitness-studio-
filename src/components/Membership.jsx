

import { useState } from "react";
import plans from "../data/plans";

function Arrow() {
  return <span className="arrow">↗</span>;
}

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState("Standard");

  return (
    <section className="membership section-pad" id="membership">
      <div className="section-label">
        <span>05 / MEMBERSHIP</span>
        <span>INVEST IN YOURSELF</span>
      </div>

      <div className="section-title-row">
        <h2 className="section-heading">
          CHOOSE YOUR
          <br />
          <span>COMMITMENT.</span>
        </h2>
        <p>Find the membership that matches your goals and training journey.</p>
      </div>

      <div className="plan-grid">
        {plans.map((plan) => (
          <div
            className={`plan-card ${
              selectedPlan === plan.name ? "selected" : ""
            }`}
            key={plan.id}
          >
            {plan.popular && (
              <span className="plan-badge">MOST POPULAR</span>
            )}

            <h3>{plan.name}</h3>

            <div className="plan-price">
              ${plan.price}
              <small>/ MONTH</small>
            </div>

            <p className="plan-description">{plan.perks}</p>

            <button
              className="btn-primary"
              onClick={() => setSelectedPlan(plan.name)}
            >
              {selectedPlan === plan.name ? "SELECTED" : "SELECT PLAN"}
              <Arrow />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}