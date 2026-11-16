"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inertia scrolling for wheel and trackpad. Makes every scroll-linked animation
 * glide instead of stepping. Touch scrolling stays native, and people who ask
 * for reduced motion get normal scrolling.
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      autoRaf: true,
      anchors: true,
      respectReducedMotion: true,
    });
    return () => lenis.destroy();
  }, []);

  return null;
}
