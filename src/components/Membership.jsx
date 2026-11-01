
import { useState } from "react";
import plans from "../data/plans";

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState("Standard");

  return (
    <section
      id="membership"
      className="bg-[#10110f] px-[9%] py-[115px] max-[1000px]:px-[6%] max-[700px]:px-[7%] max-[700px]:py-[75px]"
    >
      <div className="flex justify-between gap-4 border-b border-[#30312c] pb-5 text-[9px] font-bold tracking-[2px] text-[#85877e]">
        <span>05 / MEMBERSHIP</span>
        <span>INVEST IN YOURSELF</span>
      </div>

      <div className="my-[60px] flex items-end justify-between gap-8 max-[700px]:my-[45px] max-[700px]:flex-col max-[700px]:items-start">
        <h2 className="font-['Barlow_Condensed'] text-[clamp(65px,8vw,105px)] font-extrabold leading-[0.84]">
          CHOOSE YOUR
          <br />
          <span className="text-[#c5f45b]">COMMITMENT.</span>
        </h2>

        <p className="max-w-[280px] pb-2 text-[13px] leading-[1.9] text-[#85877e]">
          Find the membership that matches your goals and training journey.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 max-[700px]:grid-cols-1">
        {plans.map((plan) => {
          const selected = selectedPlan === plan.name;

          return (
            <div
              key={plan.id}
              className={`relative border p-[30px] transition-colors ${
                selected
                  ? "border-[#c5f45b] bg-[#191a17]"
                  : "border-[#30312c] bg-[#171815]"
              }`}
            >
              {plan.popular && (
                <span className="mb-5 inline-block bg-[#c5f45b] px-3 py-2 text-[9px] font-extrabold tracking-[1px] text-[#10110f]">
                  MOST POPULAR
                </span>
              )}

              <h3 className="font-['Barlow_Condensed'] text-[35px] font-bold">
                {plan.name}
              </h3>

              <div className="my-7 text-[45px] font-extrabold">
                ${plan.price}
                <small className="ml-2 text-[10px] font-bold tracking-[1px] text-[#85877e]">
                  / MONTH
                </small>
              </div>

              <p className="mb-8 min-h-[55px] text-[12px] leading-[1.8] text-[#85877e]">
                {plan.perks}
              </p>

              <button
                type="button"
                onClick={() => setSelectedPlan(plan.name)}
                className={`w-full px-5 py-4 text-[10px] font-extrabold tracking-[1px] transition-colors ${
                  selected
                    ? "bg-[#c5f45b] text-[#10110f]"
                    : "border border-[#30312c] text-white hover:border-[#c5f45b] hover:text-[#c5f45b]"
                }`}
              >
                {selected ? "SELECTED" : "SELECT PLAN"} ↗
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
