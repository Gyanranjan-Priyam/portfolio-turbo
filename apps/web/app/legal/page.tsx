import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Home } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionDivider } from "@/components/ui/section-divider";
import { SITE_URL } from "@/lib/config";
import { ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Legal Information & Policies",
  description:
    "Official legal documentation, Terms of Service, Privacy Policy, Client Service Agreement, and Refund Policy for Gyanranjan Priyam's portfolio and web development services.",
  alternates: {
    canonical: "/legal",
  },
  openGraph: {
    title: "Legal Information & Policies — Gyanranjan Priyam",
    description:
      "Official legal documentation, Terms of Service, Privacy Policy, Client Service Agreement, and Refund Policy.",
    url: `${SITE_URL}/legal`,
    siteName: "Gyanranjan Priyam",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Information & Policies — Gyanranjan Priyam",
    description:
      "Official legal documentation, Terms of Service, Privacy Policy, Client Service Agreement, and Refund Policy.",
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
      name: "Legal",
      item: `${SITE_URL}/legal`,
    },
  ],
};

interface LegalDoc {
  number: string;
  title: string;
  href: string;
  badge: string;
  description: string;
  highlights: string[];
}

const LEGAL_DOCUMENTS: LegalDoc[] = [
  {
    number: "01",
    title: "Terms of Service",
    href: "/legal/terms",
    badge: "Site Governance",
    description:
      "Rules, intellectual property rights, acceptable use policies, and limitations of liability governing your access to priyam.tech and developer starter templates.",
    highlights: [
      "Acceptable use & code repository guidelines",
      "Intellectual property & MIT open-source licensing",
      "Consultation scheduling rules via Cal.com",
      "Governing law (India) & dispute jurisdiction",
    ],
  },
  {
    number: "02",
    title: "Privacy Policy",
    href: "/legal/privacy",
    badge: "Data Protection",
    description:
      "Transparent explanation of data collection practices, zero-tracking analytics, local storage usage, and how we protect your personal and business information.",
    highlights: [
      "Zero invasive advertising cookies or tracking",
      "Compliance with DPDP Act 2023 & GDPR principles",
      "Secure handling of inquiries and scheduling data",
      "Right to access, modify, or erase your data",
    ],
  },
  {
    number: "03",
    title: "Client Service Agreement",
    href: "/legal/agreement",
    badge: "Contract Terms",
    description:
      "Standard terms of engagement for clients hiring Gyanranjan Priyam for Website Development, Frontend Engineering, SaaS Development, and Consulting.",
    highlights: [
      "Milestone-based project execution & scopes",
      "100% IP transfer upon final invoice payment",
      "Complimentary 30-day post-launch warranty",
      "Mutual confidentiality & NDA protection",
    ],
  },
  {
    number: "04",
    title: "Refund & Cancellation Policy",
    href: "/legal/refund",
    badge: "Fair Billing",
    description:
      "Clear, upfront guidelines regarding engineering deposits, in-progress sprint cancellations, digital template sales, and dispute resolution.",
    highlights: [
      "Full deposit refund if cancelled before kick-off",
      "Pro-rated billing for completed work on early exit",
      "Free rescheduling for Cal.com consultation calls",
      "Straightforward refund processing via original method",
    ],
  },
];

export default function LegalHubPage() {
  return (
    <div className="pt-6 sm:pt-8 pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Header */}
      <BlurFade delay={0.04}>
        <div className="flex items-center justify-between mb-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-muted-foreground"
          >
            <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="size-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="size-3 text-muted-foreground/60" />
            <span className="text-foreground font-medium">Legal</span>
          </nav>

          <span className="text-xs font-mono text-muted-foreground/80">
            Updated: January 2026
          </span>
        </div>
      </BlurFade>

      {/* Title & Introduction */}
      <BlurFade delay={0.08}>
        <div className="mb-6 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-foreground">
            Legal Information & Terms
          </h1>
          <p className="text-sm sm:text-base font-mono text-muted-foreground leading-relaxed max-w-2xl">
            Welcome to the central legal hub for{" "}
            <span className="text-foreground font-medium">priyam.tech</span>. Below you will find the binding terms, privacy commitments, client service agreements, and refund policies governing our digital services and developer assets.
          </p>
        </div>
      </BlurFade>

      {/* Blueprint Hatched Stripe Divider */}
      <SectionDivider />

      {/* Legal Documents Ledger Table matching Stack/Education Ledger Layout */}
      <div className="-mx-4 sm:-mx-6 select-text -mt-px">
        {LEGAL_DOCUMENTS.map((doc, idx) => (
          <BlurFade key={doc.href} delay={0.08 + idx * 0.03} inView>
            <Link
              href={doc.href}
              className="group grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] border-b border-border/70 hover:bg-muted/30 transition-colors"
            >
              {/* Left Column: Number & Document Title */}
              <div className="px-4 sm:px-6 py-4 sm:py-5 md:border-r md:border-border/70 flex flex-col justify-between gap-3 select-none">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs sm:text-sm font-bold text-muted-foreground/60">
                    {doc.number}
                  </span>
                  <span className="text-sm sm:text-base font-bold font-sans text-foreground group-hover:underline underline-offset-4">
                    {doc.title}
                  </span>
                </div>
                <div className="pl-7 sm:pl-8">
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-border/70 bg-muted/40 text-muted-foreground">
                    {doc.badge}
                  </span>
                </div>
              </div>

              {/* Right Column: Description, Highlights as Pills & Arrow */}
              <div className="px-4 sm:px-6 py-4 sm:py-5 flex flex-col justify-between gap-3 min-w-0">
                <p className="text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                  {doc.description}
                </p>

                {/* Highlights rendered as pill badges matching Stack style */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {doc.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2.5 py-1 rounded-full border border-border bg-background/80 text-xs font-mono text-muted-foreground group-hover:border-foreground/30 transition-colors"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs font-mono font-medium text-foreground">
                  <span>Read full policy</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>

      <SectionDivider className="-mt-px" />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
