/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import { IconBrandGithub as Github } from "@tabler/icons-react";
import templates from "@/data/templateData";
import { skillCategories } from "@/data/skillCategories";
import { SITE_URL } from "@/lib/config";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";
import { TemplatePreview } from "./TemplatePreview";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return templates.map((t) => ({ id: t.id }));
}

function getTemplateMetaDescription(template: { title: string; desc: string[]; tech: string[] }): string {
  const raw = template.desc[0] || "";
  if (raw.length <= 155 && raw.length >= 115) return raw;
  if (raw.length > 155) {
    const sliced = raw.slice(0, 150);
    const lastSpace = sliced.lastIndexOf(" ");
    return `${lastSpace > 100 ? sliced.slice(0, lastSpace) : sliced}...`;
  }
  const suffix = ` Built with ${template.tech.slice(0, 3).join(", ")}. Free developer template.`;
  const combined = raw + suffix;
  return combined.length > 155 ? combined.slice(0, 152) + "..." : combined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const template = templates.find((t) => t.id === id);
  if (!template)
    return {
      title: "Template Not Found",
      description: "The requested website template was not found on Gyanranjan Priyam's portfolio.",
    };

  const ogImageUrl = `${SITE_URL}/templates/${template.id}/opengraph-image`;
  const metaDescription = getTemplateMetaDescription(template);
  const displayTitle = template.title.length > 30 ? template.title.slice(0, 27) + "... Template" : `${template.title} Template`;

  return {
    title: displayTitle,
    description: metaDescription,
    keywords: [
      `${template.title} template`,
      `${template.title} design`,
      `${template.category} template`,
      `Free ${template.title}`,
      ...template.tech,
    ],
    alternates: { canonical: `/templates/${template.id}` },
    openGraph: {
      title: `${displayTitle} — Gyanranjan Priyam`,
      description: metaDescription,
      url: `${SITE_URL}/templates/${template.id}`,
      siteName: "Gyanranjan Priyam",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${template.title} Template — Gyanranjan Priyam`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${displayTitle} — Gyanranjan Priyam`,
      description: metaDescription,
      creator: "@gr_priyam",
      images: [ogImageUrl],
    },
  };
}

export default async function TemplatePage({ params }: Props) {
  const { id } = await params;
  const template = templates.find((t) => t.id === id);
  if (!template) notFound();

  const metaDescription = getTemplateMetaDescription(template);
  const templateImageUrl = template.img.startsWith("http")
    ? template.img
    : `${SITE_URL}${template.img}`;

  const templateSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${template.title} Template`,
    description: metaDescription,
    url: template.liveLink || `${SITE_URL}${template.link}`,
    image: templateImageUrl,
    dateCreated: template.date,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Gyanranjan Priyam",
      url: SITE_URL,
      sameAs: [
        "https://github.com/gyanranjan-priyam",
        "https://linkedin.com/in/gyanranjan-priyam",
        "https://x.com/gr_priyam",
      ],
    },
    creator: {
      "@type": "Person",
      name: "Gyanranjan Priyam",
      url: SITE_URL,
    },
    ...(template.github && { codeRepository: template.github }),
    ...(template.liveLink && { downloadUrl: template.liveLink }),
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
        name: "Templates",
        item: `${SITE_URL}/templates`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: template.title,
        item: `${SITE_URL}/templates/${template.id}`,
      },
    ],
  };

  return (
    <div className="py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([templateSchema, breadcrumbSchema]),
        }}
      />
      {/* Breadcrumb */}
      <BlurFade delay={0.04}>
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-1 text-sm text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <Link
            href="/templates"
            className="transition-colors hover:text-foreground"
          >
            Templates
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="truncate text-foreground font-medium">
            {template.title}
          </span>
        </nav>
      </BlurFade>

      {/* Header */}
      <BlurFade delay={0.12}>
        <div className="mb-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-sans text-foreground sm:text-4xl">
                {template.title}
              </h1>
              <p className="mt-1 text-xs sm:text-sm font-mono text-muted-foreground">
                {template.company} &middot; {template.date}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {template.liveLink && (
                <a
                  href={template.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs sm:text-sm font-mono font-medium transition-colors hover:bg-muted"
                >
                  <ExternalLink className="size-3.5" />
                  Live Demo
                </a>
              )}
              {template.github && (
                <a
                  href={template.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs sm:text-sm font-mono font-medium transition-colors hover:bg-muted"
                >
                  <Github className="size-4" />
                  Source
                </a>
              )}
            </div>
          </div>

          {/* Tech badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {template.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border px-2.5 py-0.5 text-xs font-mono font-medium text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </BlurFade>
      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />

      {/* Preview Section with Desktop/Mobile Toggle */}
      {(template.desktopImage || template.mobileImage || template.liveLink) ? (
        <BlurFade delay={0.15}>
          <div className="my-6">
            <TemplatePreview
              title={template.title}
              liveLink={template.liveLink}
              desktopImage={template.desktopImage}
              mobileImage={template.mobileImage}
            />
          </div>
        </BlurFade>
      ) : template.img ? (
        <BlurFade delay={0.15}>
          <div className="-mx-4 mt-6 mb-4 sm:-mx-6 overflow-hidden p-4">
            <Image
              src={template.img}
              alt={template.title}
              width={1200}
              height={700}
              className="w-full h-auto block rounded-none"
              priority
            />
          </div>
        </BlurFade>
      ) : null}

      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />

      {/* Description / Overview */}
      <BlurFade delay={0.16}>
        <div className="mb-10 mt-8 space-y-4">
          <div className="mb-4 flex items-baseline gap-2">
            <h2 className="text-2xl font-bold tracking-tight font-sans text-foreground">
              Overview
            </h2>
          </div>
          {template.desc.map((paragraph, i) => (
            <p
              key={i}
              className="text-xs sm:text-sm font-mono leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </BlurFade>

      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />

      {/* Key Highlights */}
      {"highlights" in template && (template as any).highlights?.length > 0 && (
        <BlurFade delay={0.18} inView>
          <div className="mb-10 mt-8">
            <div className="mb-4 flex items-baseline gap-2">
              <h2 className="text-2xl font-bold tracking-tight font-sans text-foreground">
                Key Highlights
              </h2>
              <span className="text-xs font-mono text-muted-foreground/70">
                ({(template as any).highlights.length})
              </span>
            </div>

            <div className="-mx-4 sm:-mx-6 border-t border-b border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {(template as any).highlights.map((item: string, i: number) => {
                  const num = String(i + 1).padStart(2, "0");
                  const total = (template as any).highlights.length;
                  const isEven = i % 2 === 0;
                  const isLastRowDesktop = i >= total - (total % 2 === 0 ? 2 : 1);
                  const isLastItem = i === total - 1;

                  const borderBottomClass = isLastItem
                    ? ""
                    : isLastRowDesktop
                      ? "border-b sm:border-b-0"
                      : "border-b";

                  const borderRightClass = isEven ? "sm:border-r" : "";

                  return (
                    <div
                      key={i}
                      className={`group flex items-start gap-3.5 px-4 sm:px-6 py-3.5 sm:py-4 transition-colors hover:bg-muted/30 border-border ${borderBottomClass} ${borderRightClass}`}
                    >
                      {/* Minimalist Keycap Badge */}
                      <div className="size-7 shrink-0 mt-0.5 rounded-md border border-border/80 bg-muted/40 dark:bg-neutral-900 flex items-center justify-center text-[11px] font-mono font-medium text-muted-foreground group-hover:text-foreground group-hover:border-foreground/40 transition-colors select-none shadow-2xs">
                        {num}
                      </div>

                      <p className="text-xs sm:text-[13px] leading-relaxed text-muted-foreground group-hover:text-foreground font-mono transition-colors">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </BlurFade>
      )}

      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />

      {/* Features */}
      {"features" in template && (template as any).features?.length > 0 && (
        <BlurFade delay={0.2} inView>
          <div className="mb-10 mt-8">
            <div className="mb-4 flex items-baseline gap-2">
              <h2 className="text-2xl font-bold tracking-tight font-sans text-foreground">
                Features Included
              </h2>
              <span className="text-xs font-mono text-muted-foreground/70">
                ({(template as any).features.length})
              </span>
            </div>

            <div className="-mx-4 sm:-mx-6 border-t border-b border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {(template as any).features.map((feature: string, i: number) => {
                  const total = (template as any).features.length;
                  const isEven = i % 2 === 0;
                  const isLastRowDesktop = i >= total - (total % 2 === 0 ? 2 : 1);
                  const isLastItem = i === total - 1;

                  const borderBottomClass = isLastItem
                    ? ""
                    : isLastRowDesktop
                      ? "border-b sm:border-b-0"
                      : "border-b";

                  const borderRightClass = isEven ? "sm:border-r" : "";

                  return (
                    <div
                      key={i}
                      className={`group flex items-start gap-3.5 px-4 sm:px-6 py-3.5 sm:py-4 transition-colors hover:bg-muted/30 border-border ${borderBottomClass} ${borderRightClass}`}
                    >
                      {/* Minimalist Code Keycap Badge */}
                      <div className="size-7 shrink-0 mt-0.5 rounded-md border border-border/80 bg-muted/40 dark:bg-neutral-900 flex items-center justify-center text-[10px] font-mono font-medium text-muted-foreground group-hover:text-foreground group-hover:border-foreground/40 transition-colors select-none shadow-2xs">
                        &lt;/&gt;
                      </div>

                      <p className="text-xs sm:text-[13px] leading-relaxed text-muted-foreground group-hover:text-foreground font-mono transition-colors">
                        {feature}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </BlurFade>
      )}

      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />

      {/* Tech Stack Section */}
      <BlurFade delay={0.22} inView>
        <div className="mb-10 mt-8">
          <div className="mb-4 flex items-baseline gap-2">
            <h2 className="text-2xl font-bold tracking-tight font-sans text-foreground">
              Tech Stack
            </h2>
            <span className="text-xs font-mono text-muted-foreground/70">
              ({template.tech.length})
            </span>
          </div>

          <div className="-mx-4 sm:-mx-6 border-y border-border/70 p-4 sm:p-6 bg-card/10">
            <div className="flex flex-wrap items-center gap-2">
              {template.tech.map((techName, j) => {
                const matchedSkill = skillCategories
                  .flatMap((c) => c.skills)
                  .find(
                    (s) =>
                      s.name.toLowerCase() === techName.toLowerCase() ||
                      techName.toLowerCase().includes(s.name.toLowerCase()) ||
                      s.name.toLowerCase().includes(techName.toLowerCase())
                  );

                return (
                  <div
                    key={j}
                    className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/70 bg-card/60 hover:bg-muted hover:border-foreground/30 text-xs sm:text-[13px] font-mono text-foreground transition-all duration-150 select-none"
                  >
                    {matchedSkill?.icon}
                    <span>{techName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </BlurFade>

      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />

      {/* Next template */}
      <BlurFade delay={0.26} inView>
        <div className="mt-8">
          {(() => {
            const idx = templates.findIndex((t) => t.id === template.id);
            const next = templates[(idx + 1) % templates.length];
            return (
              <Link
                href={`/templates/${next.id}`}
                className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <div>
                  <p className="text-xs font-mono text-muted-foreground">
                    Next Template
                  </p>
                  <p className="text-base font-sans font-semibold text-foreground group-hover:underline">
                    {next.title}
                  </p>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            );
          })()}
        </div>
      </BlurFade>
    </div>
  );
}
