// src/components/Projects.jsx

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaGithub, FaTimes } from "react-icons/fa";
import "../styles/Projects.css";

import taskImg   from "../../public/projects/task.png";
import amazonImg from "../../public/projects/amazon.png";
import indeedImg from "../../public/projects/indeed.png";
import notesImg  from "../../public/projects/notes.png";
import loanImg   from "../../public/projects/loan.png";

/* ─── Projects data ──────────────────────────────────────────────────────── */

const projects = [
  {
    title: "Task Management System",
    image: taskImg,
    short: "Modern task management application with productivity features.",
    full: "A complete task management web application developed with modern frontend technologies. Includes task creation, editing, deletion, progress tracking, responsive UI, and clean user experience for productivity management.",
    tech: ["Python", "FastAPI", "MySQL", "REST API", "Postman"],
    github: "https://github.com/latika-sivakumar/task_management_system.git",
  },

  {
    title: "Amazon Scraper",
    image: amazonImg,
    short: "Python web scraper for extracting Amazon product data.",
    full: "A Python-based scraper that collects Amazon product details including product names, ratings, reviews, prices, and descriptions using web scraping techniques.",
    tech: ["Python", "BeautifulSoup", "Requests", "Web Scraping"],
    github: "https://github.com/latika-sivakumar/Amazon-Scraper.git",
  },

  {
    title: "Indeed Scraper",
    image: indeedImg,
    short: "Job listing scraper for extracting Indeed job data.",
    full: "A job scraping application that extracts company details, job roles, salary information, and locations from Indeed for job analytics and research purposes.",
    tech: ["Python", "Apify API", "CSV", "Automation"],
    github: "https://github.com/latika-sivakumar/Indeed-Scraper.git",
  },

  {
    title: "Pin Your Note",
    image: notesImg,
    short: "A modern notes application for managing important notes.",
    full: "A responsive note management application with note creation, editing, deletion, pinning important notes, and modern UI design for better productivity.",
    tech: ["Python", "Tkinter", "SQLite", "SMTP"],
    github: "https://github.com/latika-sivakumar/Pin-Your-Note.git",
  },

  {
    title: "Loan Prediction",
    image: loanImg,
    short: "Machine learning model for predicting loan approval.",
    full: "A machine learning project that predicts whether a loan application will be approved using classification algorithms and data preprocessing techniques.",
    tech: ["Python", "Machine Learning", "Pandas", "Data Analysis"],
    github: "https://github.com/latika-sivakumar/Loan-Prediction.git",
  },
];

/* ─── Scroll lock / unlock ───────────────────────────────────────────────── */
/*
  ROOT CAUSE FIX:
  The old approach used `overflow: hidden` on body alone, which causes
  the browser to snap scroll position to 0 — making the page visually
  jump to the top behind the modal.

  THE CORRECT TECHNIQUE:
  1. Capture scrollY BEFORE locking.
  2. Set `position: fixed; top: -scrollY` on body via a CSS variable.
     This pins the body exactly where the user was — no visual jump.
  3. On unlock: remove the fixed positioning, then SYNCHRONOUSLY
     restore window.scrollTo() with behavior:'instant'.
  4. Temporarily disable CSS smooth-scroll on <html> during restoration
     so no animated scroll-to-top occurs.
*/

function lockScroll() {
  const scrollY = window.scrollY;

  // Measure scrollbar width before hiding overflow (prevents layout shift)
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  // Store scrollY so we can restore it on unlock
  document.documentElement.dataset.scrollY = String(scrollY);

  // Set scrollbar compensation
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    `${scrollbarWidth}px`
  );

  // KEY: set body top to negative scrollY — this is what prevents the jump.
  // The body stays visually frozen at the exact scroll position.
  document.body.style.setProperty(
    "--modal-scroll-y",
    `-${scrollY}px`
  );
  // Also set as a CSS variable on html so the CSS rule can read it
  document.documentElement.style.setProperty(
    "--modal-scroll-y",
    `-${scrollY}px`
  );

  // Apply lock classes (CSS uses position:fixed + top:var(--modal-scroll-y))
  document.documentElement.classList.add("modal-open");
  document.body.classList.add("modal-open");
}

function unlockScroll() {
  const scrollY = parseInt(
    document.documentElement.dataset.scrollY || "0",
    10
  );

  // 1. Temporarily disable CSS smooth-scroll so the restoration is instant.
  //    Some global styles (html { scroll-behavior: smooth }) would otherwise
  //    animate the scroll back to top before jumping to the saved position.
  const prevScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";

  // 2. Remove lock classes — this un-fixes the body.
  //    At this point the page scroll is at 0 (because fixed body has no scroll),
  //    so we MUST restore it immediately before the next paint.
  document.documentElement.classList.remove("modal-open");
  document.body.classList.remove("modal-open");

  // 3. Restore scroll position SYNCHRONOUSLY (no rAF, no setTimeout).
  //    Doing this in the same call stack as removing the classes
  //    means the browser composites both changes in the same frame —
  //    the user never sees the intermediate scroll-at-0 state.
  window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });

  // 4. Clean up CSS variables
  document.documentElement.style.removeProperty("--scrollbar-width");
  document.documentElement.style.removeProperty("--modal-scroll-y");
  document.body.style.removeProperty("--modal-scroll-y");
  delete document.documentElement.dataset.scrollY;

  // 5. Restore original scroll-behavior after one frame
  //    (so user-initiated smooth scrolling still works after modal close)
  requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = prevScrollBehavior || "";
  });
}

/* ─── Portal Modal ───────────────────────────────────────────────────────── */

function ProjectModal({ project, onClose, triggerEl }) {
  const overlayRef = useRef(null);
  const modalRef   = useRef(null);
  const [visible, setVisible] = useState(false);

  // Animate in on next paint
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Move focus inside modal
  useEffect(() => {
    const first = modalRef.current?.querySelector(
      'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
    );
    first?.focus();
  }, []);

  // Prevent touchmove bleed on iOS (overlay background)
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const prevent = (e) => {
      if (e.target === overlay) e.preventDefault();
    };
    overlay.addEventListener("touchmove", prevent, { passive: false });
    return () => overlay.removeEventListener("touchmove", prevent);
  }, []);

  function handleClose() {
    // Start exit animation
    setVisible(false);

    setTimeout(() => {
      // 1. Unlock scroll (restores scroll position synchronously)
      unlockScroll();

      // 2. Restore focus to the button that opened the modal
      //    preventScroll: true ensures the browser does NOT re-scroll to it
      if (triggerEl) {
        triggerEl.focus({ preventScroll: true });
      }

      // 3. Remove modal from tree
      onClose();
    }, 280); // matches CSS transition duration
  }

  return createPortal(
    <div
      ref={overlayRef}
      className={`pm-overlay${visible ? " pm-overlay--in" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pm-title-id"
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose();
      }}
    >
      <div
        ref={modalRef}
        className={`pm-modal${visible ? " pm-modal--in" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          className="pm-close"
          aria-label="Close modal"
          onClick={handleClose}
        >
          <FaTimes />
        </button>

        <div className="pm-body">
          {/* Image */}
          <div className="pm-image-side">
            <img
              src={project.image}
              alt={project.title}
              className="pm-img"
            />
          </div>

          {/* Content */}
          <div className="pm-content-side">
            <h2 id="pm-title-id" className="pm-title">
              {project.title}
            </h2>
            <p className="pm-description">{project.full}</p>

            <div className="pm-tags">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <FaGithub /> View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ─── Single card ────────────────────────────────────────────────────────── */

function ProjectCard({ project, index, onOpen }) {
  const btnRef = useRef(null);

  return (
    <div className="col-lg-6 col-md-12 mb-5">
      <div className="project-card" data-aos="zoom-in">

        <div className="project-image-wrapper">
          <img
            src={project.image}
            alt={project.title}
            className="project-img"
          />
        </div>

        <div className="project-content">
          <div className="project-top">
            <span className="project-number">0{index + 1}</span>
            <div className="project-line" />
          </div>
          <h3>{project.title}</h3>
          <p>{project.short}</p>
          <div className="project-tags">
            {project.tech.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-btn-wrapper">
          <button
            ref={btnRef}
            type="button"
            className="project-view-btn"
            onClick={() => onOpen(project, btnRef.current)}
          >
            View
          </button>
        </div>

      </div>
    </div>
  );
}

/* ─── Projects section ───────────────────────────────────────────────────── */

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeTrigger, setActiveTrigger] = useState(null);

  function openModal(project, el) {
    lockScroll();
    setActiveTrigger(el);
    setActiveProject(project);
  }

  function closeModal() {
    setActiveProject(null);
    setActiveTrigger(null);
  }

  // Safety net: clean up if this component unmounts while modal is open
  useEffect(() => {
    return () => {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
      document.documentElement.style.removeProperty("--scrollbar-width");
      document.documentElement.style.removeProperty("--modal-scroll-y");
      document.body.style.removeProperty("--modal-scroll-y");
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h1 className="title" data-aos="fade-up">
          Projects
        </h1>

        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onOpen={openModal}
            />
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={closeModal}
          triggerEl={activeTrigger}
        />
      )}
    </section>
  );
}

export default Projects;