/** The number is in the HTML; reveal-observer.tsx counts it up when it scrolls into view. */
export function CountUp({ to }: { to: number }) {
  return (
    <span data-count={to} className="tabular-nums">
      {to}
    </span>
  );
}
