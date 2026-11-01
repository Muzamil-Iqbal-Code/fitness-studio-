
function Arrow() {
  return <span className="arrow">↗</span>;
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-image" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="eyebrow">
          <span className="live-dot" />
          BUILT FOR THE DRIVEN
        </div>

        <h1>
          NO
          <br />
          EXCUSES.
          <br />
          <span>JUST</span> WORK.
        </h1>

        <p>
          More than a gym. A place where discipline becomes
          your identity and every session moves you forward.
        </p>

        <div className="hero-actions">
          <a href="#membership" className="btn-primary">
            EXPLORE MEMBERSHIP <Arrow />
          </a>

          <a href="#programs" className="btn-text">
            DISCOVER OUR PROGRAMS <span>↓</span>
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <span>01 — EST. FOR PERFORMANCE</span>
        <span>FITNESS / STRENGTH / COMMUNITY</span>
        <span>01 / 03</span>
      </div>

      <div className="hero-side-text">TRAIN DIFFERENTLY</div>
    </section>
  );
}
