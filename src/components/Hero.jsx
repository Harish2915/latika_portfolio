// src/components/Hero.jsx

import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaPalette
} from "react-icons/fa";

import profile from "../assets/profile1.jpg";

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
              Building Beautiful Digital Experiences
            </h2>

            <p className="hero-text">
              Passionate about crafting responsive,
              animated and high-performance applications
              with modern UI/UX experiences.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="hero-btn col-md-5 col-lg-5">
                View Projects
                <FaArrowRight />
              </a>

              <a href="#contact" className="hero-outline-btn col-md-5 col-lg-5">
                Contact Me
              </a>

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

              <p>Application Developer</p>

            </div>

            {/* Floating Icons */}

            <div className="floating-icon icon1">
              <FaCode />
            </div>

            <div className="floating-icon icon2">
              <FaLaptopCode />
            </div>

            <div className="floating-icon icon3">
              <FaPalette />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;