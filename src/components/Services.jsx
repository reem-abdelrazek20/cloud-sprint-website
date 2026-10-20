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

export default function Services() {
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
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className={`service-icon icon-${service.tone}`}>
              <svg viewBox="0 0 32 32">{service.icon}</svg>
            </div>
          
            <h3>{service.title}</h3>
            <p>{service.description}</p>
           
          </article>
        ))}
      </div>
    </section>
  );
}
