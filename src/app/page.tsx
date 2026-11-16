import { MotionConfig } from "motion/react";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Projects } from "@/components/projects";
import { SiteHeader } from "@/components/site-header";
import { Stack } from "@/components/stack";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <SiteHeader />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
      </main>
    </MotionConfig>
  );
}
