import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Industries } from "@/components/sections/Industries";
import { WhyStats } from "@/components/sections/WhyStats";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions — Restaurants, Cafés, Retail, Cloud Kitchens & Franchises",
  description:
    "Seven14 is tuned for restaurants, cafés, retail stores, cloud kitchens, franchises and multi-location businesses — billing, inventory and CRM for how your industry really works.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
        ])}
      />
      <PageHero
        eyebrow="Industry solutions"
        title={<>Built for the way <span className="text-gradient-brand">you operate</span></>}
        description="From a single café to a multi-city franchise, Seven14 adapts to the realities of your industry — without the cost and chaos of stitching tools together."
      >
        <Button href="/contact" size="lg">Talk to our team</Button>
      </PageHero>

      <Industries />

      {/* Industry directory */}
      <Section>
        <SectionHeading
          eyebrow="Who we serve"
          title={<>Six industries, <span className="text-gradient-brand">one operating system</span></>}
        />
        <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                id={ind.id}
                data-reveal-item
                className="scroll-mt-28 rounded-2xl border border-border bg-surface/60 p-6 ring-hairline"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/12 text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-fg">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{ind.description}</p>
              </div>
            );
          })}
        </Reveal>
      </Section>

      <WhyStats />
      <CaseStudies />
      <FinalCta />
    </>
  );
}
