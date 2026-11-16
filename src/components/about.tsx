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
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
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

      <dl className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {facts.map((f, i) => (
          <FadeIn key={f.label} delay={i * 0.08}>
            <SpotlightCard className="flex h-full flex-col-reverse justify-end gap-2 p-6">
              <dt className="text-sm text-muted-foreground">{f.label}</dt>
              <dd className="text-brand font-display text-6xl leading-none font-semibold tracking-tight md:text-7xl">
                <CountUp to={f.to} />
              </dd>
            </SpotlightCard>
          </FadeIn>
        ))}
      </dl>
    </section>
  );
}
