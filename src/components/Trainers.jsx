import { API_URL } from "../api";
import { useEffect, useState } from "react";

export default function Trainers() {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTrainers() {
      try {
        const response = await fetch(`${API_URL}/api/trainers`);

        if (!response.ok) {
          throw new Error("Could not load trainers.");
        }

        const data = await response.json();
        setTrainers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTrainers();
  }, []);

  return (
    <section
      id="trainers"
      className="bg-[#171815] px-[9%] py-[115px] max-[1000px]:px-[6%] max-[700px]:px-[7%] max-[700px]:py-[75px]"
    >
      <div className="flex justify-between gap-4 border-b border-[#30312c] pb-5 text-[9px] font-bold tracking-[2px] text-[#85877e]">
        <span>04 / THE PEOPLE</span>
        <span>MEET YOUR COACHES</span>
      </div>

      <div className="my-[60px] flex items-end justify-between gap-8 max-[700px]:my-[45px] max-[700px]:flex-col max-[700px]:items-start">
        <h2 className="font-['Barlow_Condensed'] text-[clamp(65px,8vw,105px)] font-extrabold leading-[0.84]">
          LEARN FROM
          <br />
          <span className="text-[#c5f45b]">THE BEST.</span>
        </h2>

        <p className="max-w-[280px] pb-2 text-[13px] leading-[1.9] text-[#85877e]">
          Real experience. Professional guidance. Coaches who push you forward.
        </p>
      </div>

      {loading ? (
        <p className="py-10 text-[#c5f45b]">Loading trainers...</p>
      ) : error ? (
        <p className="py-10 text-red-400">{error}</p>
      ) : (
        <div className="flex snap-x snap-mandatory gap-[25px] overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.id}
              className="group min-w-[240px] flex-1 snap-start transition-transform duration-300 hover:-translate-y-1 max-[700px]:min-w-[78%]"
            >
              <div className="relative h-[420px] overflow-hidden bg-[#222] max-[1000px]:h-[360px]">
                <img
                  src={trainer.photo}
                  alt={trainer.name}
                  className="h-full w-full object-cover grayscale transition-[filter,transform] duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />

                <span className="absolute bottom-5 left-5 text-[12px] font-bold text-[#c5f45b]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 border-b border-[#30312c] py-5">
                <div className="min-w-0">
                  <h3 className="font-['Barlow_Condensed'] text-[clamp(24px,2.2vw,30px)] font-bold leading-tight">
                    {trainer.name}
                  </h3>

                  <p className="mt-1 text-[11px] tracking-[1px] text-[#85877e]">
                    {trainer.specialty}
                  </p>
                </div>

                <span className="text-[20px] text-[#c5f45b] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
