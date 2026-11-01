import trainers from "../data/trainers";
function Arrow() {
  return <span className="arrow">↗</span>;
}

export default function Trainers() {
  return (
    <section className="trainers section-pad" id="trainers">
      <div className="section-label">
        <span>04 / THE PEOPLE</span>
        <span>MEET YOUR COACHES</span>
      </div>

      <div className="section-title-row">
        <h2 className="section-heading">
          LEARN FROM
          <br />
          <span>THE BEST.</span>
        </h2>
        <p>Real experience. Professional guidance. Coaches who push you forward.</p>
      </div>

      <div className="trainer-grid">
        {trainers.map((trainer, index) => (
          <div className="trainer-card" key={trainer.name}>
            <div className="trainer-image">
                <img
  src={trainer.photo}
  alt={trainer.name}
/>
              <img src={trainer.image} alt={trainer.name} />
              <span>0{index + 1}</span>
            </div>

            <div className="trainer-info">
              <div>
                <h3>{trainer.name}</h3>
                <p>{trainer.role}</p>
              </div>
              <Arrow />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}