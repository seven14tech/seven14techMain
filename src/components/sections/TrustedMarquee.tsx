import { trustedLogos } from "@/lib/content";

export function TrustedMarquee() {
  const row = [...trustedLogos, ...trustedLogos];
  return (
    <section aria-label="Trusted by leading businesses" className="border-y border-border bg-bg-2/60 py-12">
      <div className="container-page">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-fg-subtle">
          Trusted by 1,200+ outlets across restaurants, cafés &amp; retail
        </p>
      </div>
      <div className="relative mt-8 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-12 pr-12 hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2.5 text-lg font-semibold tracking-tight text-fg-muted/70 transition-colors hover:text-fg"
            >
              <span className="grid h-7 w-7 place-items-center rounded-md bg-white/5 text-[11px] font-bold text-fg-subtle">
                {name[0]}
              </span>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
