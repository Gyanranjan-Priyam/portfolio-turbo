import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionDivider } from "@/components/ui/section-divider";
import { SITE_URL } from "@/lib/config";
import { ContactSection } from "@/components/sections/contact";
import { TableOfContents } from "@/components/table-of-contents";

export const metadata: Metadata = {
  title: "Client Service Agreement",
  description:
    "Standard Client Service Agreement and Terms of Engagement for hiring Gyanranjan Priyam for Website Development, Frontend Engineering, SaaS MVP, and Bespoke Architecture.",
  alternates: {
    canonical: "/legal/agreement",
  },
  openGraph: {
    title: "Client Service Agreement — Gyanranjan Priyam",
    description:
      "Standard Client Service Agreement and Terms of Engagement for hiring Gyanranjan Priyam for web and software development services.",
    url: `${SITE_URL}/legal/agreement`,
    siteName: "Gyanranjan Priyam",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Service Agreement — Gyanranjan Priyam",
    description:
      "Standard Client Service Agreement and Terms of Engagement for hiring Gyanranjan Priyam for web and software development services.",
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
      name: "Client Agreement",
      item: `${SITE_URL}/legal/agreement`,
    },
  ],
};

interface AgreementSection {
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

const SECTIONS: AgreementSection[] = [
  {
    id: "parties-scope",
    number: "01",
    title: "Parties & Scope of Engagement",
    subtitle: "Contracting parties, master terms & Statement of Work",
    clauses: [
      {
        text: "This Client Service Agreement (\"Agreement\") sets forth the standard terms and conditions under which Gyanranjan Priyam (\"Developer\", \"Consultant\") provides bespoke web development, frontend engineering, SaaS application development, and technical consulting services to the client entity or individual (\"Client\").",
      },
      {
        subtitle: "Statement of Work (SOW) & Estimates",
        text: "Each individual project engagement is governed by a mutually agreed Statement of Work (SOW), project brief, or formal quote specifying deliverables, milestones, technical architecture, cost, and delivery schedule. In the event of any conflict between this Agreement and a specific SOW, the terms of the signed SOW shall prevail.",
      },
    ],
  },
  {
    id: "service-tiers",
    number: "02",
    title: "Deliverables & Service Categories",
    subtitle: "Website, frontend engineering, SaaS & AI scope deliverables",
    clauses: [
      {
        subtitle: "1. Website Development (Starting at ₹12,000 / $299)",
        text: "Standard timeline: 4–7 business days. Deliverables include responsive mobile-first UI, Core Web Vitals optimization, technical SEO metadata architecture, DNS/deployment setup on Vercel/Cloudflare, and 30 days post-launch warranty support.",
      },
      {
        subtitle: "2. Frontend Engineering (Starting at ₹20,000 / $499)",
        text: "Standard timeline: 2–3 weeks. Deliverables include pixel-perfect implementation from Figma or design systems, modular React/Next.js component libraries, animations (Framer Motion / GSAP), state management, and WCAG accessibility compliance.",
      },
      {
        subtitle: "3. SaaS Development (Starting at ₹50,000 / $1,499)",
        text: "Standard timeline: 3–5 weeks. Deliverables include full-stack MVP architecture, authentication (Better Auth / NextAuth / Supabase), database schemas & migrations (PostgreSQL / Prisma ORM), subscription billing (Stripe / Razorpay), and administration dashboards.",
      },
      {
        subtitle: "4. Custom Architecture & AI Integrations (Custom Quote)",
        text: "Deliverables include custom LLM pipelines (Gemini API, Claude, OpenAI), agentic workflows, high-concurrency microservices, or enterprise system refactoring governed by agile sprint deliverables.",
      },
    ],
  },
  {
    id: "milestone-payments",
    number: "03",
    title: "Payment Terms & Schedules",
    subtitle: "50/50 upfront deposit, multi-phase sprints & INR/USD invoices",
    clauses: [
      {
        subtitle: "Standard Deposit Structure",
        text: "Unless an alternative milestone schedule is explicitly specified in the project SOW, engagements follow a milestone payment schedule:",
        bulletPoints: [
          "50% Upfront Initial Deposit: Payable prior to sprint scheduling and engineering commencement to reserve engineering capacity.",
          "50% Final Settlement: Payable upon milestone acceptance, staging demonstration approval, and prior to production repository handover or domain deployment.",
        ],
      },
      {
        subtitle: "Multi-Phase Sprints (For Large SaaS Projects)",
        text: "For multi-month projects, billing may be partitioned into three phases: 40% initial kickoff deposit, 30% alpha/staging milestone approval, and 30% final production handover.",
      },
      {
        subtitle: "Currency & Invoicing",
        text: "Invoices are issued in Indian Rupees (INR) for domestic clients (payable via UPI, IMPS, NEFT, or Razorpay) or US Dollars / Euros (USD/EUR) for international clients (payable via Stripe or International Wire Transfer). Invoices are due within 7 calendar days of receipt.",
      },
    ],
  },
  {
    id: "client-collaboration",
    number: "04",
    title: "Client Responsibilities & Timelines",
    subtitle: "Asset handover, feedback turnaround & timeline contingencies",
    clauses: [
      {
        text: "Timely delivery depends on active client collaboration. Client agrees to provide necessary brand assets, design tokens, copywriting, database access, third-party API credentials, and feedback within three (3) business days of request.",
      },
      {
        text: "If client feedback or required assets are delayed by more than ten (10) consecutive business days without prior notice, Developer reserves the right to pause the project schedule and adjust final delivery milestones based on availability.",
      },
    ],
  },
  {
    id: "ip-ownership",
    number: "05",
    title: "Intellectual Property & Code Ownership",
    subtitle: "100% custom code transfer, open-source modules & portfolio rights",
    clauses: [
      {
        subtitle: "Transfer of Custom Project Code",
        text: "Upon complete settlement of all project invoices in full, 100% of the custom source code, proprietary UI designs, and documentation created specifically for Client under the relevant SOW are transferred exclusively to Client.",
      },
      {
        subtitle: "Open-Source & Pre-Existing Utilities",
        text: "Client acknowledges that modern web applications utilize open-source frameworks (e.g. Next.js, React, Tailwind CSS, shadcn/ui) and standard developer utility modules. Such third-party libraries remain licensed under their respective open-source licenses (such as MIT, Apache 2.0, or BSD).",
      },
      {
        subtitle: "Developer Portfolio Showcase",
        text: "Developer retains the non-exclusive right to display non-confidential screenshots, live URLs, and descriptions of the completed project in his portfolio, case studies, and resume, unless Client has executed an explicit Non-Disclosure Agreement (NDA) prohibiting public attribution.",
      },
    ],
  },
  {
    id: "warranty-support",
    number: "06",
    title: "30-Day Post-Launch Warranty",
    subtitle: "30-day bug fix warranty, coverage boundaries & exclusions",
    clauses: [
      {
        text: "All custom engineering projects delivered by Developer include thirty (30) calendar days of complimentary post-launch warranty support, commencing on the date of production deployment or code handover.",
      },
      {
        subtitle: "Warranty Coverage",
        text: "The warranty covers the correction of verified defects, broken responsive layouts, or reproducible bugs that deviate from the agreed SOW specifications.",
      },
      {
        subtitle: "Exclusions",
        text: "The warranty does not cover: new feature requests or scope modifications, third-party API outages or unannounced vendor deprecations, hosting provider downtime, or bugs introduced by Client or third-party developers modifying the source code after delivery.",
      },
    ],
  },
  {
    id: "confidentiality",
    number: "07",
    title: "Confidentiality & Non-Disclosure",
    subtitle: "Mutual non-disclosure, proprietary assets & NDA execution",
    clauses: [
      {
        text: "Both Developer and Client agree to hold each other's proprietary business information, business models, source code, credentials, customer data, and trade secrets in strict confidence. Neither party shall disclose Confidential Information to any third party without prior written consent, except as required by law.",
      },
      {
        text: "Developer is pleased to countersign mutual Non-Disclosure Agreements (NDAs) prior to receiving proprietary designs, unreleased product ideas, or sensitive API keys.",
      },
    ],
  },
  {
    id: "limitation-liability",
    number: "08",
    title: "Limitation of Liability",
    subtitle: "Aggregate liability capped to fees received & damages waiver",
    clauses: [
      {
        text: "To the maximum extent permitted by applicable law, Developer's total aggregate liability to Client under any cause of action arising out of or related to this Agreement or any SOW shall be strictly capped at the total amount actually paid by Client to Developer under the specific SOW giving rise to the claim.",
      },
      {
        text: "Developer shall not be liable for any lost profits, lost revenue, indirect, consequential, or punitive damages resulting from server downtime, third-party service failures, or data loss.",
      },
    ],
  },
  {
    id: "termination",
    number: "09",
    title: "Termination & Milestone Settlement",
    subtitle: "Written notice terms, work-in-progress delivery & settlement",
    clauses: [
      {
        text: "Either party may terminate a project engagement by providing seven (7) business days written notice. In the event of early termination, Developer will bill Client for all hours worked and milestones completed up to the date of notice. Client will receive all completed source code, design assets, and work-in-progress, and any unearned advance balance will be refunded in accordance with the Refund Policy.",
      },
    ],
  },
];

const HEADINGS = SECTIONS.map((s) => ({
  slug: s.id,
  text: `${s.number}. ${s.title}`,
  depth: 2,
}));

export default function AgreementPage() {
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
            <span className="text-foreground font-medium">Client Agreement</span>
          </nav>

          <span className="text-xs font-mono text-muted-foreground/80">
            Standard Version: 2026.1
          </span>
        </div>
      </BlurFade>

      {/* Page Title & Intro */}
      <BlurFade delay={0.08}>
        <div className="mb-6 mt-8 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-foreground">
            Client Service Agreement
          </h1>
          <p className="text-sm sm:text-base font-mono text-muted-foreground leading-relaxed max-w-2xl">
            Review the transparent working terms governing client engagements: milestone schedules, intellectual property transfer, warranty guarantees, and mutual confidentiality.
          </p>
        </div>
      </BlurFade>

      {/* Blueprint Hatched Stripe Divider */}
      <SectionDivider />

      {/* Floating Table of Contents Drawer */}
      <TableOfContents headings={HEADINGS} postTitle="Client Service Agreement" />

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
