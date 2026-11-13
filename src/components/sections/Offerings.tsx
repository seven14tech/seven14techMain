import Link from "next/link";
import { ArrowRight, Receipt, GraduationCap, CodeXml } from "lucide-react";
import { Head } from "@/components/ui/Head";

const offerings = [
  {
    href: "/billing",
    icon: Receipt,
    gem: "periwinkle",
    kicker: "Product · Windows & Android",
    name: "Billing System",
    body: "POS, GST invoicing, inventory, purchasing and accounting for shops, restaurants, pharmacies and salons.",
    cta: "Explore billing",
  },
  {
    href: "/erp",
    icon: GraduationCap,
    gem: "saffron",
    kicker: "Product · Web & Android · Live",
    name: "Education ERP",
    body: "Admissions, academics, fees, staff, placements and a parent portal for schools, colleges and institutes.",
    cta: "Explore the ERP",
  },
  {
    href: "/services",
    icon: CodeXml,
    gem: "sage",
    kicker: "Services · Built to order",
    name: "Custom Software",
    body: "Websites, Android and iOS apps, portals and internal tools, designed around how your business works.",
    cta: "See services",
  },
] as const;

/** The three things Seven14 sells, as a 3-column architecture row. */
export function Offerings() {
  return (
    <section className="section" id="offerings">
      <div className="container stack-lg">
        <Head
          align="row"
          eyebrow="What we offer"
          title={
            <>
              Two products and one <em>studio</em>.
            </>
          }
          lead="Pick the billing system or the education ERP off the shelf, or have our team build exactly what you need. Often it is a bit of both."
        />
        <div className="arch reveal">
          {offerings.map((o, i) => {
            const Icon = o.icon;
            return (
              <Link key={o.href} href={o.href} className="offering">
                <span className="num">{String(i + 1).padStart(2, "0")} / 03</span>
                <span className={`gem ${o.gem}`} style={{ width: 44, height: 44 }}>
                  <Icon width={20} height={20} aria-hidden />
                </span>
                <span className="faint small">{o.kicker}</span>
                <span className="serif" style={{ fontSize: "clamp(1.8rem, 2.6vw, 2.35rem)" }}>
                  {o.name}
                </span>
                <span className="muted">{o.body}</span>
                <span className="link" style={{ justifySelf: "start", marginTop: "0.4rem" }}>
                  {o.cta} <ArrowRight aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
