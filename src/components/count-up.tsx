"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";

import { EASE } from "@/components/fade-in";

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const value = useMotionValue(0);
  const text = useTransform(value, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      value.set(to);
      return;
    }
    const controls = animate(value, to, { duration: 1.8, ease: EASE });
    return () => controls.stop();
  }, [inView, reduce, to, value]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {text}
    </motion.span>
  );
}
