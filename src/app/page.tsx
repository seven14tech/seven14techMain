import { Hero } from "@/components/sections/Hero";
import { Audiences } from "@/components/sections/Audiences";
import { Offerings } from "@/components/sections/Offerings";
import { ModuleBento } from "@/components/sections/ModuleBento";
import { ErpPanel } from "@/components/sections/ErpPanel";
import { Facts } from "@/components/sections/Facts";
import { Registry } from "@/components/sections/Registry";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Head } from "@/components/ui/Head";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { billingModules, services } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <Hero />
      <Audiences />
      <Offerings />

      {/* Billing System */}
      <section className="section ruled" id="billing">
        <div className="container stack-lg">
          <Head
            align="row"
            eyebrow="Seven14 Billing System"
            title={
              <>
                Billing, stock and books on one <em>ledger</em>.
              </>
            }
            lead="Every bill, purchase and payment lands in the same live record, so the counter, the stock room and the accounts never disagree. Runs on Windows and Android."
          />
          <ModuleBento
            modules={billingModules.slice(0, 7)}
            spans={["w4", "", "", "", "", "w3", "w3"]}
            tones={{ 0: "lilac" }}
            detailed={[0, 5, 6]}
            anchor={false}
          />
          <div className="row-wrap reveal">
            <Button href="/billing" arrow>
              Explore the billing system
            </Button>
            <Button href="/contact" variant="secondary">
              Book a billing demo
            </Button>
          </div>
        </div>
      </section>

      <ErpPanel />
      <Facts />

      {/* Custom software services */}
      <section className="section" id="services">
        <div className="container stack-lg">
          <Head
            align="row"
            eyebrow="Custom software"
            title={
              <>
                And when you need something <em>bespoke</em>.
              </>
            }
            lead="The same team that builds our products designs, builds and supports websites, apps and systems for clients, scoped and quoted up front."
          />
          <Registry items={services} labels={["Service", "What it covers", "Includes"]} />
          <div className="row-wrap reveal">
            <Button href="/services" variant="secondary" arrow>
              All services
            </Button>
            <Button href="/contact" variant="cobalt">
              Get a free consultation
            </Button>
          </div>
        </div>
      </section>

      <Process />
      <Faq />
      <FinalCta />
    </>
  );
}
