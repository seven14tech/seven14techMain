import {
  Receipt,
  ScanLine,
  ChefHat,
  Boxes,
  ShoppingCart,
  Users,
  BarChart3,
  Wallet,
  ShieldCheck,
  Settings2,
  Store,
  Coffee,
  ShoppingBag,
  Bike,
  Building2,
  Network,
  Layers,
  Globe,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type Module = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  accent: string; // css color token
};

export const modules: Module[] = [
  {
    id: "billing",
    name: "Billing System",
    tagline: "Checkout in seconds",
    description:
      "Lightning-fast billing with GST support, digital receipts and every payment method your customers expect.",
    features: ["Fast checkout", "GST & tax engine", "Digital receipts", "UPI, card, cash & wallets"],
    icon: Receipt,
    accent: "var(--color-brand)",
  },
  {
    id: "pos",
    name: "Point of Sale",
    tagline: "Built for the counter",
    description:
      "A POS that keeps up with the rush — multi-terminal, multi-outlet and offline-ready out of the box.",
    features: ["Quick billing", "Multi-terminal support", "Multi-outlet management", "Offline-first sync"],
    icon: ScanLine,
    accent: "var(--color-amber)",
  },
  {
    id: "kds",
    name: "Kitchen Display",
    tagline: "The kitchen, in real time",
    description:
      "Replace paper tickets with a live kitchen workflow that tracks every order from fire to pass.",
    features: ["Real-time order tracking", "Live kitchen workflow", "Course & station routing", "Prep-time analytics"],
    icon: ChefHat,
    accent: "var(--color-emerald)",
  },
  {
    id: "inventory",
    name: "Inventory",
    tagline: "Never run out, never over-order",
    description:
      "Track every item across outlets with low-stock alerts and batch-level traceability.",
    features: ["Stock management", "Low-stock alerts", "Batch & expiry tracking", "Recipe-level depletion"],
    icon: Boxes,
    accent: "var(--color-sky)",
  },
  {
    id: "purchasing",
    name: "Purchasing",
    tagline: "Procurement without spreadsheets",
    description:
      "Manage vendors and raise purchase orders that flow straight into inventory and finance.",
    features: ["Vendor management", "Purchase orders", "GRN & approvals", "Cost tracking"],
    icon: ShoppingCart,
    accent: "var(--color-violet)",
  },
  {
    id: "crm",
    name: "CRM & Loyalty",
    tagline: "Know every customer",
    description:
      "Unified customer profiles, purchase history and loyalty programs that bring people back.",
    features: ["Customer profiles", "Loyalty programs", "Purchase history", "Targeted campaigns"],
    icon: Users,
    accent: "var(--color-brand-bright)",
  },
  {
    id: "reports",
    name: "Reports & Analytics",
    tagline: "Decisions, not guesswork",
    description:
      "Revenue, sales and outlet-comparison reports that update the moment a bill is closed.",
    features: ["Revenue reports", "Sales analytics", "Outlet comparisons", "Custom dashboards"],
    icon: BarChart3,
    accent: "var(--color-amber)",
  },
  {
    id: "financials",
    name: "Financials",
    tagline: "Your numbers, clarified",
    description:
      "Cash-flow visibility and profitability insights so you always know where the business stands.",
    features: ["Cash-flow visibility", "Profitability insights", "Expense tracking", "Ledger exports"],
    icon: Wallet,
    accent: "var(--color-emerald)",
  },
  {
    id: "team",
    name: "Team & Roles",
    tagline: "Right access, every seat",
    description:
      "Granular roles, shift management and permission controls across your whole organisation.",
    features: ["Role-based access", "Shift management", "Activity attribution", "Multi-outlet staff"],
    icon: ShieldCheck,
    accent: "var(--color-sky)",
  },
  {
    id: "audit",
    name: "Audit & Settings",
    tagline: "Trust, but verify",
    description:
      "Immutable audit logs and centralised settings that keep multi-outlet operations accountable.",
    features: ["Immutable audit logs", "Centralised settings", "Compliance exports", "Change history"],
    icon: Settings2,
    accent: "var(--color-violet)",
  },
];

// Subset used in the central ecosystem map (10 nodes)
export const ecosystemNodes = modules.map((m) => ({
  id: m.id,
  name: m.name,
  icon: m.icon,
  accent: m.accent,
  blurb: m.tagline,
}));

export type Service = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  accent: string;
};

export const services: Service[] = [
  {
    id: "erp",
    name: "ERP System",
    tagline: "Run the whole business from one system",
    description:
      "A complete ERP that connects sales, inventory, purchasing, HR, accounting and reporting — configured to the way your business actually works.",
    features: ["Sales & purchase", "Inventory & warehouses", "Accounting & GST", "HR & payroll", "Approvals & workflows", "Multi-branch reporting"],
    icon: Layers,
    accent: "var(--color-violet)",
  },
  {
    id: "billing",
    name: "Billing System",
    tagline: "GST-ready invoicing in seconds",
    description:
      "Fast, compliant billing for counters, service businesses and B2B — invoices, quotations, payments and receivables in one place.",
    features: ["GST invoices & e-way bills", "Quotations & credit notes", "UPI, card & cash payments", "Recurring billing", "Payment reminders", "Receivables tracking"],
    icon: Receipt,
    accent: "var(--color-brand)",
  },
  {
    id: "websites",
    name: "Website Development",
    tagline: "Websites that win customers",
    description:
      "We design and build fast, SEO-ready websites, e-commerce stores and web portals for businesses of every size.",
    features: ["Business & landing sites", "E-commerce stores", "Custom web portals", "SEO & performance", "CMS for easy updates", "Hosting & maintenance"],
    icon: Globe,
    accent: "var(--color-sky)",
  },
  {
    id: "apps",
    name: "Mobile App Development",
    tagline: "Your business, in their pocket",
    description:
      "Native-quality Android and iOS apps — customer apps, ordering apps and internal staff tools — built, launched and supported by our team.",
    features: ["Android & iOS apps", "Ordering & booking apps", "Staff & field apps", "Payments & notifications", "Play Store & App Store launch", "Ongoing support"],
    icon: Smartphone,
    accent: "var(--color-emerald)",
  },
];

export const deliverySteps: { title: string; description: string }[] = [
  { title: "Discover", description: "We map your workflows, goals and existing tools in a free consultation." },
  { title: "Design", description: "Clickable designs and a clear scope, timeline and fixed quote before we build." },
  { title: "Build", description: "Weekly demos so you see progress and shape the product as it comes together." },
  { title: "Launch & support", description: "Go-live, data migration, training and ongoing maintenance after launch." },
];

export type Stat = { value: number; suffix: string; label: string; prefix?: string };

export const stats: Stat[] = [
  { value: 3, suffix: "x", label: "Faster billing at peak hours" },
  { value: 23, suffix: "%", label: "Reduction in inventory loss" },
  { value: 99.98, suffix: "%", label: "Platform uptime, multi-region" },
  { value: 18, suffix: "%", label: "Average lift in profitability" },
];

export type Industry = {
  id: string;
  name: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  points: string[];
};

export const industries: Industry[] = [
  {
    id: "restaurants",
    name: "Restaurants",
    icon: ChefHat,
    headline: "From the table to the kitchen, in sync",
    description:
      "Fine-dining to QSR — billing, KDS and inventory working as one so service never waits on software.",
    points: ["Table & course management", "Live kitchen display", "Recipe-level stock control"],
  },
  {
    id: "cafes",
    name: "Cafés",
    icon: Coffee,
    headline: "Quick service, repeat customers",
    description:
      "Fast counter billing with loyalty built in, so the morning rush moves and regulars keep coming back.",
    points: ["One-tap reorders", "Loyalty & rewards", "Modifier-rich menus"],
  },
  {
    id: "retail",
    name: "Retail Stores",
    icon: ShoppingBag,
    headline: "Barcode to balance sheet",
    description:
      "Retail POS with real inventory depth — batch tracking, low-stock alerts and clean financial reporting.",
    points: ["Barcode & SKU billing", "Batch & expiry tracking", "Multi-store stock transfers"],
  },
  {
    id: "cloud-kitchens",
    name: "Cloud Kitchens",
    icon: Bike,
    headline: "Every brand, every channel, one screen",
    description:
      "Aggregate orders across delivery platforms and run multiple virtual brands from a single kitchen.",
    points: ["Multi-brand orders", "Aggregator-ready KDS", "Delivery-first workflows"],
  },
  {
    id: "franchises",
    name: "Franchises",
    icon: Building2,
    headline: "Consistency across every location",
    description:
      "Standardise menus, pricing and reporting across franchisees while keeping each outlet accountable.",
    points: ["Central menu control", "Royalty & revenue reporting", "Per-outlet permissions"],
  },
  {
    id: "multi-location",
    name: "Multi-Location",
    icon: Network,
    headline: "One operating system, many outlets",
    description:
      "Roll up performance across every site and drill into any single outlet without switching tools.",
    points: ["Group-wide dashboards", "Cross-outlet comparisons", "Centralised purchasing"],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We moved six outlets onto Seven14 in a weekend. Billing that used to take 40 seconds now takes ten, and we finally trust our inventory numbers.",
    name: "Aarav Mehta",
    role: "Operations Director",
    company: "Spice Route Hospitality",
    metric: "3.1x",
    metricLabel: "faster checkout",
  },
  {
    quote:
      "The kitchen display alone paid for the platform. Tickets stopped getting lost and our average prep time dropped noticeably within the first month.",
    name: "Neha Kapoor",
    role: "Founder",
    company: "Brew & Co. Cafés",
    metric: "27%",
    metricLabel: "faster prep times",
  },
  {
    quote:
      "Running 22 retail stores used to mean 22 spreadsheets. Now it's one dashboard. Stock shrinkage is down and month-end close is effortless.",
    name: "Vikram Shah",
    role: "CEO",
    company: "Urban Mart Retail",
    metric: "24%",
    metricLabel: "less stock loss",
  },
  {
    quote:
      "As a cloud-kitchen group with eight brands, aggregating orders was chaos. Seven14 put every channel on one screen. Game changer.",
    name: "Riya Desai",
    role: "Co-founder",
    company: "Ghost Kitchen Collective",
    metric: "8",
    metricLabel: "brands, one screen",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What is Seven14 Tech Studio?",
    a: "Seven14 Tech Studio is an all-in-one cloud business operating system that combines billing, POS, kitchen display, inventory, purchasing, CRM, reports and financials into a single platform built for restaurants, retail and multi-outlet businesses.",
  },
  {
    q: "Does the billing software support GST and Indian tax compliance?",
    a: "Yes. The billing engine has built-in GST support, configurable tax slabs, HSN/SAC codes and compliant digital invoices, so every receipt is tax-ready out of the box.",
  },
  {
    q: "Can I manage multiple outlets from one account?",
    a: "Absolutely. Seven14 is multi-outlet by design. You can roll up performance across every location, compare outlets, manage centralised purchasing and set per-outlet roles and permissions from a single dashboard.",
  },
  {
    q: "Does the POS work offline?",
    a: "Yes. The POS is offline-first. Billing continues seamlessly during internet interruptions and syncs automatically once you're back online, so the counter never stops.",
  },
  {
    q: "Which payment methods are supported?",
    a: "Seven14 supports UPI, cards, cash, wallets and popular payment gateways, with digital receipts delivered over SMS, WhatsApp or email.",
  },
  {
    q: "How long does it take to get started?",
    a: "Most single outlets are live within a day. Larger multi-outlet rollouts are typically completed within a week with guided onboarding and data migration from your existing system.",
  },
  {
    q: "Is my business data secure?",
    a: "Security is foundational. Data is encrypted in transit and at rest, access is controlled with granular role-based permissions, and every change is captured in immutable audit logs across all outlets.",
  },
  {
    q: "Do you offer a full ERP system?",
    a: "Yes. Our ERP connects sales, billing, inventory, purchasing, accounting, HR and reporting in one system, and we configure it around your business processes rather than forcing you into a template.",
  },
  {
    q: "Do you build websites and mobile apps for other businesses?",
    a: "Yes. Alongside our own platform, our team designs and builds custom websites, e-commerce stores, web portals and Android/iOS apps for clients — from scoping and design through launch and ongoing support.",
  },
  {
    q: "Can Seven14 integrate with my existing tools?",
    a: "Yes. Seven14 offers an open API and ready integrations for accounting, delivery aggregators and payment providers, so Seven14 fits into the stack you already run.",
  },
];

export const trustedLogos: string[] = [
  "Spice Route",
  "Brew & Co.",
  "Urban Mart",
  "Ghost Kitchen",
  "Tandoor House",
  "FreshLeaf",
  "Metro Bites",
  "Cafe Nordic",
  "PrimeRetail",
  "Saffron Group",
];
