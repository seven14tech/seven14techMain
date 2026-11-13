import type { Metadata } from "next";
import { Monitor, Smartphone, Cloud, Building2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ModuleBento } from "@/components/sections/ModuleBento";
import { IndustriesAccordion } from "@/components/sections/Industries";
import { Registry } from "@/components/sections/Registry";
import { FinalCta } from "@/components/sections/FinalCta";
import { Head } from "@/components/ui/Head";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, billingSchema } from "@/lib/schema";
import { billingIndustries, billingModules } from "@/lib/content";

export const metadata: Metadata = {
  title: "Billing System — GST Billing, POS, Inventory & Accounting Software",
  description:
    "The Seven14 Billing System: GST invoicing, POS, inventory with batch and expiry, purchasing, double-entry accounting, restaurant KOT and payroll. Runs on Windows and Android.",
  alternates: { canonical: "/billing" },
};

const platforms = [
  { icon: Monitor, label: "Windows desktop app", gem: "periwinkle" },
  { icon: Smartphone, label: "Android app", gem: "sage" },
  { icon: Cloud, label: "Cloud-synced account", gem: "saffron" },
  { icon: Building2, label: "Every branch, one login", gem: "terracotta" },
];

export default function BillingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Billing System", url: "/billing" },
          ]),
          billingSchema(),
        ]}
      />
      <PageHero
        eyebrow="Seven14 Billing System"
        title={
          <>
            GST billing that keeps the <em>books</em> for you.
          </>
        }
        description="POS, invoicing, inventory, purchasing and accounting in one system for shops, restaurants, pharmacies, salons and distributors. Every sale posts itself to the ledger."
      >
        <Button href="/contact" arrow>
          Book a billing demo
        </Button>
        <Button href="#modules" variant="secondary">
          See the modules
        </Button>
      </PageHero>

      <section className="section tight">
        <div className="container">
          <div className="jewels reveal">
            {platforms.map((p) => {
              const Icon = p.icon;
              return (
                <span key={p.label} className="jewel">
                  <span className={`gem ${p.gem}`}>
                    <Icon aria-hidden />
                  </span>
                  {p.label}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section ruled" id="modules">
        <div className="container stack-lg">
          <Head
            align="row"
            eyebrow="Modules"
            title={
              <>
                Eleven modules, one <em>shared</em> ledger.
              </>
            }
            lead="Switch on what you need today and add the rest as you grow. Everything shares the same live stock and the same books."
          />
          <ModuleBento
            modules={billingModules}
            spans={["w4", "", "", "", "", "w3", "w3", "", "", "", "w6"]}
            tones={{ 0: "lilac", 5: "saffron" }}
            detailed={[0, 5, 6]}
          />
        </div>
      </section>

      <section className="section ruled" id="industries">
        <div className="container stack-lg">
          <Head
            align="row"
            eyebrow="Who it's for"
            title={
              <>
                Tuned to the way <em>you</em> sell.
              </>
            }
            lead="The same system adapts to a café counter, a pharmacy shelf, a salon chair or a distributor's order book."
          />
          <IndustriesAccordion items={billingIndustries} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container stack-lg">
          <Head
            eyebrow="Under the hood"
            title={
              <>
                Built to be <em>trusted</em> with your money.
              </>
            }
          />
          <div className="arch reveal">
            <div>
              <span className="num">01</span>
              <h3 className="h3">An append-only stock ledger</h3>
              <p className="muted">Stock is never overwritten. Every opening, purchase, sale and adjustment is a movement you can trace.</p>
            </div>
            <div>
              <span className="num">02</span>
              <h3 className="h3">Double entry, automatically</h3>
              <p className="muted">Sales, purchases and payments post balanced journals, so your trial balance, P&amp;L and balance sheet are always current.</p>
            </div>
            <div>
              <span className="num">03</span>
              <h3 className="h3">Access by role and branch</h3>
              <p className="muted">Seven built-in roles from Owner to Viewer, custom roles of your own, and data kept separate per business.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack-lg">
          <Head
            eyebrow="Module registry"
            title={
              <>
                Everything in the <em>box</em>.
              </>
            }
          />
          <Registry items={billingModules} labels={["Module", "Purpose", "Capabilities"]} />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
