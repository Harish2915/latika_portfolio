// src/components/Footer.jsx

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {

  return (

    <footer className="footer">

      {/* TOP GLOW */}

      
      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* CENTER */}

        <div className="footer-center">

          <h1 className="footer-logo">
            Latika S
          </h1>

          <p className="footer-desc">
            Passionate Mobile Application Developer building
            modern and scalable applications with clean
            user experiences.
          </p>

          {/* SOCIALS */}

          <div className="footer-socials">

            <a
              href="https://github.com/latika-sivakumar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/latika-sivakumar-40a3982bb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:latikasasikala@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">

          <p>
            © 2026 Latika S. All rights reserved.
          </p>

          <button
            className="back-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >

            <FaArrowUp />

            <span>
              Back to top
            </span>

          </button>

        </div>

      </div>

    </footer>

  );

}

export default Footer;