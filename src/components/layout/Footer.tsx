import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Billing System",
    links: [
      { label: "POS & Checkout", href: "/billing#pos" },
      { label: "GST Invoicing", href: "/billing#invoicing" },
      { label: "Inventory", href: "/billing#inventory" },
      { label: "Accounting", href: "/billing#accounting" },
      { label: "Restaurant & KOT", href: "/billing#restaurant" },
    ],
  },
  {
    title: "Education ERP",
    links: [
      { label: "Admissions", href: "/erp#admissions" },
      { label: "Academics", href: "/erp#academics" },
      { label: "Fees & Finance", href: "/erp#fees" },
      { label: "Parent Portal", href: "/erp#portal" },
      { label: "Open the ERP", href: "https://erp.seven14tech.com" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "/services#websites" },
      { label: "Mobile App Development", href: "/services#apps" },
      { label: "Custom Software", href: "/services#custom" },
      { label: "Hosting & Support", href: "/services#support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Book a demo", href: "/contact" },
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="stack" style={{ justifyItems: "start", alignContent: "start" }}>
            <Logo />
            <p className="muted small" style={{ maxWidth: "22rem" }}>
              A GST billing system, an education ERP, and the custom websites and apps that go
              around them. Built in India.
            </p>
            <Button href="/contact" size="sm" arrow>
              Book a free demo
            </Button>
          </div>
          <div className="footer-cols">
            {columns.map((col) => (
              <div key={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith("/") ? <Link href={l.href}>{l.label}</Link> : <a href={l.href}>{l.label}</a>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-base">
          <p>
            © {site.founded}–{new Date().getFullYear()} {site.name}. Made in India.
          </p>
          <nav aria-label="Legal">
            <Link href="/contact">Privacy</Link>
            <Link href="/contact">Terms</Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </nav>
        </div>
        <div className="footer-word" aria-hidden>
          Seven14
        </div>
      </div>
    </footer>
  );
}
