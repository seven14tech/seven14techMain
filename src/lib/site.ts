export const site = {
  name: "Seven14 Tech Studio",
  shortName: "Seven14",
  tagline: "Billing, ERP and custom software for Indian businesses.",
  description:
    "Seven14 Tech Studio builds the Seven14 Billing System for shops and restaurants, the Seven14 Education ERP for schools, colleges and institutes, and custom websites, mobile apps and software for businesses across India.",
  url: "https://seven14tech.com",
  email: "support@seven14tech.com",
  phone: "+91 91675 34208",
  twitter: "@seven14tech",
  locale: "en_IN",
  founded: "2021",
} as const;

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Billing System", href: "/billing" },
  { label: "Education ERP", href: "/erp" },
  { label: "Services", href: "/services" },
];
