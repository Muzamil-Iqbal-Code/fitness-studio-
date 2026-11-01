
export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="relative bg-[#171815] px-[9%] py-[115px] max-[1000px]:px-[6%] max-[700px]:px-[7%] max-[700px]:py-[75px]"
    >
      <div className="flex justify-between gap-4 border-b border-[#30312c] pb-5 text-[9px] font-bold tracking-[2px] text-[#85877e]">
        <span>06 / MEMBER STORIES</span>
        <span>REAL PEOPLE. REAL PROGRESS.</span>
      </div>

      <div className="mx-auto max-w-[850px] py-[75px] text-center max-[700px]:py-[50px]">
        <span className="font-serif text-[90px] leading-none text-[#c5f45b]">
          “
        </span>

        <h2 className="font-['Barlow_Condensed'] text-[clamp(38px,6vw,70px)] font-extrabold leading-[1]">
          THE BEST INVESTMENT
          <br />
          I'VE MADE IN <span className="text-[#c5f45b]">MYSELF.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-[550px] text-[13px] leading-[2] text-[#85877e]">
          The environment, the coaches and the community make every session
          worth it. I've become stronger, more confident and more disciplined.
        </p>

        <div className="mt-10 flex items-center justify-center gap-5">
          <div className="h-px w-[40px] bg-[#c5f45b]" />
          <div className="text-left">
            <h4 className="text-[11px] font-extrabold tracking-[1px]">
              JAMES CARTER
            </h4>
            <span className="text-[9px] tracking-[1px] text-[#85877e]">
              IRON DISTRICT MEMBER
            </span>
          </div>
        </div>
      </div>

      <div className="text-right text-[9px] tracking-[1px] text-[#85877e]">
        01 / 01
      </div>
    </section>
  );
}
