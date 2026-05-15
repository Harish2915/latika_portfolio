// src/components/About.jsx

import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">
            Get to Know <span className="text-primary">Me</span>
          </h1>

          <p className="text-secondary fs-5 mt-3">
            A passionate developer crafting digital solutions
            with modern technologies
          </p>
        </div>

        {/* Main Content */}
        <div className="row align-items-center g-5">

          {/* Left Side */}
          <div className="col-lg-6" data-aos="fade-right">

            <h3 className="fw-bold mb-4">
              Personal Profile
            </h3>

            <p className="fs-5 text-secondary">
              I'm a passionate <span className="text-primary fw-bold">
                Full Stack & Mobile Application Developer
              </span> who enjoys building scalable applications
              and solving real-world problems through technology.
              A continuous learner with strong collaboration skills,
              always exploring modern development practices.
            </p>

            <h3 className="fw-bold mt-5 mb-4">
              Career Objectives
            </h3>

            <p className="fs-5 text-secondary">
              Seeking an opportunity to leverage my technical
              skills in building innovative solutions while
              continuously learning and growing as a software professional.
            </p>

          </div>

          {/* Right Side */}
          <div className="col-lg-6" data-aos="fade-left">

            <div className="glass-card p-4">

              <h2 className="fw-bold mb-4">
                Quick Info
              </h2>

              <div className="row g-3">

                {/* Email */}
                <div className="col-md-6">
                  <div className="info-card">
                    <FaEnvelope className="info-icon" />

                    <div>
                      <small>Email</small>
                      <h5>
                        <a
                          href="mailto:latikasasikala@gmail.com"
                          target="_blank"
                        >
                          Send a Mail
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="col-md-6">
                  <div className="info-card">
                    <FaPhoneAlt className="info-icon" />

                    <div>
                      <small>Phone</small>
                      <h5>
                        <a href="tel:+916369211035">
                          +91 6369211035
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="col-md-6">
                  <div className="info-card">
                    <FaWhatsapp className="info-icon" />

                    <div>
                      <small>WhatsApp</small>
                      <h5>
                        <a
                          href="https://wa.me/916369211035"
                          target="_blank"
                        >
                          Chat on WhatsApp
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="col-md-6">
                  <div className="info-card">
                    <FaLinkedin className="info-icon" />

                    <div>
                      <small>LinkedIn</small>
                      <h5>
                        <a
                          href="http://www.linkedin.com/in/latika-sivakumar-40a3982bb"
                          target="_blank"
                        >
                          View Profile
                        </a>
                      </h5>
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