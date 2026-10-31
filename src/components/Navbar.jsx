
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
    <nav className="navbar">
      <a href="#home" className="brand">
        IRON<span>.</span>DISTRICT
        <small>ATHLETIC CLUB</small>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}

        <a
          href="#contact"
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          JOIN THE CLUB <span className="arrow">↗</span>
        </a>
      </div>
    </nav>
  );
}
