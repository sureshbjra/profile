"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

export const EASE = [0.16, 1, 0.3, 1] as const;

/** One calm entrance, used everywhere: fade and rise, once. Only opacity and transform move. */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
