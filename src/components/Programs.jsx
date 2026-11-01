
import { useState } from "react";
import classes from "../data/classes";

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Strength", "Athletic", "Conditioning"];

  const filteredClasses =
    activeFilter === "All"
      ? classes
      : classes.filter((program) => program.category === activeFilter);

  return (
    <section
      id="programs"
      className="bg-[#171815] px-[9%] py-[115px] max-[1000px]:px-[6%] max-[700px]:px-[7%] max-[700px]:py-[75px]"
    >
      <div className="flex justify-between gap-4 border-b border-[#30312c] pb-5 text-[9px] font-bold tracking-[2px] text-[#85877e]">
        <span>02 / WHAT WE DO</span>
        <span>TRAIN WITH INTENTION</span>
      </div>

      <div className="my-[60px] flex items-end justify-between gap-8 max-[700px]:my-[45px] max-[700px]:flex-col max-[700px]:items-start">
        <h2 className="font-['Barlow_Condensed'] text-[clamp(65px,8vw,105px)] font-extrabold leading-[0.84]">
          FIND YOUR
          <br />
          <span className="text-[#c5f45b]">STRENGTH.</span>
        </h2>

        <p className="max-w-[280px] pb-2 text-[13px] leading-[1.9] text-[#85877e]">
          Different goals. Different disciplines.
          One place to become stronger.
        </p>
      </div>

      <div className="my-[30px] flex flex-wrap gap-[10px]">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`border px-5 py-[10px] text-[12px] transition-colors ${
              activeFilter === filter
                ? "border-[#c5f45b] bg-[#c5f45b] text-[#10110f]"
                : "border-[#30312c] bg-transparent text-white hover:border-[#c5f45b] hover:text-[#c5f45b]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-[17px] max-[700px]:grid-cols-1">
        {filteredClasses.map((program) => (
          <a
            href="#membership"
            key={program.number}
            className="group relative min-h-[480px] overflow-hidden bg-[#222] max-[1000px]:min-h-[420px] max-[700px]:min-h-[450px]"
          >
            <img
              src={program.image}
              alt={program.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-[linear-gradient(0deg,#0b0c0a_0%,transparent_75%)]" />

            <div className="absolute left-5 right-5 top-5 flex justify-between text-[9px] tracking-[1px]">
              <span>{program.number} / PROGRAM</span>
              <span className="text-[17px] text-[#c5f45b]">↗</span>
            </div>

            <div className="absolute bottom-[25px] left-[25px] right-[25px]">
              <small className="text-[9px] tracking-[2px] text-[#c5f45b]">
                {program.subtitle}
              </small>

              <h3 className="my-[5px] font-['Barlow_Condensed'] text-[54px] font-bold">
                {program.title}
              </h3>

              <p className="text-[11px] leading-[1.7] text-[#c4c4bd]">
                {program.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
