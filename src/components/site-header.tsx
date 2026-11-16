"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

import { EASE } from "@/components/fade-in";
import { profile } from "@/lib/profile";

const links = [
  { href: "#work", label: "Work" },
  { href: "#route", label: "Route" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-accent via-sky to-violet"
        style={{ scaleX: progress }}
      />
      <motion.header
        className="fixed inset-x-0 top-4 z-40 px-4"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <div className="mx-auto flex h-12 max-w-2xl items-center justify-between rounded-full border border-white/10 bg-[#0d0f12]/80 pr-1.5 pl-5 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.9)] backdrop-blur-md">
          <a href="#top" className="font-display font-semibold">
            {profile.name}
          </a>
          <nav aria-label="Sections">
            <ul
              className="flex items-center text-sm"
              onPointerLeave={() => setHovered(null)}
            >
              {links.map((l) => (
                <li key={l.href} className="relative">
                  {hovered === l.href && (
                    <motion.span
                      layoutId="nav-hover"
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  <a
                    href={l.href}
                    onPointerEnter={() => setHovered(l.href)}
                    className="relative block rounded-full px-2.5 py-2 text-foreground/75 transition-colors hover:text-foreground sm:px-3.5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.header>
    </>
  );
}
