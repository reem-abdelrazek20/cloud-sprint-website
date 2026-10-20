import { LuSquareArrowDownRight } from "react-icons/lu";
export default function Contact() {
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
          <a className="button button-light" 
     
  href="https://www.facebook.com/profile.php?id=61595554470499"
  target="_blank"
  rel="noopener noreferrer">
            Explore our services <span className="service-arrow">
    <LuSquareArrowDownRight aria-hidden="true" />
  </span>
       

   
          </a>
        </div>
        <div className="contact-mark">
          <img src="/cloud-sprint-logo.png" alt="Cloud Sprint" />
        </div>
      </div>
    </section>
  );
}
