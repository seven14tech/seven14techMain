import type { Metadata } from "next";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { DemoForm } from "@/components/sections/DemoForm";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Demo — Talk to Seven14 Tech Studio",
  description:
    "Book a free 30-minute demo of Seven14 Tech Studio. See billing, POS, inventory, CRM and analytics working on your own business data.",
  alternates: { canonical: "/contact" },
};

const points = [
  { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Call sales", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
  { icon: MapPin, label: "Headquarters", value: "Bengaluru, India" },
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
        title={<>See Seven14 on <span className="text-gradient-brand">your own data</span></>}
        description="Tell us a little about your business and we'll tailor a 30-minute walkthrough to exactly what you want to improve."
      />
      <Section className="pt-4">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal stagger className="flex flex-col gap-4">
            <div data-reveal-item className="rounded-2xl border border-border bg-surface/60 p-6 ring-hairline">
              <h2 className="font-display text-lg font-semibold text-fg">What to expect</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-fg-muted">
                {[
                  "A live tour of billing, POS, inventory & analytics",
                  "Answers tailored to your industry & outlet count",
                  "A clear migration & onboarding plan",
                  "Honest pricing — no pressure",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal-item className="grid grid-cols-2 gap-3">
              {points.map((p) => {
                const Icon = p.icon;
                const inner = (
                  <>
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/12 text-brand">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <div className="mt-3 text-xs text-fg-subtle">{p.label}</div>
                    <div className="text-sm font-medium text-fg">{p.value}</div>
                  </>
                );
                return p.href ? (
                  <a
                    key={p.label}
                    href={p.href}
                    className="rounded-xl border border-border bg-surface/60 p-4 ring-hairline transition-colors hover:border-border-strong"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={p.label} className="rounded-xl border border-border bg-surface/60 p-4 ring-hairline">
                    {inner}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal>
            <DemoForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
