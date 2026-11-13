import type { Metadata } from "next";
import { ArrowUpRight, Laptop, Users, Smartphone, CreditCard } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ModuleBento } from "@/components/sections/ModuleBento";
import { IndustriesAccordion } from "@/components/sections/Industries";
import { FinalCta } from "@/components/sections/FinalCta";
import { Head } from "@/components/ui/Head";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, erpSchema } from "@/lib/schema";
import { erpAreas, erpAudiences, erpUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Education ERP — School, College & Institute Management Software",
  description:
    "The Seven14 Education ERP: admissions CRM, students, academics, attendance, exams, fees with online payments, staff payroll, placements and a student and parent portal. Live on web and Android.",
  alternates: { canonical: "/erp" },
};

const surfaces = [
  { icon: Laptop, label: "Staff web app", gem: "periwinkle" },
  { icon: Users, label: "Student & parent portal", gem: "sage" },
  { icon: Smartphone, label: "Native Android app", gem: "saffron" },
  { icon: CreditCard, label: "Razorpay fee payments", gem: "terracotta" },
];

export default function ErpPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Education ERP", url: "/erp" },
          ]),
          erpSchema(),
        ]}
      />
      <PageHero
        eyebrow="Seven14 Education ERP · live"
        title={
          <>
            Run the whole <em>institute</em> from one place.
          </>
        }
        description="Admissions to alumni for schools, colleges, coaching and training institutes, with a staff app, a student and parent portal and a native Android app on the same live data."
      >
        <Button href="/contact" arrow>
          Book an ERP demo
        </Button>
        <a href={erpUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer" data-magnetic>
          Open erp.seven14tech.com <ArrowUpRight aria-hidden />
        </a>
      </PageHero>

      <section className="section tight">
        <div className="container">
          <div className="jewels reveal">
            {surfaces.map((p) => {
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

      <section className="section ruled" id="areas">
        <div className="container stack-lg">
          <Head
            align="row"
            eyebrow="What it covers"
            title={
              <>
                Nine areas, from enquiry to <em>alumni</em>.
              </>
            }
            lead="Turn on the areas your institute uses. Each one shares the same student record, so nothing is typed twice."
          />
          <ModuleBento
            modules={erpAreas}
            spans={["w3", "w3", "", "", "", "", "", "", "w6"]}
            tones={{ 0: "lilac", 3: "saffron" }}
            detailed={[0, 1]}
          />
        </div>
      </section>

      <section className="section ruled" id="institutes">
        <div className="container stack-lg">
          <Head
            align="row"
            eyebrow="Who it's for"
            title={
              <>
                Shaped around how <em>you</em> teach.
              </>
            }
            lead="Courses, batches and intakes adapt to a school year, a semester system or a rolling training calendar."
          />
          <IndustriesAccordion items={erpAudiences} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container stack-lg">
          <Head
            eyebrow="Trust & security"
            title={
              <>
                Student data, properly <em>guarded</em>.
              </>
            }
          />
          <div className="arch reveal">
            <div>
              <span className="num">01</span>
              <h3 className="h3">Checked on the server</h3>
              <p className="muted">Every request is scoped to the user&apos;s institute and centre and checked against role permissions held in the database.</p>
            </div>
            <div>
              <span className="num">02</span>
              <h3 className="h3">Sensitive fields encrypted</h3>
              <p className="muted">Payroll details are encrypted at rest, and documents are stored privately in the cloud.</p>
            </div>
            <div>
              <span className="num">03</span>
              <h3 className="h3">Many centres, one institute</h3>
              <p className="muted">Each campus sees only its own data while the head office sees the whole group.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
