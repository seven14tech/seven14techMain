import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CoreModules } from "@/components/sections/CoreModules";
import { ProductStory } from "@/components/sections/ProductStory";
import { EcosystemMap } from "@/components/sections/EcosystemMap";
import { AnalyticsShowcase } from "@/components/sections/AnalyticsShowcase";
import { FinalCta } from "@/components/sections/FinalCta";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Product — Billing, POS, Inventory, CRM & Analytics",
  description:
    "Explore the Seven14 platform: billing & POS, kitchen display, inventory, purchasing, CRM, reports, financials and team management — one connected business operating system.",
  alternates: { canonical: "/product" },
};

export default function ProductPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Product", url: "/product" },
        ])}
      />
      <PageHero
        eyebrow="The platform"
        title={<>One platform for <span className="text-gradient-brand">every operation</span></>}
        description="Billing, POS, kitchen, inventory, purchasing, CRM, reports and finance — built to work as one system on shared, real-time data."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg">Book Demo</Button>
          <Button href="/services" size="lg" variant="secondary">Our services</Button>
        </div>
      </PageHero>
      <EcosystemMap />
      <ProductStory />
      <CoreModules />
      <AnalyticsShowcase />
      <FinalCta />
    </>
  );
}
