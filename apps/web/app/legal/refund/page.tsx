import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionDivider } from "@/components/ui/section-divider";
import { SITE_URL } from "@/lib/config";
import { ContactSection } from "@/components/sections/contact";
import { TableOfContents } from "@/components/table-of-contents";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Official Refund & Cancellation Policy for Gyanranjan Priyam's web development services, project deposits, sprint milestones, and digital starter templates.",
  alternates: {
    canonical: "/legal/refund",
  },
  openGraph: {
    title: "Refund & Cancellation Policy — Gyanranjan Priyam",
    description:
      "Official Refund & Cancellation Policy for web development services, project deposits, sprint milestones, and digital starter templates.",
    url: `${SITE_URL}/legal/refund`,
    siteName: "Gyanranjan Priyam",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund & Cancellation Policy — Gyanranjan Priyam",
    description:
      "Official Refund & Cancellation Policy for web development services, project deposits, sprint milestones, and digital starter templates.",
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
      name: "Refund Policy",
      item: `${SITE_URL}/legal/refund`,
    },
  ],
};

interface RefundSection {
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

const SECTIONS: RefundSection[] = [
  {
    id: "overview",
    number: "01",
    title: "Policy Overview",
    subtitle: "Transparent billing policies & client trust philosophy",
    clauses: [
      {
        text: "At priyam.tech, I am committed to building long-term, high-trust relationships with clients. Because custom software engineering, frontend architecture, and bespoke UI design involve dedicated engineering calendar slots, intellectual property creation, and intensive discovery, this Refund & Cancellation Policy clearly outlines how cancellations, deposits, and refunds are managed.",
      },
      {
        text: "Please review these terms prior to initiating a paid development sprint or project milestone.",
      },
    ],
  },
  {
    id: "consultations",
    number: "02",
    title: "Consultation Calls (Cal.com)",
    subtitle: "Free discovery calls & paid architecture reschedule terms",
    clauses: [
      {
        subtitle: "Free Discovery & Feasibility Calls",
        text: "Initial consultation and project discovery calls scheduled via Cal.com are provided free of charge. You may reschedule or cancel your appointment at any time up to two (2) hours prior to the scheduled time using the link provided in your confirmation email.",
      },
      {
        subtitle: "Paid Architecture Consultation",
        text: "If a dedicated, paid architectural deep-dive or technical code audit is booked, cancellations made at least twenty-four (24) hours in advance will receive a 100% full refund.",
      },
    ],
  },
  {
    id: "custom-development",
    number: "03",
    title: "Custom Development Services",
    subtitle: "50% upfront deposits, milestone exits & completed phases",
    clauses: [
      {
        subtitle: "Initial Upfront Deposit (50%)",
        text: "Upfront project deposits secure dedicated development capacity and initiate architectural scoping. The following cancellation rules apply to initial deposits:",
        bulletPoints: [
          "Pre-Kickoff Cancellation: If you cancel the engagement within forty-eight (48) hours of deposit payment AND before project discovery or development has commenced, you are entitled to a 100% full refund (minus any non-refundable payment gateway transaction fees).",
          "Post-Kickoff Cancellation: Once architectural wireframing, UX design, repository initialization, or coding has begun, the initial deposit is non-refundable as it compensates Developer for allocated engineering time and scoping.",
        ],
      },
      {
        subtitle: "In-Progress Milestone Cancellations",
        text: "If a project is discontinued mid-way by mutual agreement or written notice:",
        bulletPoints: [
          "Client will only be invoiced for completed milestones or verified hours worked up to the date of written notice.",
          "Any unused advance payments held for future unstarted milestones will be promptly refunded within 7–10 business days.",
          "All source code, component files, and design assets developed up to that point will be delivered to Client.",
        ],
      },
      {
        subtitle: "Completed & Approved Deliverables",
        text: "Once a project milestone or final deliverable is reviewed, approved by Client, and transferred to Client's production infrastructure, payments for that milestone are non-refundable. Any subsequent technical defects are remedied under the 30-Day Post-Launch Warranty at no additional fee.",
      },
    ],
  },
  {
    id: "warranty-remedy",
    number: "04",
    title: "Warranty Remedy Instead of Refund",
    subtitle: "30-day post-launch bug fixing warranty in lieu of dispute",
    clauses: [
      {
        text: "If you encounter any unexpected bugs, responsive layout defects, or functional errors following delivery, they will be resolved under the complimentary 30-Day Post-Launch Warranty rather than requiring a refund dispute.",
      },
      {
        text: "Developer will prioritize and patch verified deviations from the agreed Statement of Work (SOW) within three to five (3–5) business days of notification.",
      },
    ],
  },
  {
    id: "digital-templates",
    number: "05",
    title: "Digital Templates & Code Boilerplates",
    subtitle: "Open-source GitHub starters & digital asset non-refundable rules",
    clauses: [
      {
        subtitle: "Free Open-Source Templates",
        text: "Open-source starter templates hosted on GitHub are provided free of charge under the MIT License with no purchase or refund considerations.",
      },
      {
        subtitle: "Commercial / Premium Digital Assets",
        text: "Due to the irrevocable and non-returnable nature of downloadable digital files and source code repositories, purchases of commercial templates or downloadable UI kits are non-refundable once download access or repository permissions have been granted, unless the digital files are demonstrably corrupted and Developer is unable to provide a functional replacement within seven (7) business days.",
      },
    ],
  },
  {
    id: "disputes-chargebacks",
    number: "06",
    title: "Dispute Resolution & Chargebacks",
    subtitle: "Direct email resolution protocol before payment disputes",
    clauses: [
      {
        text: "Both parties agree to address any concerns, scope misalignments, or dissatisfaction in good faith. Before filing a chargeback or payment dispute with your bank, credit card issuer, Stripe, or Razorpay, you agree to contact hello@priyam.tech to work towards an amicable resolution.",
      },
      {
        text: "Filing an unsubstantiated chargeback for work delivered in accordance with an agreed Statement of Work constitutes a material breach of contract and may result in immediate suspension of warranty support, revocation of code licenses, and collection proceedings.",
      },
    ],
  },
  {
    id: "refund-processing",
    number: "07",
    title: "Refund Processing Schedule",
    subtitle: "5 to 10 business days processing schedule via original method",
    clauses: [
      {
        text: "Approved refunds are processed within five to ten (5–10) business days following mutual written confirmation. Refunds are remitted strictly using the original payment channel (Stripe, Razorpay, or Direct Bank Wire).",
      },
      {
        text: "Depending on your financial institution or credit card provider, the funds may take an additional three to five (3–5) business days to reflect on your account statement.",
      },
    ],
  },
  {
    id: "how-to-request",
    number: "08",
    title: "How to Submit a Request",
    subtitle: "Cancellation submission steps & email acknowledgment",
    clauses: [
      {
        text: "To request a cancellation or refund, please send an email to hello@priyam.tech with the following information:",
        bulletPoints: [
          "Project Name and Date of Kickoff",
          "Invoice Number and Payment Receipt",
          "Detailed explanation of the cancellation reason",
        ],
      },
      {
        text: "All requests are acknowledged within twenty-four (24) business hours.",
      },
    ],
  },
];

const HEADINGS = SECTIONS.map((s) => ({
  slug: s.id,
  text: `${s.number}. ${s.title}`,
  depth: 2,
}));

export default function RefundPage() {
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
            <span className="text-foreground font-medium">Refund Policy</span>
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
            Refund & Cancellation Policy
          </h1>
          <p className="text-sm sm:text-base font-mono text-muted-foreground leading-relaxed max-w-2xl">
            Understand how engineering deposits, milestone cancellations, digital template sales, and warranty remedies are administered with complete transparency.
          </p>
        </div>
      </BlurFade>

      {/* Blueprint Hatched Stripe Divider */}
      <SectionDivider />

      {/* Floating Table of Contents Drawer */}
      <TableOfContents headings={HEADINGS} postTitle="Refund & Cancellation Policy" />

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
