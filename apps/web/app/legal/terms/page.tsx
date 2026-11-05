import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionDivider } from "@/components/ui/section-divider";
import { SITE_URL } from "@/lib/config";
import { ContactSection } from "@/components/sections/contact";
import { TableOfContents } from "@/components/table-of-contents";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service governing the use of Gyanranjan Priyam's portfolio, web development services, open-source templates, and software consulting.",
  alternates: {
    canonical: "/legal/terms",
  },
  openGraph: {
    title: "Terms of Service — Gyanranjan Priyam",
    description:
      "Terms of Service governing the use of Gyanranjan Priyam's portfolio, web development services, open-source templates, and software consulting.",
    url: `${SITE_URL}/legal/terms`,
    siteName: "Gyanranjan Priyam",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — Gyanranjan Priyam",
    description:
      "Terms of Service governing the use of Gyanranjan Priyam's portfolio, web development services, open-source templates, and software consulting.",
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
      name: "Terms of Service",
      item: `${SITE_URL}/legal/terms`,
    },
  ],
};

interface TermSection {
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

const SECTIONS: TermSection[] = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    subtitle: "Site access, binding terms & legal applicability",
    clauses: [
      {
        text: "By accessing or using the website located at priyam.tech, gyanranjanpriyam.tech, or any associated subdomains, products, developer templates, and services operated by Gyanranjan Priyam (\"Developer\", \"I\", \"me\", or \"my\"), you agree to be legally bound by these Terms of Service. If you do not agree to these Terms, you must immediately cease accessing or using this website.",
      },
      {
        text: "These Terms apply to all visitors, users, clients, recruiters, and third parties who access this portfolio, utilize its interactive components, book consultations, or download technical assets.",
      },
    ],
  },
  {
    id: "intellectual-property",
    number: "02",
    title: "Intellectual Property Rights",
    subtitle: "Portfolio ownership, trademarks & MIT open-source code",
    clauses: [
      {
        subtitle: "Portfolio Ownership & Branding",
        text: "Unless otherwise explicitly stated, all content published on this website—including but not limited to the text, visual branding, UI/UX architecture, layout designs, interactive components, logotypes, animations, graphics, and articles—is the exclusive intellectual property of Gyanranjan Priyam and is protected by applicable domestic and international copyright and trademark laws.",
      },
      {
        subtitle: "Open-Source & Starter Templates",
        text: "Certain starter kits and design templates made available on the Templates section or GitHub repositories are released under permissive open-source licenses (typically the MIT License). You may view, fork, customize, and utilize those designated templates in accordance with their respective open-source license files.",
      },
      {
        subtitle: "Client Showcase & Trademarks",
        text: "All company logos, client project trademarks, and brand names displayed in the Projects showcase remain the property of their respective owners. Their display serves solely as a factual portfolio demonstration of professional work previously performed.",
      },
    ],
  },
  {
    id: "acceptable-use",
    number: "03",
    title: "Acceptable Use & Prohibitions",
    subtitle: "Lawful conduct, security boundaries & prohibited actions",
    clauses: [
      {
        text: "You agree to use this website and its resources strictly for lawful purposes. You agree not to engage in any of the following prohibited activities:",
        bulletPoints: [
          "Attempting to circumvent, probe, reverse-engineer, or breach any security checks, rate limits, or access controls.",
          "Launching Denial-of-Service (DoS/DDoS) attacks, automated brute-force scraping, or overloading server resources.",
          "Deploying automated bots or scrapers in contravention of the directives outlined in public/robots.txt and llms.txt.",
          "Impersonating Gyanranjan Priyam, spoofing headers, or falsely claiming an endorsement, partnership, or employment relationship.",
          "Using any interactive forms, Cal.com scheduling integrations, or contact endpoints to distribute spam, malware, phishing payloads, or unsolicited commercial pitches.",
        ],
      },
    ],
  },
  {
    id: "services-consultations",
    number: "04",
    title: "Digital Services & Inquiries",
    subtitle: "Project discovery calls, scoping & indicative estimates",
    clauses: [
      {
        subtitle: "Consultation Scheduling (Cal.com)",
        text: "Initial consultation appointments booked through the Cal.com integration are provided for mutual project scoping, technical discovery, and feasibility discussions. Booking a call does not create a binding employment, contract, or partnership agreement until a formal Statement of Work (SOW) or Client Agreement is executed.",
      },
      {
        subtitle: "Custom Proposals & Estimates",
        text: "All quotes, timeline estimates, and budget ranges displayed on the Services page or generated via interactive estimation tools are indicative estimates based on typical project parameters. Final binding pricing and milestones are formalized in individual project proposals.",
      },
    ],
  },
  {
    id: "third-party-links",
    number: "05",
    title: "Third-Party Services & Integrations",
    subtitle: "External tools, calendar providers & deployment edge",
    clauses: [
      {
        text: "This website links to and interfaces with third-party platforms and services, including but not limited to Cal.com (appointment scheduling), GitHub (source code repositories), Vercel (cloud deployment), Ahrefs (analytics), and external client platforms. These external sites operate under their own separate terms and privacy policies. Gyanranjan Priyam has no control over and assumes no responsibility for third-party content, policies, or technical operations.",
      },
    ],
  },
  {
    id: "disclaimer",
    number: "06",
    title: "Disclaimer of Warranties",
    subtitle: "As-is provision of website and developer templates",
    clauses: [
      {
        text: "This website, its interactive tools, developer templates, code snippets, and blog publications are provided on an \"AS IS\" and \"AS AVAILABLE\" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, or error-free operation.",
      },
      {
        text: "While reasonable efforts are maintained to ensure high code quality, security, and continuous uptime, Developer does not guarantee that the site or any downloaded files will be uninterrupted, virus-free, or entirely bug-free.",
      },
    ],
  },
  {
    id: "limitation-liability",
    number: "07",
    title: "Limitation of Liability",
    subtitle: "Exclusion of consequential damages & liability caps",
    clauses: [
      {
        text: "To the maximum extent permitted by applicable law, in no event shall Gyanranjan Priyam be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages—including but not limited to damages for loss of profits, goodwill, data, business interruption, or other intangible losses—arising out of or relating to your access to, use of, or inability to use this website or any starter templates.",
      },
      {
        text: "For paying clients, liability regarding bespoke software development projects is exclusively governed by the Client Service Agreement and strictly limited to the actual fees paid for the specific deliverable under dispute.",
      },
    ],
  },
  {
    id: "governing-law",
    number: "08",
    title: "Governing Law & Jurisdiction",
    subtitle: "Jurisdiction of Odisha, Republic of India courts",
    clauses: [
      {
        text: "These Terms of Service and any dispute, controversy, or claim arising out of or related to them shall be governed by, construed, and enforced in accordance with the laws of the Republic of India, without regard to its conflict of law principles.",
      },
      {
        text: "You irrevocably agree that the competent judicial courts located in Odisha, India shall have exclusive jurisdiction to settle any legal dispute or proceeding arising out of these Terms.",
      },
    ],
  },
  {
    id: "modifications",
    number: "09",
    title: "Changes to Terms",
    subtitle: "Amendments, revisions & continued usage terms",
    clauses: [
      {
        text: "Developer reserves the right to modify, amend, or update these Terms of Service at any time. When updates are published, the \"Last Updated\" date at the top of this page will be revised accordingly. Your continued access or use of this website following any amendments constitutes your acknowledgment and acceptance of the revised Terms.",
      },
    ],
  },
];

const HEADINGS = SECTIONS.map((s) => ({
  slug: s.id,
  text: `${s.number}. ${s.title}`,
  depth: 2,
}));

export default function TermsPage() {
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
            <span className="text-foreground font-medium">Terms of Service</span>
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
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base font-mono text-muted-foreground leading-relaxed max-w-2xl">
            Please read these terms carefully before exploring my portfolio, downloading open-source templates, or initiating service inquiries.
          </p>
        </div>
      </BlurFade>

      {/* Blueprint Hatched Stripe Divider */}
      <SectionDivider />

      {/* Floating Table of Contents Drawer */}
      <TableOfContents headings={HEADINGS} postTitle="Terms of Service" />

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
