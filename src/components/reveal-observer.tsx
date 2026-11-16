"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page. It marks [data-reveal] elements with
 * data-shown as they scroll into view (the CSS in globals.css does the
 * animating), and counts [data-count] numbers up from zero.
 */
export function RevealObserver() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const counters = new Map<Element, number>();

    for (const el of document.querySelectorAll<HTMLElement>("[data-count]")) {
      const to = Number(el.dataset.count);
      const r = el.getBoundingClientRect();
      // Only reset numbers that are still below the fold, so nothing visible flickers.
      if (!reduce && r.top > window.innerHeight) {
        counters.set(el, to);
        el.textContent = "0";
      }
    }

    function countUp(el: Element, to: number) {
      const start = performance.now();
      const duration = 1600;
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 4);
        el.textContent = String(Math.round(to * eased));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.dataset.shown = "";
          io.unobserve(el);
          for (const [counter, to] of counters) {
            if (el.contains(counter)) {
              countUp(counter, to);
              counters.delete(counter);
            }
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );

    for (const el of document.querySelectorAll("[data-reveal]")) io.observe(el);
    return () => io.disconnect();
  }, []);

  return null;
}
