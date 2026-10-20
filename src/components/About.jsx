export default function About() {
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
