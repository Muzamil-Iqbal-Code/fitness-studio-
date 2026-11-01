export default function Experience() {
  return (
    <section className="experience section-pad" id="experience">
      <div className="experience-grid">
        <div className="experience-image">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=85"
            alt="Gym training area"
          />
        </div>

        <div className="experience-content">
          <div className="section-label">
            <span>03 / THE EXPERIENCE</span>
            <span>MORE THAN A WORKOUT</span>
          </div>

          <h2 className="section-heading">
            BUILT FOR
            <br />
            <span>PROGRESS.</span>
          </h2>

          <p className="large-copy">
            Your environment shapes your performance. Train in a space
            designed to help you focus, improve and achieve more.
          </p>

          <div className="experience-points">
            <div>
              <span>01</span>
              <p>Professional training equipment</p>
            </div>
            <div>
              <span>02</span>
              <p>Experienced and supportive coaches</p>
            </div>
            <div>
              <span>03</span>
              <p>A community built around progress</p>
            </div>
          </div>

          <a href="#membership" className="underlined-link">
            START YOUR JOURNEY <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}