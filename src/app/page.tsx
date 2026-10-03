import { Hero } from "@/components/sections/Hero";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { EcosystemMap } from "@/components/sections/EcosystemMap";
import { CoreModules } from "@/components/sections/CoreModules";
import { Services } from "@/components/sections/Services";
import { ProductStory } from "@/components/sections/ProductStory";
import { WhyStats } from "@/components/sections/WhyStats";
import { Industries } from "@/components/sections/Industries";
import { AnalyticsShowcase } from "@/components/sections/AnalyticsShowcase";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <Hero />
      <TrustedMarquee />
      <EcosystemMap />
      <CoreModules />
      <Services />
      <ProductStory />
      <WhyStats />
      <Industries />
      <AnalyticsShowcase />
      <CaseStudies />
      <Faq />
      <FinalCta />
    </>
  );
}
