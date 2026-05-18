import { useEffect } from "react";
import Lenis from "lenis";

function SmoothScroll() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 2,
      lerp: 0.08,

      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.08,

      wheelMultiplier: 0.7,
      touchMultiplier: 0.7,

      infinite: false,
    });

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