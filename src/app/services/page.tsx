import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Registry } from "@/components/sections/Registry";
import { Process } from "@/components/sections/Process";
import { FinalCta } from "@/components/sections/FinalCta";
import { Head } from "@/components/ui/Head";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — Website, App & Custom Software Development",
  description:
    "Seven14 builds business websites, e-commerce stores, Android and iOS apps, portals and custom software, and customises our billing system and education ERP for your workflows.",
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
        eyebrow="Custom software services"
        title={
          <>
            Software, <em>tailored</em> to how you work.
          </>
        }
        description="Websites, mobile apps, portals and internal tools, plus custom work on our billing system and ERP. We design, build, launch and support them."
      >
        <Button href="/contact" arrow>
          Get a free consultation
        </Button>
        <Button href="#process" variant="secondary">
          How we work
        </Button>
      </PageHero>

      <section className="section ruled">
        <div className="container stack-lg">
          <Head
            align="row"
            eyebrow="What we build"
            title={
              <>
                Four ways we <em>help</em>.
              </>
            }
            lead="Every project is scoped and quoted up front, with weekly demos while we build."
          />
          <Registry items={services} labels={["Service", "What it covers", "Includes"]} anchor />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container stack-lg">
          <Head
            eyebrow="Why a product team"
            title={
              <>
                We ship our own <em>products</em> too.
              </>
            }
          />
          <div className="arch reveal">
            <div>
              <span className="num">01</span>
              <h3 className="h3">Proven building blocks</h3>
              <p className="muted">Billing, payments, roles, reports and portals we already run in production, reused where they fit your project.</p>
            </div>
            <div>
              <span className="num">02</span>
              <h3 className="h3">Extend what you buy</h3>
              <p className="muted">Need a workflow the billing system or ERP doesn&apos;t have? We add it, because we wrote both.</p>
            </div>
            <div>
              <span className="num">03</span>
              <h3 className="h3">One team, after launch</h3>
              <p className="muted">The people who built it host, monitor and improve it, so support never starts from zero.</p>
            </div>
          </div>
        </div>
      </section>

      <div id="process">
        <Process />
      </div>
      <FinalCta />
    </>
  );
}
