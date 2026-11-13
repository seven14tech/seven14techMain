import type { Metadata } from "next";
import { Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { DemoForm } from "@/components/sections/DemoForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Demo — Talk to Seven14 Tech Studio",
  description:
    "Book a free 30-minute demo of the Seven14 Billing System or Education ERP, or talk to us about a website, app or custom software project.",
  alternates: { canonical: "/contact" },
};

const points = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
  { icon: MapPin, label: "Headquarters", value: site.location },
];

const expect = [
  "A live tour of the billing system or the education ERP",
  "Answers for your industry, institute and number of branches",
  "For custom projects, a scope, timeline and fixed quote",
  "Honest pricing, with no pressure",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Book a demo"
        title={
          <>
            Let&apos;s talk about <em>your</em> setup.
          </>
        }
        description="Tell us whether you need billing, an ERP or something built for you, and we'll tailor a 30-minute conversation to it."
      />
      <section className="section tight">
        <div className="container split">
          <div className="stack-lg sticky reveal">
            <div className="stack">
              <span className="eyebrow">What to expect</span>
              <ul className="list" style={{ fontSize: "0.98rem" }}>
                {expect.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="contact-list">
              {points.map((p) => {
                const Icon = p.icon;
                const inner = (
                  <>
                    <Icon aria-hidden />
                    <span>
                      <span className="faint small" style={{ display: "block" }}>
                        {p.label}
                      </span>
                      <span className="val">{p.value}</span>
                    </span>
                    {p.href ? <ArrowUpRight aria-hidden /> : <span />}
                  </>
                );
                return p.href ? (
                  <a key={p.label} href={p.href}>
                    {inner}
                  </a>
                ) : (
                  <div key={p.label} className="row">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
            <DemoForm />
          </div>
        </div>
      </section>
    </>
  );
}
