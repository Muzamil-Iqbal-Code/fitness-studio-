
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Programs", "#programs"],
    ["Trainers", "#trainers"],
    ["Membership", "#membership"],
  ];

  return (
    <nav className="sticky top-0 z-[100] flex h-[82px] w-full items-center justify-between border-b border-[#30312c] bg-[#10110f] px-[7%] max-[700px]:h-[72px]">
      <a
        href="#home"
        className="text-[21px] font-extrabold tracking-[-1px]"
      >
        IRON<span className="text-[#c5f45b]">.</span>DISTRICT
        <small className="mt-[3px] block text-[8px] tracking-[3px] text-[#85877e]">
          ATHLETIC CLUB
        </small>
      </a>

      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        className="hidden border-0 bg-transparent text-[25px] text-white max-[700px]:block"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div
        className={`
          flex items-center gap-[38px]
          max-[1000px]:gap-5
          max-[700px]:absolute max-[700px]:left-0
          max-[700px]:right-0 max-[700px]:top-[72px]
          max-[700px]:flex-col max-[700px]:items-stretch
          max-[700px]:gap-[25px] max-[700px]:border-b
          max-[700px]:border-[#30312c] max-[700px]:bg-[#10110f]
          max-[700px]:px-[7%] max-[700px]:py-[25px]
          ${menuOpen ? "max-[700px]:flex" : "max-[700px]:hidden"}
        `}
      >
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="text-[11px] font-bold text-[#c0c0b9] transition-colors duration-300 hover:text-[#c5f45b]"
          >
            {label}
          </a>
        ))}

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="bg-[#c5f45b] px-[21px] py-[15px] text-[11px] font-bold text-[#111] transition-colors duration-300 hover:bg-white max-[700px]:text-center"
        >
          JOIN THE CLUB <span className="ml-2">↗</span>
        </a>
      </div>
    </nav>
  );
}
