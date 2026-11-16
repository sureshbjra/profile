"use client";

import { useEffect, useRef, type ComponentProps } from "react";

/**
 * Pauses the CSS animations inside it while it is off screen, so looping
 * vehicles cost nothing when nobody can see them. With startActive={false}
 * the animations also wait until it is first scrolled into view.
 */
export function InView({
  startActive = true,
  ...props
}: ComponentProps<"div"> & { startActive?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        el.dataset.active = String(entry.isIntersecting);
      },
      { rootMargin: "80px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} data-active={String(startActive)} {...props} />;
}
