export const site = {
  name: "Seven14 Tech Studio",
  shortName: "Seven14",
  tagline: "Modern Billing. Smarter Operations. One Platform.",
  description:
    "Seven14 Tech Studio is an all-in-one business operating system for restaurants, retail and multi-outlet businesses — billing, POS, ERP, inventory, CRM, analytics and finance in one platform. We also build custom websites and mobile apps for businesses.",
  url: "https://seven14.tech",
  email: "hello@seven14.tech",
  phone: "+91 80 4718 1714",
  twitter: "@seven14tech",
  locale: "en_IN",
  founded: "2021",
} as const;

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Product", href: "/product" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
];
