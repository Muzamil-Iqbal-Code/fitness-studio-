import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import { useState } from "react";
import "./index.css";

const programs = [
  {
    number: "01",
    title: "Strength",
    subtitle: "BUILD YOUR FOUNDATION",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=85",
    description: "Build real strength through structured resistance training.",
  },
  {
    number: "02",
    title: "Athletic",
    subtitle: "MOVE WITH PURPOSE",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=85",
    description: "Improve endurance, mobility and overall performance.",
  },
  {
    number: "03",
    title: "Conditioning",
    subtitle: "PUSH YOUR LIMITS",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=85",
    description: "High-energy training designed to challenge your limits.",
  },
];

const trainers = [
  {
    name: "Marcus Reid",
    role: "STRENGTH COACH",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=700&q=85",
  },
  {
    name: "Alex Morgan",
    role: "FITNESS SPECIALIST",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=700&q=85",
  },
  {
    name: "Jordan Blake",
    role: "PERFORMANCE COACH",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&q=85",
  },
];

const plans = [
  {
    name: "STARTER",
    price: "4,500",
    description: "For people starting their fitness journey.",
    features: ["Gym floor access", "Locker facilities", "Basic equipment access"],
  },
  {
    name: "PERFORMANCE",
    price: "7,500",
    popular: true,
    description: "For people serious about their progress.",
    features: [
      "Unlimited gym access",
      "Group training sessions",
      "Fitness assessment",
      "Locker facilities",
    ],
  },
  {
    name: "ELITE",
    price: "12,000",
    description: "The complete premium fitness experience.",
    features: [
      "Everything in Performance",
      "Personal training sessions",
      "Nutrition consultation",
      "Priority class booking",
    ],
  },
];

function Arrow() {
  return <span className="arrow">↗</span>;
}


function Hero() {
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

function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i}>
            DISCIPLINE <b>✳</b> STRENGTH <b>✳</b> CONSISTENCY <b>✳</b>{" "}
            PERFORMANCE <b>✳</b>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
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

function Programs() {
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

      <div className="program-grid">
        {programs.map((program) => (
          <a href="#membership" className="program-card" key={program.number}>
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

function Experience() {
  return (
    <section className="experience">
      <div className="experience-image" />
      <div className="experience-content">
        <span className="section-kicker">THE DISTRICT EXPERIENCE</span>
        <h2>
          YOUR
          <br />
          ONLY
          <br />
          <span>LIMIT</span>
          <br />
          IS YOU.
        </h2>
        <p>
          World-class equipment. Expert guidance. An environment
          designed to bring out your best.
        </p>
        <a href="#contact" className="btn-primary">
          EXPERIENCE THE DIFFERENCE <Arrow />
        </a>
      </div>
    </section>
  );
}

function Trainers() {
  return (
    <section className="trainers section-pad" id="trainers">
      <div className="section-label">
        <span>03 / THE PEOPLE</span>
        <span>MEET YOUR COACHES</span>
      </div>

      <div className="section-title-row">
        <h2 className="section-heading">
          GUIDANCE.
          <br />
          <span>WITHOUT LIMITS.</span>
        </h2>
        <p>
          Great results start with great guidance.
          Meet the people behind your progress.
        </p>
      </div>

      <div className="trainer-grid">
        {trainers.map((trainer, i) => (
          <div className="trainer-card" key={trainer.name}>
            <div className="trainer-image">
              <img src={trainer.image} alt={trainer.name} />
              <span>0{i + 1}</span>
            </div>
            <div className="trainer-info">
              <div>
                <h3>{trainer.name}</h3>
                <small>{trainer.role}</small>
              </div>
              <Arrow />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Membership() {
  const [selected, setSelected] = useState("PERFORMANCE");

  return (
    <section className="membership section-pad" id="membership">
      <div className="section-label">
        <span>04 / INVEST IN YOURSELF</span>
        <span>MEMBERSHIP PLANS</span>
      </div>

      <div className="membership-heading">
        <h2 className="section-heading">
          MAKE THE
          <br />
          <span>COMMITMENT.</span>
        </h2>
        <p>
          Your goals deserve a serious commitment.
          Choose the membership that fits your journey.
        </p>
      </div>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div
            className={`plan-card ${plan.popular ? "featured" : ""} ${
              selected === plan.name ? "selected" : ""
            }`}
            key={plan.name}
          >
            {plan.popular && <div className="popular-tag">MOST POPULAR</div>}

            <div className="plan-top">
              <span>{plan.name}</span>
              <Arrow />
            </div>

            <p className="plan-description">{plan.description}</p>

            <div className="price">
              <span>PKR</span> {plan.price}
              <small>/ MONTH</small>
            </div>

            <div className="plan-divider" />

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span>✓</span> {feature}
                </li>
              ))}
            </ul>

            <button
              className={plan.popular ? "plan-button active" : "plan-button"}
              onClick={() => setSelected(plan.name)}
            >
              {selected === plan.name ? "SELECTED ✓" : "SELECT PLAN ↗"}
            </button>
          </div>
        ))}
      </div>

      <p className="pricing-note">
        * Prices are illustrative. Final membership packages can be
        customized for your business.
      </p>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="testimonial section-pad">
      <span className="section-kicker">05 / MEMBER STORIES</span>
      <div className="quote-mark">“</div>
      <h2>
        THE BEST INVESTMENT
        <br />
        IS THE ONE YOU MAKE
        <br />
        <span>IN YOURSELF.</span>
      </h2>
      <div className="quote-bottom">
        <span>THE IRON DISTRICT COMMUNITY</span>
        <span>BUILT THROUGH CONSISTENCY.</span>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="section-label">
        <span>06 / TAKE THE FIRST STEP</span>
        <span>LET'S GET STARTED</span>
      </div>

      <div className="contact-grid">
        <div>
          <h2 className="section-heading">
            READY
            <br />
            TO <span>WORK?</span>
          </h2>
          <p>
            Your next chapter starts here. Reach out and let's
            talk about your fitness goals.
          </p>

          <div className="contact-details">
            <div>
              <small>VISIT US</small>
              <strong>Islamabad, Pakistan</strong>
            </div>
            <div>
              <small>CALL US</small>
              <strong>+92 300 0000000</strong>
            </div>
            <div>
              <small>OPENING HOURS</small>
              <strong>Monday – Sunday / 6 AM – 11 PM</strong>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Your name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <label>Tell us about your goals</label>
          <textarea
            placeholder="What are you looking to achieve?"
            rows="4"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button type="submit" className="btn-primary form-button">
            SEND YOUR MESSAGE <Arrow />
          </button>

          {submitted && (
            <p className="success-message">
              Thanks, {form.name}! Your message has been prepared.
              Connect this form to a backend to receive submissions.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}


export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Reveal><Hero /></Reveal>
        <Marquee />
        <Reveal><About /></Reveal>
        <Reveal><Programs /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Trainers /></Reveal>
        <Reveal><Membership /></Reveal>
        <Reveal><Testimonial /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>

      <Footer />
    </>
  );
}