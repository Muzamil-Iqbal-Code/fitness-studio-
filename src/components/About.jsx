
import Counter from "./Counter";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#10110f] px-[9%] py-[115px] max-[1000px]:px-[6%] max-[1000px]:py-[90px] max-[700px]:px-[7%] max-[700px]:py-[75px]"
    >
      <div className="flex justify-between gap-4 border-b border-[#30312c] pb-5 text-[9px] font-bold tracking-[2px] text-[#85877e] max-[700px]:text-[8px]">
        <span>01 / WHO WE ARE</span>
        <span className="text-right">THE DISTRICT PHILOSOPHY</span>
      </div>

      <div className="mt-[65px] grid grid-cols-[1.2fr_1fr] gap-[60px] max-[700px]:mt-[45px] max-[700px]:grid-cols-1 max-[700px]:gap-[35px]">
        <div>
          <h2 className="font-['Barlow_Condensed'] text-[clamp(65px,8vw,105px)] font-extrabold leading-[0.84] tracking-[-2px] max-[700px]:text-[76px]">
            BUILT ON
            <br />
            <span className="text-[#c5f45b]">DISCIPLINE.</span>
          </h2>
        </div>

        <div className="pt-[5px]">
          <p className="text-[20px] font-semibold leading-[1.65] max-[700px]:text-[17px]">
            We don't believe in shortcuts. We believe in showing up,
            putting in the work and becoming better every single day.
          </p>

          <p className="my-5 mb-[30px] text-[12px] leading-[2] text-[#85877e]">
            IRON DISTRICT brings together serious training,
            professional coaching and a community that pushes you
            beyond what you thought possible.
          </p>

          <a
            href="#programs"
            className="inline-block border-b border-[#c5f45b] pb-3 text-[10px] font-extrabold tracking-[1px] transition-colors hover:text-[#c5f45b]"
          >
            DISCOVER OUR APPROACH
            <span className="ml-2 text-[#c5f45b]">↗</span>
          </a>
        </div>
      </div>

      <div className="mt-[90px] grid grid-cols-4 border-y border-[#30312c] max-[700px]:mt-[55px] max-[700px]:grid-cols-2">
        {[
          { value: 2.5, suffix: "K+", label: "ACTIVE MEMBERS" },
          { value: 15, suffix: "+", label: "EXPERT COACHES" },
          { value: 30, suffix: "+", label: "TRAINING PROGRAMS" },
          { value: 24, suffix: "/7", label: "COMMITMENT TO GROWTH" },
        ].map((stat, index) => (
          <div
            key={stat.label}
            className={`
              border-r border-[#30312c] px-[15px] py-8
              ${index === 3 ? "border-r-0" : ""}
              max-[700px]:border-b max-[700px]:px-2
              ${index === 1 ? "max-[700px]:border-r-0" : ""}
              ${index >= 2 ? "max-[700px]:border-b-0" : ""}
            `}
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <small className="text-[9px] tracking-[1px] text-[#85877e]">
              {stat.label}
            </small>
          </div>
        ))}
      </div>
    </section>
  );
}
