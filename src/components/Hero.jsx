// src/components/Hero.jsx

import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaReact,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import profile from "../../public/profile1.jpg";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}

          <div className="col-lg-6" data-aos="fade-right">

            <h1 className="hero-title">
              Hi, I'm <span>Latika</span>
            </h1>

            <h2 className="hero-sub">
              I'm Turning Ideas into Smart Mobile Applications
            </h2>

            <p className="hero-text">
              Passionate mobile application developer focused on building
              smooth, user-friendly, and high-performance apps with
              modern designs and real-world functionality.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="hero-btn col-md-5 col-lg-5 col-sm-12">
                View Projects
                <FaArrowRight />
              </a>

              <a href="#contact" className="hero-btn col-md-5 col-lg-5 col-sm-12">
                Contact Me
                <FaArrowRight />
              </a>
              <a href="/resume/latika_resume.pdf"
                // target="_blank"
                // rel="noopener noreferrer"
                download
                className="hero-outline-btn col-md-5 col-lg-5 col-sm-12">
                Download Resume
              </a>
              {/* <a
                href="/Resume/Harish_Resume.pdf"
                download
                variant="outline"
                // icon={HiDownload}
                className="w-full sm:w-auto sm:min-w-[160px]"
              >
                Download Resume
              </a> */}

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div
            className="col-lg-6 text-center position-relative"
            data-aos="fade-left"
          >

            {/* Glow Circle */}

            <div className="hero-glow"></div>

            {/* Floating Rings */}

            <div className="ring ring1"></div>
            <div className="ring ring2"></div>

            {/* Main Hero Card */}

            <div className="hero-card glass">

              {/* PROFILE IMAGE */}

              <div className="hero-avatar">
                <img
                  src={profile}
                  alt="Latika"
                  className="profile-img"
                />
              </div>

              <h3 className="mt-4">
                Latika S
              </h3>

              <p>Mobile Application Developer</p>

            </div>

            {/* Floating Icons */}

            {/* <div className="floating-icon icon1">
              <FaCode />
            </div> */}

            <div className="floating-icon icon1">
              <FaReact />
            </div>

            <div className="floating-icon icon2">
              <FaFlutter />
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;