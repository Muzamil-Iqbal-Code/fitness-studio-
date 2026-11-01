
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[max(710px,calc(100vh-82px))] items-center overflow-hidden py-[60px] pb-[120px] max-[700px]:min-h-[650px] max-[700px]:py-[50px] max-[700px]:pb-[110px]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 scale-[1.02] bg-cover bg-[center_42%]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=2000&q=90')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,11,9,0.97)_0%,rgba(10,11,9,0.82)_45%,rgba(10,11,9,0.18)_100%),linear-gradient(0deg,rgba(10,11,9,0.8),transparent_35%)] max-[700px]:bg-[linear-gradient(90deg,#0b0c0af2,#0b0c0a80),linear-gradient(0deg,#0b0c0a90,transparent)]" />

      {/* Hero content */}
      <div className="relative z-[2] max-w-[760px] pl-[10%] max-[700px]:px-[7%]">
        <div className="flex items-center gap-3 text-[10px] font-bold tracking-[3px] text-[#c5f45b]">
          <span className="h-2 w-2 rounded-full bg-[#c5f45b] shadow-[0_0_12px_#c5f45b]" />
          BUILT FOR THE DRIVEN
        </div>

        <h1 className="my-[35px] font-['Barlow_Condensed'] text-[clamp(85px,11vw,154px)] font-extrabold leading-[0.84] tracking-[-2px] max-[700px]:text-[clamp(75px,16vw,115px)]">
          NO
          <br />
          EXCUSES.
          <br />
          <span className="text-[#c5f45b]">JUST</span> WORK.
        </h1>

        <p className="max-w-[430px] text-[14px] leading-[1.9] text-[#b3b4ac] max-[700px]:text-[12px]">
          More than a gym. A place where discipline becomes
          your identity and every session moves you forward.
        </p>

        <div className="relative z-[5] mt-[35px] flex items-center gap-[30px] max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-5">
          <a
            href="#membership"
            className="inline-flex items-center justify-center border border-[#c5f45b] bg-[#c5f45b] px-[23px] py-[18px] text-[10px] font-extrabold tracking-[1px] text-[#10110f] transition-all duration-300 hover:bg-transparent hover:text-[#c5f45b]"
          >
            EXPLORE MEMBERSHIP <span className="ml-2">↗</span>
          </a>

          <a
            href="#programs"
            className="text-[10px] font-bold tracking-[1px] text-white"
          >
            DISCOVER OUR PROGRAMS{" "}
            <span className="ml-2 text-[#c5f45b]">↓</span>
          </a>
        </div>
      </div>

      {/* Bottom information */}
      <div className="absolute bottom-0 left-[7%] right-[7%] z-[2] flex h-[60px] items-center justify-between border-t border-white/20 text-[9px] tracking-[1.5px] text-[#b8b9b1] max-[700px]:text-[7px]">
        <span>01 — EST. FOR PERFORMANCE</span>
        <span className="max-[700px]:hidden">
          FITNESS / STRENGTH / COMMUNITY
        </span>
        <span>01 / 03</span>
      </div>

      {/* Side text */}
      <div className="absolute right-[3%] top-[43%] text-[9px] tracking-[4px] text-white/45 [writing-mode:vertical-rl] max-[700px]:hidden">
        TRAIN DIFFERENTLY
      </div>
    </section>
  );
}
