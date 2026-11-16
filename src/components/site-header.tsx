import { profile } from "@/lib/profile";

const links = [
  { href: "#work", label: "Work" },
  { href: "#route", label: "Route", hideOnTiny: true },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

/** Server-rendered. The progress bar is a CSS scroll-driven animation. */
export function SiteHeader() {
  return (
    <>
      <div
        aria-hidden
        className="scroll-progress fixed inset-x-0 top-0 z-50 h-0.5 bg-gradient-to-r from-accent via-sky to-violet"
      />
      <header className="anim-drop fixed inset-x-0 top-3 z-40 px-3 sm:top-4 sm:px-4">
        <div className="mx-auto flex h-12 max-w-2xl items-center justify-between gap-2 rounded-full border border-white/10 bg-[#0d0f12]/85 pr-1.5 pl-4 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.9)] backdrop-blur-md sm:pl-5">
          <a
            href="#top"
            className="shrink-0 font-display font-semibold whitespace-nowrap"
          >
            {profile.name}
          </a>
          <nav aria-label="Sections">
            <ul className="flex items-center text-sm">
              {links.map((l) => (
                <li key={l.href} className={l.hideOnTiny ? "max-[359px]:hidden" : undefined}>
                  <a
                    href={l.href}
                    className="block rounded-full px-2.5 py-2 whitespace-nowrap text-foreground/75 transition-colors duration-200 hover:bg-white/10 hover:text-foreground sm:px-3.5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
