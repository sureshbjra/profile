import { CountUp } from "@/components/count-up";
import { FadeIn } from "@/components/fade-in";
import { RevealHeading } from "@/components/reveal-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { about, projects } from "@/lib/profile";

const facts = [
  { to: 10, label: "years building for the web" },
  { to: 6, label: "developers on the team I lead" },
  { to: projects.length, label: "products on this page" },
  { to: 3, label: "countries worked in" },
];

export function About() {
  const [lead, ...rest] = about;

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <RevealHeading text="Ten years in, still writing the code." />
        </div>
        <div className="space-y-5 lg:pt-3">
          <FadeIn>
            <p className="text-xl leading-relaxed text-foreground/90">{lead}</p>
          </FadeIn>
          {rest.map((p, i) => (
            <FadeIn key={p} delay={0.1 * (i + 1)}>
              <p className="text-muted-foreground">{p}</p>
            </FadeIn>
          ))}
        </div>
      </div>

      <ul className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {facts.map((f, i) => (
          <li key={f.label} className="flex">
            <FadeIn delay={i * 0.08} className="flex w-full">
              <SpotlightCard className="flex w-full flex-col gap-2 p-5 sm:p-6">
                <p className="text-brand font-display text-5xl leading-none font-semibold tracking-tight sm:text-6xl md:text-7xl">
                  <CountUp to={f.to} />
                </p>
                <p className="text-sm text-muted-foreground">{f.label}</p>
              </SpotlightCard>
            </FadeIn>
          </li>
        ))}
      </ul>
    </section>
  );
}
