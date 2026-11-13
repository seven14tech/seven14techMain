import {
  Receipt,
  ScanLine,
  ChefHat,
  Boxes,
  ShoppingCart,
  Users,
  Wallet,
  ShieldCheck,
  Scissors,
  Contact,
  Coffee,
  ShoppingBag,
  Pill,
  Truck,
  Network,
  Globe,
  Smartphone,
  CodeXml,
  LifeBuoy,
  GraduationCap,
  UserRound,
  BookOpen,
  IndianRupee,
  Briefcase,
  Workflow,
  Library,
  School,
  Building2,
  Landmark,
  Wrench,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------
   Content for the three things Seven14 sells:
   1. Billing System (Seven14 Business OS, Windows + Android)
   2. Education ERP (erp.seven14tech.com, web + Android)
   3. Custom software services (websites, apps, custom systems)

   Only features marked as built in the product repos are listed here.
   ------------------------------------------------------------------ */

export type Module = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: LucideIcon;
};

/* ---------------- Billing System ---------------- */

export const billingModules: Module[] = [
  {
    id: "pos",
    name: "POS & Checkout",
    tagline: "Fast at the counter",
    description:
      "Search or scan a barcode, take cash, UPI or card, and close the bill. Stock updates the moment the sale is done.",
    features: ["Barcode scan & search", "Cash with change, UPI, card", "On-screen receipts", "Live stock on every item"],
    icon: ScanLine,
  },
  {
    id: "invoicing",
    name: "GST Invoicing",
    tagline: "Invoices that add up",
    description:
      "B2B invoices with line-level tax and discounts, partial and full payments, and recurring invoices for repeat customers.",
    features: ["HSN & GST on every line", "Draft, sent, partial, paid", "Recurring invoices", "Payments posted to the books"],
    icon: Receipt,
  },
  {
    id: "inventory",
    name: "Inventory",
    tagline: "Know exactly what is on the shelf",
    description:
      "An append-only stock ledger with batch numbers, expiry dates and first-expired-first-out dispensing.",
    features: ["Real-time stock balances", "Batch, MRP & expiry tracking", "Near-expiry alerts", "FEFO dispensing"],
    icon: Boxes,
  },
  {
    id: "purchasing",
    name: "Purchasing",
    tagline: "From vendor to shelf",
    description:
      "Keep vendors with GSTIN and payment terms, raise purchase orders and receive goods straight into stock.",
    features: ["Vendor master with GSTIN", "Purchase orders", "Goods receipt (GRN)", "Automatic stock intake"],
    icon: ShoppingCart,
  },
  {
    id: "accounting",
    name: "Accounting",
    tagline: "Books that keep themselves",
    description:
      "Every sale, purchase and payment posts a double-entry journal automatically, against a chart of accounts set up for Indian businesses.",
    features: ["Auto-posted double entry", "Trial balance", "Profit & loss, balance sheet", "GST summary by rate"],
    icon: Wallet,
  },
  {
    id: "restaurant",
    name: "Restaurant & KOT",
    tagline: "Table to kitchen, in sync",
    description:
      "Tables by section, dine-in orders, kitchen order tickets and a live kitchen display, settled to the POS in one tap.",
    features: ["Tables & sections", "Kitchen order tickets", "Live kitchen display", "Settle to POS"],
    icon: ChefHat,
  },
  {
    id: "shifts",
    name: "Shifts & Cash",
    tagline: "Every rupee accounted for",
    description: "Open and close shifts with counted cash, see the variance, and run separate registers per branch.",
    features: ["Opening & closing cash", "Cash variance", "Registers per branch"],
    icon: IndianRupee,
  },
  {
    id: "crm",
    name: "Customers & CRM",
    tagline: "Know every customer",
    description: "B2C and B2B customers with GSTIN, a deals pipeline and follow-ups so no enquiry goes cold.",
    features: ["Customer master", "Deals pipeline", "Follow-up activities"],
    icon: Contact,
  },
  {
    id: "hr",
    name: "HR & Payroll",
    tagline: "Your team, sorted",
    description: "Departments, attendance, leave approvals and payroll runs that produce payslips.",
    features: ["Attendance", "Leave approvals", "Payslips"],
    icon: Users,
  },
  {
    id: "appointments",
    name: "Salon & Appointments",
    tagline: "Bookings that bill themselves",
    description: "Services with duration and price, staff, appointments from booking to check-in, and payment at the end.",
    features: ["Services & staff", "Book, check in, complete", "Appointment payments"],
    icon: Scissors,
  },
  {
    id: "roles",
    name: "Branches & Roles",
    tagline: "Right access, every seat",
    description:
      "Run several branches from one account, with seven ready-made roles from Owner to Cashier and custom roles of your own.",
    features: ["Multi-branch", "Owner, Manager, Cashier and more", "Custom roles", "Team invites"],
    icon: ShieldCheck,
  },
];

export type Industry = {
  id: string;
  name: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  points: string[];
};

export const billingIndustries: Industry[] = [
  {
    id: "restaurants",
    name: "Restaurants & Cafés",
    icon: Coffee,
    headline: "From the table to the kitchen, in sync",
    description: "Tables, KOTs and a live kitchen display that settle straight into billing, stock and the books.",
    points: ["Tables & sections", "Kitchen display", "Shift cash control"],
  },
  {
    id: "retail",
    name: "Retail Stores",
    icon: ShoppingBag,
    headline: "Barcode to balance sheet",
    description: "Scan, bill and restock with live stock balances and purchasing that flows from vendor to shelf.",
    points: ["Barcode billing", "Purchase orders & GRN", "Live stock"],
  },
  {
    id: "pharmacy",
    name: "Pharmacy & FMCG",
    icon: Pill,
    headline: "Batches, expiry and nothing wasted",
    description: "Batch and MRP tracking with near-expiry alerts and first-expired-first-out dispensing at the counter.",
    points: ["Batch & MRP", "Expiry alerts", "FEFO dispensing"],
  },
  {
    id: "salons",
    name: "Salons & Spas",
    icon: Scissors,
    headline: "Appointments that bill themselves",
    description: "Book services against staff, check clients in and take payment when the appointment is done.",
    points: ["Services & staff", "Appointments", "Payments"],
  },
  {
    id: "wholesale",
    name: "Wholesale & Distribution",
    icon: Truck,
    headline: "B2B invoicing without spreadsheets",
    description: "GST invoices for business customers, partial payments, recurring billing and vendor management.",
    points: ["B2B GST invoices", "Recurring invoices", "Receivables"],
  },
  {
    id: "multi-branch",
    name: "Multi-Branch",
    icon: Network,
    headline: "One account, every branch",
    description: "Branch-wise registers and warehouses, with roles that keep each team to its own counter.",
    points: ["Branch registers", "Warehouse-scoped stock", "Role-based access"],
  },
];

/* ---------------- Education ERP ---------------- */

export const erpUrl = "https://erp.seven14tech.com";

export const erpAreas: Module[] = [
  {
    id: "admissions",
    name: "Admissions",
    tagline: "Enquiry to enrolment",
    description: "A leads CRM with source tracking, bulk import, a website enquiry API, online admission forms and a funnel report.",
    features: ["Enquiry CRM", "Bulk lead import", "Online admission form", "Admission funnel"],
    icon: UserRound,
  },
  {
    id: "students",
    name: "Students",
    tagline: "A 360° view of every learner",
    description: "Student profiles with guardians, documents and ID cards, through promotion, transfer and graduation.",
    features: ["Student 360", "Guardians & documents", "ID cards", "Promote, transfer, graduate"],
    icon: GraduationCap,
  },
  {
    id: "academics",
    name: "Academics",
    tagline: "Timetables to report cards",
    description: "Courses and batches, timetables, attendance with class-code self check-in, exams, report cards and assignments.",
    features: ["Courses & batches", "Timetable", "Attendance", "Exams & report cards"],
    icon: BookOpen,
  },
  {
    id: "fees",
    name: "Fees & Finance",
    tagline: "Fees collected, not chased",
    description: "Fee structures, instalments, scholarships, late fees, refunds, printable receipts and Razorpay payment links.",
    features: ["Instalments", "Scholarships & late fees", "Online payment links", "Finance reports"],
    icon: IndianRupee,
  },
  {
    id: "people",
    name: "Staff & Payroll",
    tagline: "Faculty and staff, in one place",
    description: "Staff and faculty profiles, leave, discipline and payroll with sensitive fields encrypted.",
    features: ["Faculty profiles", "Leave", "Encrypted payroll"],
    icon: Users,
  },
  {
    id: "career",
    name: "Placements",
    tagline: "Beyond the classroom",
    description: "OJT and internships, placements with a summary report, and an alumni portal with an opt-in directory.",
    features: ["OJT & internships", "Placements", "Alumni portal"],
    icon: Briefcase,
  },
  {
    id: "operations",
    name: "Operations",
    tagline: "The admin office, automated",
    description: "Tasks, automation rules, messaging, announcements, a help desk, a calendar and an AI assistant.",
    features: ["Automation rules", "Announcements", "Help desk", "AI assistant"],
    icon: Workflow,
  },
  {
    id: "resources",
    name: "Resources",
    tagline: "Library to transport",
    description: "Library, certificates with custom templates, asset tracking and transport.",
    features: ["Library", "Certificates", "Assets", "Transport"],
    icon: Library,
  },
  {
    id: "portal",
    name: "Student & Parent Portal",
    tagline: "Families, kept in the loop",
    description: "Attendance, timetable, assignments, results and fees with online payment and receipts, on web and Android.",
    features: ["Results & attendance", "Pay fees online", "Feedback", "Android app"],
    icon: MonitorSmartphone,
  },
];

export const erpAudiences: Industry[] = [
  {
    id: "schools",
    name: "Schools",
    icon: School,
    headline: "Admissions to report cards, one system",
    description: "Run admissions, attendance, exams and fees, and give parents a portal they will actually open.",
    points: ["Parent portal", "Report cards", "Fee instalments"],
  },
  {
    id: "colleges",
    name: "Colleges",
    icon: Landmark,
    headline: "Batches, placements and alumni",
    description: "Courses and intakes with year-end rollover, placements, and an alumni portal that keeps graduates close.",
    points: ["Year-end rollover", "Placements", "Alumni directory"],
  },
  {
    id: "coaching",
    name: "Coaching Institutes",
    icon: BookOpen,
    headline: "Every enquiry followed up",
    description: "An admissions CRM with source tracking and a website enquiry API, so no lead goes cold.",
    points: ["Lead CRM", "Question bank", "Online payment links"],
  },
  {
    id: "vocational",
    name: "Vocational & Training",
    icon: Wrench,
    headline: "Classroom to OJT to job",
    description: "Track on-the-job training and internships with check-ins, then placements and certificates.",
    points: ["OJT check-in", "Certificates", "Placements"],
  },
  {
    id: "groups",
    name: "Multi-Centre Groups",
    icon: Building2,
    headline: "Many centres, one institute",
    description: "Every request is scoped to the organisation and centre, so each campus sees only its own data.",
    points: ["Centre-level access", "Group reports", "Shared catalogue"],
  },
];

/* ---------------- Custom software services ---------------- */

export const services: Module[] = [
  {
    id: "websites",
    name: "Website Development",
    tagline: "Websites that win customers",
    description: "Fast, SEO-ready business websites, e-commerce stores and web portals, with a CMS so your team can update them.",
    features: ["Business & landing sites", "E-commerce stores", "Web portals", "SEO & performance", "CMS"],
    icon: Globe,
  },
  {
    id: "apps",
    name: "Mobile App Development",
    tagline: "Your business, in their pocket",
    description: "Android and iOS apps for customers, ordering, bookings and field staff, launched on the Play Store and App Store.",
    features: ["Android & iOS", "Ordering & booking apps", "Staff & field apps", "Store launch"],
    icon: Smartphone,
  },
  {
    id: "custom",
    name: "Custom Software",
    tagline: "Built around your process",
    description: "Internal tools, dashboards, customer portals and integrations, designed around how your team already works.",
    features: ["Internal tools & dashboards", "Customer portals", "API integrations", "Payment gateways"],
    icon: CodeXml,
  },
  {
    id: "support",
    name: "Hosting & Support",
    tagline: "Looked after after launch",
    description: "Cloud hosting, monitoring, backups and ongoing improvements, so what we build keeps running.",
    features: ["Cloud hosting", "Backups & monitoring", "Maintenance", "Feature updates"],
    icon: LifeBuoy,
  },
];

export const deliverySteps: { title: string; description: string }[] = [
  { title: "Discover", description: "We map your workflows, goals and existing tools in a free consultation." },
  { title: "Design", description: "Clickable designs and a clear scope, timeline and fixed quote before we build." },
  { title: "Build", description: "Weekly demos so you see progress and shape the product as it comes together." },
  { title: "Launch & support", description: "Go-live, data migration, training and ongoing maintenance after launch." },
];

/* ---------------- Shared ---------------- */

/** Plain facts about the products, shown in mono. */
export const facts: { value: string; label: string }[] = [
  { value: "11", label: "Billing modules, from POS to payroll" },
  { value: "9", label: "Education ERP areas, admissions to alumni" },
  { value: "7", label: "Ready-made staff roles, plus custom roles" },
  { value: "3", label: "Ways to use it: Windows, Android and web" },
];

/** Who we build for, shown as monochrome chips under the hero. */
export const audiences: string[] = [
  "Restaurants",
  "Cafés",
  "Retail stores",
  "Pharmacies",
  "Salons",
  "Distributors",
  "Schools",
  "Colleges",
  "Coaching institutes",
  "Training centres",
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What does Seven14 Tech Studio sell?",
    a: "Three things: the Seven14 Billing System for shops, restaurants and other businesses; the Seven14 Education ERP for schools, colleges and institutes; and custom software services, where we build websites, mobile apps and bespoke systems for clients.",
  },
  {
    q: "Does the billing system handle GST?",
    a: "Yes. Products carry HSN codes and tax rates, invoices calculate GST line by line, and the accounting module produces a GST summary by rate alongside your trial balance, profit and loss and balance sheet.",
  },
  {
    q: "Which devices does the billing system run on?",
    a: "It runs as a lightweight Windows desktop app and as an Android app, both connected to the same cloud account, so every counter and every branch sees the same live data.",
  },
  {
    q: "Can I run several branches from one account?",
    a: "Yes. The billing system is multi-branch, with registers and warehouses per branch and roles that limit each person to what they need.",
  },
  {
    q: "Is the Education ERP live?",
    a: "Yes. The Education ERP runs at erp.seven14tech.com, with a staff app, a student and parent portal and a native Android app, all working on the same live data.",
  },
  {
    q: "Can parents pay fees online?",
    a: "Yes. The ERP supports fee structures, instalments, scholarships and late fees, and parents can pay through Razorpay payment links and download printable receipts from the portal.",
  },
  {
    q: "Is our data secure?",
    a: "Access is checked on the server for every request: users only see their own organisation, branch or centre, and only what their role allows. In the ERP, sensitive payroll fields are encrypted.",
  },
  {
    q: "Can you customise the billing system or ERP for us?",
    a: "Yes. Because we build both products ourselves, our services team can add the workflows, reports and integrations your business needs.",
  },
  {
    q: "Do you build websites and apps for other businesses?",
    a: "Yes. We design and build business websites, e-commerce stores, web portals, Android and iOS apps and internal tools, from scoping and design through launch and ongoing support.",
  },
  {
    q: "How do we get started?",
    a: "Book a 30-minute demo. We will walk through the product on your own setup, answer your questions and give you an honest plan and quote.",
  },
];
