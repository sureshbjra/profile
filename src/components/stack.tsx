import { FadeIn } from "@/components/fade-in";
import { RevealHeading } from "@/components/reveal-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { stack } from "@/lib/profile";
import { cn } from "@/lib/utils";

const spans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
];

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <RevealHeading text="What I work with" />

      <dl className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {stack.map((group, i) => (
          <FadeIn
            key={group.area}
            delay={(i % 3) * 0.08}
            className={cn("flex", spans[i])}
          >
            <SpotlightCard className="w-full p-6 md:p-7">
              <dt className="font-display text-2xl font-semibold">{group.area}</dt>
              <dd className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-[0.95rem] text-foreground/90 transition-colors duration-200 hover:border-accent/60 hover:bg-accent/15 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </SpotlightCard>
          </FadeIn>
        ))}
      </dl>
    </section>
  );
}
