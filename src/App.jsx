
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import Membership from "./components/Membership";
import Trainers from "./components/Trainers";
import Experience from "./components/Experience";
import Programs from "./components/Programs";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import "./index.css";

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
