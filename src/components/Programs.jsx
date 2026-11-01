
import { useState } from "react";
import classes from "../data/classes";

function Arrow() {
  return <span className="arrow">↗</span>;
}

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Strength", "Athletic", "Conditioning"];

  const filteredClasses =
    activeFilter === "All"
      ? classes
      : classes.filter((program) => program.category === activeFilter);

  return (
    <section className="programs section-pad" id="programs">
      <div className="section-label">
        <span>02 / WHAT WE DO</span>
        <span>TRAIN WITH INTENTION</span>
      </div>

      <div className="section-title-row">
        <h2 className="section-heading">
          FIND YOUR
          <br />
          <span>STRENGTH.</span>
        </h2>

        <p>
          Different goals. Different disciplines.
          One place to become stronger.
        </p>
      </div>

      <div className="program-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={activeFilter === filter ? "active" : ""}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="program-grid">
        {filteredClasses.map((program) => (
          <a
            href="#membership"
            className="program-card"
            key={program.number}
          >
            <img src={program.image} alt={program.title} />

            <div className="program-shade" />

            <div className="program-top">
              <span>{program.number} / PROGRAM</span>
              <Arrow />
            </div>

            <div className="program-info">
              <small>{program.subtitle}</small>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
