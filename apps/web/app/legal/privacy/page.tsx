import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionDivider } from "@/components/ui/section-divider";
import { SITE_URL } from "@/lib/config";
import { ContactSection } from "@/components/sections/contact";
import { TableOfContents } from "@/components/table-of-contents";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Gyanranjan Priyam's portfolio and web development services. Learn how visitor data, consultation bookings, and analytics are handled transparently and securely.",
  alternates: {
    canonical: "/legal/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Gyanranjan Priyam",
    description:
      "Privacy Policy for Gyanranjan Priyam's portfolio and web development services. Transparent data practices, zero invasive tracking.",
    url: `${SITE_URL}/legal/privacy`,
    siteName: "Gyanranjan Priyam",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Gyanranjan Priyam",
    description:
      "Privacy Policy for Gyanranjan Priyam's portfolio and web development services. Transparent data practices, zero invasive tracking.",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Privacy Policy",
      item: `${SITE_URL}/legal/privacy`,
    },
  ],
};

interface PrivacySection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  clauses: {
    subtitle?: string;
    text: string;
    bulletPoints?: string[];
  }[];
}

const SECTIONS: PrivacySection[] = [
  {
    id: "overview",
    number: "01",
    title: "Overview & Privacy Philosophy",
    subtitle: "Zero monetization of visitor data & privacy pledge",
    clauses: [
      {
        text: "Your privacy is fundamentally respected. This Privacy Policy governs the manner in which Gyanranjan Priyam (\"Developer\", \"I\", \"me\", or \"my\") collects, uses, maintains, and discloses information gathered from users of priyam.tech, gyanranjanpriyam.tech, and associated digital services.",
      },
      {
        text: "I do not sell, rent, monetize, or broker personal visitor data to third-party ad networks or data aggregators. Data collection is kept strictly minimal, transparent, and solely functional to operate this portfolio and deliver software engineering services.",
      },
    ],
  },
  {
    id: "information-collected",
    number: "02",
    title: "Information We Collect",
    subtitle: "Voluntary form details, Cal.com bookings & edge telemetry",
    clauses: [
      {
        subtitle: "Information You Voluntarily Provide",
        text: "When you interact with the contact forms, send an email, submit an estimate calculation, or book an appointment, we may collect:",
        bulletPoints: [
          "Your name, email address, company name, and project budget/scope selections.",
          "Meeting notes, project specifications, or architectural briefs you provide.",
          "Cal.com scheduling details (timezone, selected appointment slot, attendee email).",
        ],
      },
      {
        subtitle: "Automated Technical & Diagnostic Data",
        text: "When you browse the website, standard non-identifying telemetry may be recorded by our edge infrastructure and privacy-conscious analytics (Ahrefs Analytics), including:",
        bulletPoints: [
          "Anonymized IP address and approximate country/region (to optimize edge CDN routing).",
          "Browser type, operating system version, and device viewport dimensions.",
          "Referring URL, pages visited, timestamp, and session duration.",
          "Core Web Vitals metrics (LCP, FID/INP, CLS) to monitor performance.",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    number: "03",
    title: "How We Use Information",
    subtitle: "Inquiry responses, service delivery & diagnostic health",
    clauses: [
      {
        text: "The information gathered is processed for specific, legitimate business purposes:",
        bulletPoints: [
          "To respond to client inquiries, prepare project estimates, and schedule discovery calls.",
          "To design, develop, and deliver bespoke web and software engineering projects.",
          "To monitor website performance, diagnose technical errors, and optimize loading speeds.",
          "To safeguard the website against automated spam, bot attacks, and security vulnerabilities.",
        ],
      },
    ],
  },
  {
    id: "cookies-localstorage",
    number: "04",
    title: "Cookies & Browser Storage",
    subtitle: "Zero ad tracking, persistent theme state in localStorage",
    clauses: [
      {
        subtitle: "Zero Behavioral Advertising Cookies",
        text: "This website does not employ third-party advertising cookies, cross-site trackers, or remarketing pixels (e.g. Meta Pixel, Google Ads).",
      },
      {
        subtitle: "Essential LocalStorage & SessionStorage",
        text: "We utilize minimal browser storage for essential client-side application state:",
        bulletPoints: [
          "Theme Preference: Your selected theme mode (light or dark) is stored locally in your browser's localStorage so your preference persists across page reloads. This data never leaves your device.",
          "Session Animation State: Session storage may be used to manage splash loader animation state so you aren't interrupted repeatedly during a single browsing session.",
        ],
      },
    ],
  },
  {
    id: "third-party-processors",
    number: "05",
    title: "Third-Party Service Providers",
    subtitle: "Edge cloud (Vercel), scheduling (Cal.com) & payment gateways",
    clauses: [
      {
        text: "We rely on reputable infrastructure providers to operate this web application securely:",
        bulletPoints: [
          "Vercel Inc. — Global edge hosting, serverless compute, and Content Delivery Network (CDN).",
          "Cal.com, Inc. — Privacy-first open scheduling infrastructure for video and discovery calls.",
          "Ahrefs Webmaster Tools — Cookieless, privacy-focused traffic and performance analytics.",
          "Cloudflare, Inc. — DNS routing, SSL/TLS certificate management, and DDoS defense.",
          "Stripe & Razorpay — PCI-DSS Level 1 certified payment processing when client invoices are paid electronically. We never store or process raw payment card credentials on our servers.",
        ],
      },
    ],
  },
  {
    id: "security-retention",
    number: "06",
    title: "Data Security & Retention",
    subtitle: "TLS 1.3 HTTPS encryption & minimal data storage timelines",
    clauses: [
      {
        text: "All web traffic to priyam.tech is encrypted in transit using industry-standard Transport Layer Security (TLS 1.3 / HTTPS). Appropriate administrative and technical safeguards are implemented to protect your communications against unauthorized access, loss, or alteration.",
      },
      {
        text: "Correspondence and project scoping notes are retained only for as long as necessary to complete client obligations, maintain financial compliance records, or resolve mutual warranty queries, after which they are securely archived or expunged.",
      },
    ],
  },
  {
    id: "user-rights",
    number: "07",
    title: "Your Data Protection Rights",
    subtitle: "Statutory access, correction & deletion rights (GDPR/DPDP)",
    clauses: [
      {
        text: "Depending on your jurisdiction—including rights granted under the European Union General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA/CPRA), and the Indian Digital Personal Data Protection Act (DPDP Act 2023)—you have the following rights:",
        bulletPoints: [
          "Right of Access: Request confirmation and copies of personal data held about you.",
          "Right to Rectification: Request correction of inaccurate or incomplete personal records.",
          "Right to Erasure (\"Right to be Forgotten\"): Request deletion of your personal communications.",
          "Right to Restrict or Object: Restrict processing of your data under specific conditions.",
          "Right to Data Portability: Request transfer of your data to yourself or another service provider.",
        ],
      },
      {
        text: "To exercise any of these statutory rights, please email hello@priyam.tech. Inquiries are addressed within 30 calendar days at no charge.",
      },
    ],
  },
  {
    id: "policy-updates",
    number: "08",
    title: "Policy Updates",
    subtitle: "Notification guidelines & periodic review terms",
    clauses: [
      {
        text: "This Privacy Policy may be updated periodically to reflect changes in our legal obligations, service enhancements, or technological integrations. When updates occur, the \"Last Updated\" timestamp at the top of this document will be updated. We encourage you to review this page periodically.",
      },
    ],
  },
];

const HEADINGS = SECTIONS.map((s) => ({
  slug: s.id,
  text: `${s.number}. ${s.title}`,
  depth: 2,
}));

export default function PrivacyPage() {
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
            <Link href="/legal" className="hover:text-foreground transition-colors">
              Legal
            </Link>
            <ChevronRight className="size-3 text-muted-foreground/60" />
            <span className="text-foreground font-medium">Privacy Policy</span>
          </nav>

          <span className="text-xs font-mono text-muted-foreground/80">
            Last Updated: January 2026
          </span>
        </div>
      </BlurFade>

      {/* Page Title & Intro */}
      <BlurFade delay={0.08}>
        <div className="mb-6 mt-8 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base font-mono text-muted-foreground leading-relaxed max-w-2xl">
            Learn how visitor data, client consultation bookings, and technical telemetry are managed transparently and securely with zero third-party data tracking.
          </p>
        </div>
      </BlurFade>

      {/* Blueprint Hatched Stripe Divider */}
      <SectionDivider />

      {/* Floating Table of Contents Drawer */}
      <TableOfContents headings={HEADINGS} postTitle="Privacy Policy" />

            {/* Main Legal Content Ledger Sections */}
      <div className="-mx-4 sm:-mx-6 select-text -mt-px">
        {SECTIONS.map((section, idx) => (
          <BlurFade key={section.id} delay={0.02 + idx * 0.02} inView>
            <article
              id={section.id}
              className="scroll-mt-24 grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] md:grid-cols-[64px_1fr] border-b border-border/70"
            >
              {/* Column 1: Number */}
              <div className="px-2 sm:px-4 py-5 sm:py-6 border-r border-border/70 flex items-start justify-center font-mono text-xs sm:text-sm select-none text-muted-foreground/60 font-bold">
                {section.number}
              </div>

              {/* Column 2: Content */}
              <div className="px-4 sm:px-6 py-5 sm:py-6 space-y-4 min-w-0">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-foreground">
                    {section.title}
                  </h2>
                  {section.subtitle && (
                    <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-0.5">
                      {section.subtitle}
                    </p>
                  )}
                </div>

                <div className="space-y-3 pt-1">
                  {section.clauses.map((clause, cIdx) => (
                    <div key={cIdx} className="space-y-1.5">
                      {clause.subtitle && (
                        <h3 className="text-xs sm:text-sm font-bold font-sans text-foreground">
                          {clause.subtitle}
                        </h3>
                      )}
                      <p className="text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                        {clause.text}
                      </p>
                      {clause.bulletPoints && (
                        <ul className="list-disc list-inside space-y-1 pt-1 pl-2 text-xs sm:text-sm font-mono text-muted-foreground">
                          {clause.bulletPoints.map((pt, pIdx) => (
                            <li key={pIdx} className="leading-relaxed">
                              {pt}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </BlurFade>
        ))}
      </div>

      <SectionDivider className="-mt-px" />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
