import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/content";

export function WhyStats() {
  return (
    <Section id="why" className="relative overflow-hidden border-y border-border bg-bg-2/50">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-brand/10 blur-[140px]" />
      <SectionHeading
        eyebrow="Why Seven14"
        title={<>Outcomes you can <span className="text-gradient-brand">measure</span></>}
        description="Replacing a patchwork of tools with one operating system shows up where it matters — speed, loss, visibility and profit."
      />
      <Reveal stagger className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            data-reveal-item
            className="rounded-2xl border border-border bg-surface/60 p-6 ring-hairline"
          >
            <div className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              <AnimatedCounter
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                decimals={s.value === 99.98 ? 2 : 0}
                className="text-gradient-fade"
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
