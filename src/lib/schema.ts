import { site } from "./site";
import { faqs } from "./content";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: `${site.url}/favicon.svg`,
    description: site.description,
    email: site.email,
    foundingDate: site.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      "https://twitter.com/seven14tech",
      "https://www.linkedin.com/company/seven14tech",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };
}

export function billingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Seven14 Billing System",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "GST Billing, POS, Inventory & Accounting Software",
    operatingSystem: "Windows, Android",
    url: `${site.url}/billing`,
    publisher: { "@type": "Organization", name: site.name },
  };
}

export function erpSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Seven14 Education ERP",
    applicationCategory: "EducationalApplication",
    applicationSubCategory: "School, College & Institute Management Software",
    operatingSystem: "Web, Android",
    url: `${site.url}/erp`,
    publisher: { "@type": "Organization", name: site.name },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.url}`,
    })),
  };
}
