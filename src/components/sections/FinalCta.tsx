import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container-page">
        <Reveal
          stagger
          className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface px-6 py-16 text-center md:px-12 md:py-24"
        >
          {/* glow field */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-64 w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-brand/15 blur-[130px]" />
            <div className="absolute inset-0 bg-grid opacity-[0.12] mask-fade-b" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 data-reveal-item className="text-balance text-3xl font-semibold leading-tight text-fg sm:text-5xl">
              Ready to modernize your <span className="text-gradient-brand">business operations?</span>
            </h2>
            <p data-reveal-item className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
              Join 1,200+ outlets running billing, inventory, CRM and analytics on one
              platform. See it on your own data in a 30-minute demo.
            </p>
            <div data-reveal-item className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg" data-cursor>
                Book a Free Demo
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button href="/services" size="lg" variant="outline" data-cursor>
                Our services
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
