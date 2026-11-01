
export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#10110f] px-[9%] py-[115px] max-[1000px]:px-[6%] max-[700px]:px-[7%] max-[700px]:py-[75px]"
    >
      <div className="grid grid-cols-2 items-center gap-[75px] max-[700px]:grid-cols-1 max-[700px]:gap-[40px]">
        <div className="h-[600px] overflow-hidden max-[700px]:h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=85"
            alt="Gym training area"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <div className="mb-[55px] flex justify-between gap-3 border-b border-[#30312c] pb-5 text-[9px] font-bold tracking-[2px] text-[#85877e]">
            <span>03 / THE EXPERIENCE</span>
            <span>MORE THAN A WORKOUT</span>
          </div>

          <h2 className="font-['Barlow_Condensed'] text-[clamp(65px,7vw,95px)] font-extrabold leading-[0.85]">
            BUILT FOR
            <br />
            <span className="text-[#c5f45b]">PROGRESS.</span>
          </h2>

          <p className="my-[30px] text-[16px] leading-[1.8] text-[#f3f3ef]">
            Your environment shapes your performance. Train in a space
            designed to help you focus, improve and achieve more.
          </p>

          <div className="my-[35px] border-t border-[#30312c]">
            {[
              "Professional training equipment",
              "Experienced and supportive coaches",
              "A community built around progress",
            ].map((point, index) => (
              <div
                key={point}
                className="flex items-center gap-5 border-b border-[#30312c] py-5"
              >
                <span className="text-[11px] font-bold text-[#c5f45b]">
                  0{index + 1}
                </span>
                <p className="text-[12px] text-[#c4c4bd]">{point}</p>
              </div>
            ))}
          </div>

          <a
            href="#membership"
            className="inline-block border-b border-[#c5f45b] pb-3 text-[10px] font-extrabold tracking-[1px] transition-colors hover:text-[#c5f45b]"
          >
            START YOUR JOURNEY <span className="ml-2 text-[#c5f45b]">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
