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

export default function WhyCloudSprint() {
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
