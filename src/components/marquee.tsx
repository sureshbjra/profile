import { stack } from "@/lib/profile";

const all = stack.flatMap((g) => g.items);
const rowA = all.filter((_, i) => i % 2 === 0);
const rowB = all.filter((_, i) => i % 2 === 1);

/** Pure CSS marquee: one transform animation per row, which the browser runs off the main thread. */
function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex shrink-0 gap-3 pr-3 will-change-transform ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="pill rounded-full px-5 py-2 font-display text-lg font-medium whitespace-nowrap text-foreground/85"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <div aria-hidden className="fade-edges space-y-3 py-4">
      <Row items={rowA} />
      <Row items={rowB} reverse />
    </div>
  );
}
