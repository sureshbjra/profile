import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { RevealHeading } from "@/components/reveal-heading";
import { profile } from "@/lib/profile";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
      <FadeIn y={40}>
        <div className="glass relative overflow-hidden rounded-3xl px-6 py-16 text-center md:px-14 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_50%_0%,rgba(45,212,191,0.22),transparent_70%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
          />

          <div className="relative">
            <RevealHeading
              text="Building something with maps, bookings or AI agents?"
              className="mx-auto max-w-3xl text-balance"
            />
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              I am happy to talk with developers, founders and teams. WhatsApp
              is the quickest way to reach me, or you can call me directly.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="accent">
                <a href={profile.links.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={profile.links.phone}>
                  <Phone aria-hidden />
                  Call {profile.phoneDisplay}
                </a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

      <footer className="mt-10 flex flex-wrap justify-between gap-2 text-sm text-muted-foreground">
        <p>
          {profile.name}. {profile.role}.
        </p>
        <p>Built with Next.js, Tailwind CSS, shadcn/ui and Motion.</p>
      </footer>
    </section>
  );
}
