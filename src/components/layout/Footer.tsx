import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Billing & POS", href: "/product#billing" },
      { label: "Kitchen Display", href: "/product#kds" },
      { label: "Inventory", href: "/product#inventory" },
      { label: "CRM & Loyalty", href: "/product#crm" },
      { label: "Analytics", href: "/product#reports" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Restaurants", href: "/solutions#restaurants" },
      { label: "Cafés", href: "/solutions#cafes" },
      { label: "Retail Stores", href: "/solutions#retail" },
      { label: "Cloud Kitchens", href: "/solutions#cloud-kitchens" },
      { label: "Franchises", href: "/solutions#franchises" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Book a Demo", href: "/contact" },
      { label: "Contact Sales", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg-2">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[120%] -translate-x-1/2 rounded-[100%] bg-brand/10 blur-[120px]" />
      <div className="container-page relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-fg-muted">
              The modern operating system for billing, inventory, CRM and operations —
              built for restaurants, retail and multi-outlet businesses.
            </p>
            <Button href="/contact" size="sm" className="w-fit">
              Book a Free Demo
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3.5">
                <h3 className="font-display text-sm font-semibold text-fg">{col.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-fg-subtle sm:flex-row sm:items-center">
          <p>
            © {site.founded}–present {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="transition-colors hover:text-fg">
              Privacy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-fg">
              Terms
            </Link>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-fg">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
