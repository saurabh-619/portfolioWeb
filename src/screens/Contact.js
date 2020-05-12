import React from "react";
import contactimg from "../images/contact.svg";
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div id="contact" className="container">
        <div className="section-intro" data-aos="fade-up">
          <h1 className="section-title">Want to Contact me?</h1>
          <div className="section-desc">
            <p className="desc-section">
              “The most important thing in communication is to hear what isn’t
              being said.”
            </p>
            <i>~ Peter Drucker</i>
          </div>
        </div>
        <div className="contact-content">
          <div className="social">
            <div className="social-text" data-aos="fade-up">
              <h1>
                I'm here for you,<span> Say Hi!</span>
              </h1>
            </div>
            <div className="social-icons" data-aos="fade-up">
              <a
                href="https://www.linkedin.com/in/saurabh-bomble-954321171/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/saurabh_bomble619/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://github.com/saurabh-619"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="mailto:saurabhbomble1011@gmail.com"
                target="_top"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="contact-img" data-aos="fade-up">
            <img src={contactimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
