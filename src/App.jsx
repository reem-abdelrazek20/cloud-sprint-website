"use client";

import { useState } from "react";

const services = [
  {
    title: "Website development",
    description:
      "Fast, thoughtful websites that look great on every screen and turn visits into action.",
    tone: "blue",
    label: "Ask about website development",
    icon: (
      <>
        <rect x="4" y="5" width="24" height="22" rx="4" />
        <path d="M4 11h24M10 8h.1M14 8h.1M10 17h5m-5 5h12m-4-5h4" />
      </>
    ),
  },
  {
    title: "Custom software",
    description:
      "Purpose-built systems that simplify daily operations and make room for better work.",
    tone: "purple",
    label: "Ask about custom software",
    icon: (
      <>
        <rect x="5" y="5" width="22" height="22" rx="5" />
        <path d="M11 11h10v10H11zM11 16h10m-5-5v10" />
      </>
    ),
  },
  {
    title: "Business solutions",
    description:
      "Connected digital tools that streamline workflows and give your team time back.",
    tone: "mint",
    label: "Ask about business solutions",
    icon: (
      <>
        <path d="M6 24V9m0 15h21M11 20l5-6 4 3 7-9" />
        <path d="M22 8h5v5" />
      </>
    ),
  },
  {
    title: "Ongoing support",
    description:
      "We stay by your side with updates and improvements as your product evolves.",
    tone: "amber",
    label: "Ask about ongoing support",
    icon: (
      <>
        <path d="M16 4v5m0 14v5M4 16h5m14 0h5M7.5 7.5l3.6 3.6m9.8 9.8 3.6 3.6m0-17-3.6 3.6m-9.8 9.8-3.6 3.6" />
        <circle cx="16" cy="16" r="6" />
      </>
    ),
  },
];

const reasons = [
  [
    "01",
    "Made for you",
    "Every project starts by understanding your goals and real-world needs.",
  ],
  [
    "02",
    "Clear by design",
    "You know what we’re building, when it’s happening, and what comes next.",
  ],
  [
    "03",
    "Ready to scale",
    "A strong foundation that grows with your business and its ambitions.",
  ],
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 42 42" fill="none">
        <path
          d="M11 29h17a8 8 0 0 0 1.1-15.9A10.5 10.5 0 0 0 9 17a6.1 6.1 0 0 0 2 12Z"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="m16 24 6-6m0 0v5m0-5h-5"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Brand({ footer = false }) {
  return (
    <a
      className={`brand${footer ? " footer-brand" : ""}`}
      href="#home"
      aria-label="Cloud Sprint — Home"
    >
      <BrandMark />
      <span className="brand-name" dir="ltr">
        CLOUD <b>SPRINT</b>
        <small>SOFTWARE SERVICES</small>
      </span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Brand />
      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav
        className={`nav-links${menuOpen ? " open" : ""}`}
        aria-label="Main navigation"
      >
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#why-us" onClick={closeMenu}>
          Why Cloud Sprint
        </a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>
          Start a project <span>↙</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
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
          <a className="button button-primary" href="#contact">
            Let’s build <span>↗</span>
          </a>
          <a className="text-link" href="#services">
            Explore our services <span>↓</span>
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

function Services() {
  return (
    <section className="services section-wrap" id="services">
      <div className="section-heading">
        <div>
          <span className="section-kicker">What we do</span>
          <h2>
            Everything you need
            <br />
            to build your <span className="gradient-text">digital edge.</span>
          </h2>
        </div>
        <p>
          From the first line of code to launch day, we build practical digital
          solutions around your goals.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <div className={`service-icon icon-${service.tone}`}>
              <svg viewBox="0 0 32 32">{service.icon}</svg>
            </div>
            <span className="service-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#contact" aria-label={service.label}>
              ↙
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="section-wrap about-inner">
        <div className="about-art">
          <div className="about-ring ring-a" />
          <div className="about-ring ring-b" />
          <div className="about-core">
            <span>CS</span>
            <small>
              MOVE
              <br />
              FORWARD
            </small>
          </div>
          <div className="orbit-label label-one">IDEA</div>
          <div className="orbit-label label-two">BUILD</div>
          <div className="orbit-label label-three">GROW</div>
        </div>
        <div className="about-copy">
          <span className="section-kicker">About Cloud Sprint</span>
          <h2>
            Technology that
            <br />
            <span className="gradient-text">moves you forward.</span>
          </h2>
          <p>
            We believe technology should make work simpler and big ambitions
            feel closer. By combining a deep understanding of your needs with
            thoughtful engineering, we build software that works for you.
          </p>
          <div className="about-points">
            <div>
              <b>01</b>
              <span>Understand your goals first</span>
            </div>
            <div>
              <b>02</b>
              <span>Build a practical, scalable solution</span>
            </div>
            <div>
              <b>03</b>
              <span>Launch and support every step</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyCloudSprint() {
  return (
    <section className="why section-wrap" id="why-us">
      <div className="section-heading centered">
        <span className="section-kicker">The Cloud Sprint difference</span>
        <h2>
          A technology partner who{" "}
          <span className="gradient-text">gets your goals.</span>
        </h2>
        <p>Clear collaboration from the first conversation to launch day.</p>
      </div>
      <div className="why-grid">
        {reasons.map(([number, title, description]) => (
          <div className="why-item" key={number}>
            <span className="why-number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-wrap" id="contact">
      <div className="contact-panel">
        <div className="contact-decoration" />
        <div className="contact-copy">
          <span className="section-kicker">Your next move starts here</span>
          <h2>
            Have an idea?
            <br />
            <span>Let’s make it real.</span>
          </h2>
          <p>
            Explore our services and find the right starting point for your
            project.
          </p>
          <a className="button button-light" href="#services">
            Explore our services <span>↙</span>
          </a>
        </div>
        <div className="contact-mark">
          <img src="/cloud-sprint-logo.png" alt="Cloud Sprint" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <Brand footer />
      <span>Digital solutions that move you forward.</span>
      <span>© {new Date().getFullYear()} Cloud Sprint</span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyCloudSprint />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
