// src/components/SmoothScroll.jsx

import { useEffect } from "react";
import Lenis from "lenis";

function SmoothScroll() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.8,
      lerp: 0.08,

      smoothWheel: true,
      smoothTouch: true,
      syncTouch: true,

      wheelMultiplier: 0.8,
      touchMultiplier: 0.8,
    });

    /* GLOBAL ACCESS */

    window.lenis = lenis;

    /* RAF LOOP */

    function raf(time) {

      lenis.raf(time);

      requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

    return () => {

      lenis.destroy();

    };

  }, []);

  return null;
}

export default SmoothScroll;