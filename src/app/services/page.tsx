import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Services } from "@/components/sections/Services";
import { FinalCta } from "@/components/sections/FinalCta";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { deliverySteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — ERP, Billing Software, Website & App Development",
  description:
    "Seven14 builds custom ERP systems, GST billing software, business websites, e-commerce stores and Android/iOS apps — designed, launched and supported by our team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Services"
        title={<>Software built <span className="text-gradient-brand">around your business</span></>}
        description="ERP and billing systems, websites and mobile apps — we design, build, launch and support them for businesses of every size."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg">Get a free consultation</Button>
          <Button href="/product" size="lg" variant="secondary">See our platform</Button>
        </div>
      </PageHero>

      <Services showCta={false} />

      <Section>
        <SectionHeading
          eyebrow="How we work"
          title={<>From idea to launch, <span className="text-gradient-brand">without surprises</span></>}
        />
        <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deliverySteps.map((step, i) => (
            <div
              key={step.title}
              data-reveal-item
              className="rounded-2xl border border-border bg-surface/60 p-6 ring-hairline"
            >
              <span className="font-display text-sm font-semibold text-brand">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-fg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{step.description}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      <FinalCta />
    </>
  );
}
