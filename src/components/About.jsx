
import Counter from "./Counter";

function Arrow() {
  return <span className="arrow">↗</span>;
}

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="section-label">
        <span>01 / WHO WE ARE</span>
        <span>THE DISTRICT PHILOSOPHY</span>
      </div>

      <div className="about-grid">
        <div>
          <h2 className="section-heading">
            BUILT ON
            <br />
            <span>DISCIPLINE.</span>
          </h2>
        </div>

        <div className="about-copy">
          <p className="large-copy">
            We don't believe in shortcuts. We believe in showing up,
            putting in the work and becoming better every single day.
          </p>

          <p className="muted-copy">
            IRON DISTRICT brings together serious training,
            professional coaching and a community that pushes you
            beyond what you thought possible.
          </p>

          <a href="#programs" className="underlined-link">
            DISCOVER OUR APPROACH <Arrow />
          </a>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat">
          <Counter value={2.5} suffix="K+" />
          <small>ACTIVE MEMBERS</small>
        </div>

        <div className="stat">
          <Counter value={15} suffix="+" />
          <small>EXPERT COACHES</small>
        </div>

        <div className="stat">
          <Counter value={30} suffix="+" />
          <small>TRAINING PROGRAMS</small>
        </div>

        <div className="stat">
          <Counter value={24} suffix="/7" />
          <small>COMMITMENT TO GROWTH</small>
        </div>
      </div>
    </section>
  );
}
