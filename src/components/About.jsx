// src/components/About.jsx

import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container mt-5">

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">
            Get to Know <span className="text-primary">Me</span>
          </h1>

          <p className="text-secondary fs-5 mt-3 justify-content-center d-flex align-items-center gap-2">
            A passionate developer crafting digital solutions
            with modern technologies.
          </p>
        </div>

        {/* Main Content */}
        <div className="row align-items-center gy-5">

          {/* Left Side */}
          <div
            className="col-lg-6"
            data-aos="fade-right"
          >

            <h3 className="fw-bold mb-4 text-lg-start text-center">
              Personal Profile
            </h3>

            <p className="fs-5 text-secondary about-text ">
              I'm a passionate <span className="text-primary fw-bold">
                Mobile Application Developer
              </span> who enjoys building scalable applications
              and solving real-world problems through technology.
              A continuous learner with strong collaboration skills,
              always exploring modern development practices.
            </p>

            <h3 className="fw-bold mt-5 mb-4 text-lg-start text-center">
              Career Objectives
            </h3>

            <p className="fs-5 text-secondary about-text">
              Seeking an opportunity to leverage my technical
              skills in building innovative solutions while
              continuously learning and growing as a software professional.
            </p>

          </div>

          {/* Right Side */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
          >

            <div className="glass-card">

              <h2 className="fw-bold mb-4 text-center">
                Quick Info
              </h2>

              <div className="row gx-2 gy-2">

                {/* Email */}
                <div className="col-12 col-sm-6">
                  <div className="info-card">
                    <FaEnvelope className="info-icon" />

                    <div>
                      <small>Email</small>

                      <a
                        href="mailto:latikasasikala@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Send a Mail
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="col-12 col-sm-6">
                  <div className="info-card">
                    <FaPhoneAlt className="info-icon" />

                    <div>
                      <small>Phone</small>

                      <a href="tel:+916369211035">
                        +91 6369211035
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="col-12 col-sm-6">
                  <div className="info-card">
                    <FaWhatsapp className="info-icon" />

                    <div>
                      <small>WhatsApp</small>

                      <a
                        href="https://wa.me/916369211035"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="col-12 col-sm-6">
                  <div className="info-card">
                    <FaLinkedin className="info-icon" />

                    <div>
                      <small>LinkedIn</small>

                      <a
                        href="http://www.linkedin.com/in/latika-sivakumar-40a3982bb"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;