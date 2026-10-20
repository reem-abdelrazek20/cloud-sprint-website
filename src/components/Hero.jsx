import { LuSquareArrowDownRight } from "react-icons/lu";
export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="live-dot" />
          Your technology partner, from idea to launch
        </div>
        <h1>
          Big ideas.
          <br />
          <span className="gradient-text">Built to move.</span>
        </h1>
        <p className="hero-lead">
          We design and build modern websites and custom software that help
          businesses and people do more, move faster, and grow with confidence.
        </p>
        <div className="hero-actions">
          
          <a className="button button-primary"  href="https://www.facebook.com/profile.php?id=61595554470499"
  target="_blank"
  rel="noopener noreferrer">
            Let’s build 
              <LuSquareArrowDownRight aria-hidden="true" />
          </a>
          <a className="text-link" href="#services">
            Explore our services 
          </a>
        </div>
        <div className="hero-proof">
          <div className="proof-avatars" aria-hidden="true">
            <i>CS</i>
            <i>+</i>
            <i>∞</i>
          </div>
          <span>Clear technology. Faster progress. Real momentum.</span>
        </div>
      </div>
      <div className="hero-visual" aria-label="Cloud Sprint brand visual">
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <div className="visual-card">
          <div className="card-top">
            <span className="mini-brand">
              CS<span>.</span>
            </span>
            <span className="status">
              <i />
              Ready for lift-off
            </span>
          </div>
          <img
            src="/cloud-sprint-logo.png"
            alt="Cloud Sprint Software Services logo"
          />
          <div className="card-caption">
            <span>From first idea to a product that’s ready to grow</span>
            <span className="caption-arrow">↗</span>
          </div>
        </div>
        <div className="float-chip chip-code">
          <span>{"{ }"}</span>Built around you
        </div>
        <div className="float-chip chip-speed">
          <span>↗</span>Made for momentum
        </div>
        <div className="hero-grid" />
      </div>
      <div className="scroll-note">
        <span />
        Scroll to explore
      </div>
    </section>
  );
}
