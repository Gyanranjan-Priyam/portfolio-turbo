import type { Metadata } from "next";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionDivider } from "@/components/ui/section-divider";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Cookie, Database, Mail, FileText, Clock, Home } from "lucide-react";
import { SITE_URL } from "@/lib/config";
import { ContactSection } from "@/components/sections/contact";
import { TableOfContents } from "@/components/table-of-contents";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Gyanranjan Priyam's portfolio website. Learn how visitor data and analytics are handled transparently and securely.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Gyanranjan Priyam",
    description:
      "Privacy Policy for Gyanranjan Priyam's portfolio website. Learn how visitor data and analytics are handled transparently and securely.",
    url: `${SITE_URL}/privacy`,
    siteName: "Gyanranjan Priyam",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Gyanranjan Priyam",
    description:
      "Privacy Policy for Gyanranjan Priyam's portfolio website. Learn how visitor data and analytics are handled transparently and securely.",
    creator: "@gr_priyam",
  },
};

interface ContentItem {
  subtitle?: string;
  text: string;
}

interface Section {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: ContentItem[];
}

const sections: Section[] = [
  {
    id: "information-collected",
    icon: Database,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Information You Provide",
        text: "When you use our contact form or subscribe to our blog, we may collect your name, email address, and any message content you choose to share. This information is provided voluntarily and is used solely to respond to your inquiries.",
      },
      {
        subtitle: "Automatically Collected Information",
        text: "We use analytics services (Ahrefs Analytics) to understand how visitors interact with the website. This may include your IP address, browser type, device information, pages visited, and time spent on pages. This data helps us improve the user experience.",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      {
        text: "We use the collected information to respond to your inquiries and messages, improve website functionality and user experience, analyze website traffic and performance, send blog updates if you've subscribed, and ensure the security and integrity of our services.",
      },
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies & Local Storage",
    content: [
      {
        subtitle: "Theme Preferences",
        text: "We store your theme preference (light/dark mode) in your browser's local storage to provide a consistent experience across visits. This data never leaves your device.",
      },
      {
        subtitle: "Analytics Cookies",
        text: "Third-party analytics services may use cookies to collect anonymous usage data. These cookies help us understand website performance and visitor behavior without identifying individual users.",
      },
      {
        subtitle: "Session Storage",
        text: "We use session storage to manage the initial loading animation state. This data is automatically cleared when you close your browser tab.",
      },
    ],
  },
  {
    id: "blog-data",
    icon: FileText,
    title: "Blog & Content",
    content: [
      {
        text: "Our blog section displays published articles and their associated metadata including titles, descriptions, tags, and publication dates. If you interact with blog content through comments or reactions (when available), that information may be stored to enhance community features.",
      },
    ],
  },
  {
    id: "data-sharing",
    icon: Shield,
    title: "Data Sharing & Security",
    content: [
      {
        subtitle: "Third-Party Services",
        text: "We may share limited data with trusted third-party services including analytics providers (Ahrefs), hosting providers (Vercel), and email services for contact form functionality. These services are bound by their own privacy policies.",
      },
      {
        subtitle: "Security Measures",
        text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our website is served over HTTPS to ensure secure data transmission.",
      },
    ],
  },
  {
    id: "your-rights",
    icon: Mail,
    title: "Your Rights",
    content: [
      {
        text: "You have the right to access, correct, or delete any personal information we hold about you. You can also opt out of analytics tracking by using browser privacy features or extensions. To exercise any of these rights, please contact us at hello@priyam.tech.",
      },
    ],
  },
  {
    id: "updates",
    icon: Clock,
    title: "Policy Updates",
    content: [
      {
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal compliance. Any significant changes will be communicated through the website. We encourage you to review this page periodically.",
      },
    ],
  },
];

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
      name: "Privacy Policy",
      item: `${SITE_URL}/privacy`,
    },
  ],
};

const headings = sections.map((s, i) => ({
  slug: s.id,
  text: `${String(i + 1).padStart(2, "0")}. ${s.title}`,
  depth: 2,
}));

export default function PrivacyPage() {
  return (
    <div className="pt-6 sm:pt-8 pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlurFade delay={0.04} direction="up">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h1
              className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Privacy
            </h1>
            <p
              className="font-medium tracking-tight text-muted-foreground"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
          <div className="ml-4 mt-1 flex shrink-0 items-center gap-2">
            <Link
              href="/"
              aria-label="Home"
              className="rounded-full border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Home className="size-4" />
            </Link>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.16} direction="up">
        <p
          className="mt-6 text-[15px] leading-relaxed text-muted-foreground"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          Your privacy is important to us. This Privacy Policy explains how we collect, use,
          and protect your information when you visit{" "}
          <span className="font-medium text-foreground">priyam.tech</span> or <span className="font-medium text-foreground">gyanranjanpriyam.tech</span> and interact with our
          blog content and services.
        </p>
      </BlurFade>

      {/* Blueprint Hatched Stripe Divider */}
      <SectionDivider />

      {/* Table of Contents Floating Drawer */}
      <TableOfContents headings={headings} postTitle="Privacy Policy" />

            {/* Content Sections */}
      <div className="-mx-4 sm:-mx-6 select-text -mt-px">
        {sections.map((section, sectionIndex) => (
          <BlurFade key={section.id} delay={0.02 + sectionIndex * 0.02} inView>
            <article
              id={section.id}
              className="scroll-mt-24 grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] md:grid-cols-[64px_1fr] border-b border-border/70"
            >
              {/* Column 1: Number */}
              <div className="px-2 sm:px-4 py-5 sm:py-6 border-r border-border/70 flex items-start justify-center font-mono text-xs sm:text-sm select-none text-muted-foreground/60 font-bold">
                {String(sectionIndex + 1).padStart(2, "0")}
              </div>

              {/* Column 2: Content */}
              <div className="px-4 sm:px-6 py-5 sm:py-6 space-y-4 min-w-0">
                <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-foreground">
                  {section.title}
                </h2>

                <div className="space-y-3 pt-1">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-1.5">
                      {item.subtitle && (
                        <h3 className="text-xs sm:text-sm font-bold font-sans text-foreground">
                          {item.subtitle}
                        </h3>
                      )}
                      <p className="text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
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
      <section className="py-8">
        <BlurFade delay={0.04} inView>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted shrink-0">
                <Mail className="size-5 text-foreground" />
              </div>
              <div>
                <h2
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  Questions or Concerns?
                </h2>
                <p
                  className="text-[14px] leading-relaxed text-muted-foreground mb-4"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  If you have any questions about this Privacy Policy or wish to exercise your
                  data rights, feel free to reach out.
                </p>
                <a
                  href="mailto:hello@priyam.tech"
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  <Mail className="size-4" />
                  hello@priyam.tech
                </a>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Footer Note */}
      <BlurFade delay={0.08} inView>
        <div className="pb-8 text-center">
          <p
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            This policy applies to{" "}
            <Link href="/" className=" hover:text-foreground transition-colors">
              priyam.tech
            </Link>{" "}
            and{" "}
            <Link href="/" className=" hover:text-foreground transition-colors">
              gyanranjanpriyam.tech
            </Link>{" "}

            and all associated subdomains.
          </p>
        </div>
      </BlurFade>
    </div>
  );
}
