// src/App.jsx

import { useEffect, useState, lazy, Suspense } from "react";

import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function SectionFallback({ height = "60vh" }) {
  return (
    <div className="section-skeleton" style={{ minHeight: height }}>
      <div className="skeleton-title" />
      <div className="skeleton-row">
        <div className="skeleton-card" />
        <div className="skeleton-card" />
      </div>
    </div>
  );
}

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
    });

    /* LOADER TIMER */

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  useEffect(() => {
    if (!loading) {
      AOS.refresh();
      const rafId = requestAnimationFrame(() => AOS.refresh());
      const timeoutId = setTimeout(() => AOS.refresh(), 300);

      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(timeoutId);
      };
    }
  }, [loading]);

  /* SHOW LOADER */

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <Suspense fallback={<SectionFallback height="100vh" />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<SectionFallback height="80vh" />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionFallback height="80vh" />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionFallback height="120vh" />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionFallback height="80vh" />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<SectionFallback height="40vh" />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;