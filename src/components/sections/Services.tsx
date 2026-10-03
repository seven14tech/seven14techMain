import { ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/content";

export function Services({ showCta = true }: { showCta?: boolean }) {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Our services"
        title={<>ERP, billing, websites and apps — <span className="text-gradient-brand">built for you</span></>}
        description="Beyond our platform, our team builds custom ERP and billing systems, websites and mobile apps for businesses that want software made around them."
      />
      <Reveal stagger className="mt-14 grid gap-5 md:grid-cols-2">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.id}
              id={s.id}
              data-reveal-item
              className="scroll-mt-28 rounded-2xl border border-border bg-surface/60 p-7 ring-hairline transition-colors duration-300 hover:border-border-strong"
            >
              <span
                className="grid h-12 w-12 place-items-center rounded-xl ring-hairline"
                style={{ backgroundColor: `color-mix(in oklab, ${s.accent} 14%, transparent)` }}
              >
                <Icon className="h-6 w-6" style={{ color: s.accent }} />
              </span>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider" style={{ color: s.accent }}>
                {s.tagline}
              </p>
              <h3 className="mt-1.5 font-display text-xl font-semibold text-fg">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{s.description}</p>
              <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-fg-muted">
                    <Check className="h-3.5 w-3.5 shrink-0" style={{ color: s.accent }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </Reveal>
      {showCta && (
        <div className="mt-10 flex justify-center">
          <Button href="/services" variant="secondary">
            Explore our services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Section>
  );
}
