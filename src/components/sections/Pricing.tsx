import { Check, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { plans } from "@/lib/content";
import { cn } from "@/lib/utils";

export function PricingCards() {
  return (
    <Reveal stagger className="grid gap-5 lg:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          data-reveal-item
          data-cursor
          className={cn(
            "relative flex flex-col rounded-2xl border p-7 ring-hairline transition-transform duration-300 hover:-translate-y-1",
            plan.featured
              ? "border-brand/50 bg-surface-2 shadow-brand-glow"
              : "border-border bg-surface/60",
          )}
        >
          {plan.featured && (
            <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-white">
              <Sparkles className="h-3 w-3" /> Most popular
            </span>
          )}
          <div className="font-display text-lg font-semibold text-fg">{plan.name}</div>
          <p className="mt-2 min-h-10 text-sm leading-relaxed text-fg-muted">{plan.blurb}</p>
          <div className="mt-5 flex items-end gap-1.5">
            <span className="font-display text-4xl font-semibold tracking-tight text-fg">{plan.price}</span>
            <span className="mb-1 text-sm text-fg-subtle">{plan.period}</span>
          </div>
          <Button
            href="/contact"
            variant={plan.featured ? "primary" : "secondary"}
            className="mt-6 w-full"
          >
            {plan.cta}
          </Button>
          <ul className="mt-7 flex flex-col gap-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-fg-muted">
                <Check
                  className={cn("mt-0.5 h-4 w-4 shrink-0", plan.featured ? "text-brand" : "text-emerald")}
                />
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Reveal>
  );
}

export function PricingTeaser() {
  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Pricing"
        title={<>Simple pricing that <span className="text-gradient-brand">scales with you</span></>}
        description="Start with a single outlet and grow to a multi-city operation — without switching platforms or re-training your team."
      />
      <div className="mt-14">
        <PricingCards />
      </div>
      <p className="mt-8 text-center text-sm text-fg-subtle">
        All plans include a 14-day free trial. No credit card required.
      </p>
    </Section>
  );
}
