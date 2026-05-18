import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaGithub, FaTimes } from "react-icons/fa";

function unlockScroll() {
  const scrollY = parseInt(
    document.documentElement.dataset.scrollY || "0",
    10
  );

  const prevScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";

  document.documentElement.classList.remove("modal-open");
  document.body.classList.remove("modal-open");

  window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });

  document.documentElement.style.removeProperty("--scrollbar-width");
  document.documentElement.style.removeProperty("--modal-scroll-y");
  document.body.style.removeProperty("--modal-scroll-y");

  requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = prevScrollBehavior || "";
  });
}

function ProjectModal({ project, onClose, triggerEl }) {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const first = modalRef.current?.querySelector(
      'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
    );
    first?.focus();
  }, []);

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
    setVisible(false);

    setTimeout(() => {
      unlockScroll();
      if (triggerEl) {
        triggerEl.focus({ preventScroll: true });
      }
      onClose();
    }, 280);
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
        <button
          type="button"
          className="pm-close"
          aria-label="Close modal"
          onClick={handleClose}
        >
          <FaTimes />
        </button>

        <div className="pm-body">
          <div className="pm-image-side">
            <img
              src={project.image}
              alt={project.title}
              className="pm-img"
              loading="lazy"
              decoding="async"
            />
          </div>

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

export default ProjectModal;
