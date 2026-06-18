import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PricingCards } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pricing — Plans for every outlet",
  description:
    "Transparent pricing for Seven14 Tech Studio. Starter, Growth and Enterprise plans with billing, POS, inventory, CRM and analytics. 14-day free trial, no credit card required.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Pricing", url: "/pricing" },
          ]),
          faqSchema(),
        ]}
      />
      <PageHero
        eyebrow="Pricing"
        title={<>Pricing that <span className="text-gradient-brand">grows with you</span></>}
        description="Start free on a single outlet and scale to a multi-city operation on the same platform. No setup fees, no surprises."
      />
      <Section className="pt-4">
        <PricingCards />
        <p className="mt-8 text-center text-sm text-fg-subtle">
          Prices in INR, billed per outlet. All plans include a 14-day free trial · No credit card required.
        </p>
      </Section>
      <Faq />
      <FinalCta />
    </>
  );
}
