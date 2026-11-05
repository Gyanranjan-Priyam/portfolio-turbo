import type { Metadata } from "next";
import { ServicesClient } from "./services-client";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional web development, frontend engineering, and SaaS development services by Gyanranjan Priyam. High-performance, scalable digital products built with Next.js, React, and TypeScript.",
  keywords: [
    "web development services",
    "frontend engineering services",
    "SaaS development services",
    "Next.js developer hire",
    "React developer freelance",
    "freelance frontend developer India",
    "hire Next.js developer",
    "custom web app development",
    "Gyanranjan Priyam services",
    "full-stack web development",
    "modern website design and development",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Gyanranjan Priyam",
    description:
      "Professional web development, frontend engineering, and SaaS development services by Gyanranjan Priyam. High-performance, scalable digital products built with Next.js, React, and TypeScript.",
    url: `${SITE_URL}/services`,
    siteName: "Gyanranjan Priyam",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Gyanranjan Priyam",
    description:
      "Professional web development, frontend engineering, and SaaS development services by Gyanranjan Priyam.",
    creator: "@gr_priyam",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/services`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Gyanranjan Priyam — Web Development & Engineering Services",
  description:
    "I build thoughtful digital experiences — from high-performance websites to scalable web applications and SaaS products.",
  url: `${SITE_URL}/services`,
  provider: {
    "@type": "Person",
    name: "Gyanranjan Priyam",
    url: SITE_URL,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development",
          description:
            "Modern, responsive and SEO-friendly websites for individuals, startups and businesses.",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "12000",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Frontend Engineering",
          description:
            "Pixel-perfect, high-performance user interfaces using modern web technologies like Next.js, React and TypeScript.",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "20000",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Development",
          description:
            "End-to-end development of scalable, production-ready SaaS applications — from MVPs to full-featured platforms.",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "50000",
          priceCurrency: "INR",
        },
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesClient />
    </>
  );
}

