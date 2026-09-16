/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ExternalLink, Users } from "lucide-react";
import { IconBrandGithub as Github } from "@tabler/icons-react";
import projects from "@/data/projectsData";
import { SITE_URL } from "@/lib/config";
import { BlurFade } from "@/components/ui/blur-fade";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { FolderStructure } from "@/components/ui/folder-structure";
import { FeaturesAccordion } from "@/components/ui/features-accordion";
import { skillCategories } from "@/data/skillCategories";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

function getProjectMetaDescription(project: { desc: string[]; tech: string[] }): string {
  const raw = project.desc[0] || "";
  if (raw.length <= 155 && raw.length >= 115) return raw;
  if (raw.length > 155) {
    const sliced = raw.slice(0, 150);
    const lastSpace = sliced.lastIndexOf(" ");
    return `${lastSpace > 100 ? sliced.slice(0, lastSpace) : sliced}...`;
  }
  const suffix = ` Built with ${project.tech.slice(0, 3).join(", ")} by Gyanranjan Priyam.`;
  const combined = raw + suffix;
  return combined.length > 155 ? combined.slice(0, 152) + "..." : combined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project)
    return {
      title: "Project Not Found",
      description: "The project you're looking for doesn't exist on Gyanranjan Priyam's portfolio.",
    };

  const ogImageUrl = `${SITE_URL}/projects/${project.id}/opengraph-image`;
  const metaDescription = getProjectMetaDescription(project);
  const displayTitle = project.title.length > 35 ? project.title.slice(0, 32) + "..." : project.title;

  return {
    title: displayTitle,
    description: metaDescription,
    keywords: [
      project.title,
      `${project.title} project`,
      `${project.title} web app`,
      `${project.title} case study`,
      `${project.title} development`,
      ...(project.company
        ? [
            `${project.company} project`,
            `${project.company} web development`,
            `${project.title} ${project.company}`,
          ]
        : []),

      ...project.tech,
      ...project.tech.map((t) => `${t} project`),
      ...project.tech.map((t) => `${t} web app`),

      `Gyanranjan Priyam ${project.title}`,
      "Gyanranjan Priyam portfolio",
      "Gyanranjan Priyam projects",
      "Gyanranjan Priyam developer",

      "full stack project",
      "web development case study",
      "developer portfolio India",
      "Next.js project showcase",
      "React project showcase",
      "web app development 2025",
    ],
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: `${displayTitle} — Gyanranjan Priyam`,
      description: metaDescription,
      url: `${SITE_URL}/projects/${project.id}`,
      siteName: "Gyanranjan Priyam",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} — Gyanranjan Priyam`,
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

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const metaDescription = getProjectMetaDescription(project);
  const projectImageUrl = project.img.startsWith("http")
    ? project.img
    : `${SITE_URL}${project.img}`;

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: metaDescription,
    url: project.liveLink || `${SITE_URL}${project.link}`,
    image: projectImageUrl,
    dateCreated: project.date,
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
    keywords: project.tech.join(", "),
    ...(project.github && { codeRepository: project.github }),
    ...(project.liveLink && { downloadUrl: project.liveLink }),
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
        name: "Projects",
        item: `${SITE_URL}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${SITE_URL}/projects/${project.id}`,
      },
    ],
  };

  const mediaItems = project.images;
  const hasRichContent =
    "highlights" in project ||
    "features" in project ||
    "techDetailed" in project;

  return (
    <div className="py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([projectSchema, breadcrumbSchema]),
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
            href="/projects"
            className="transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="truncate text-foreground font-medium">
            {project.title}
          </span>
        </nav>
      </BlurFade>

      {/* Header */}
      <BlurFade delay={0.12}>
        <div className="mb-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-sans text-foreground sm:text-4xl">
                {project.title}
              </h1>
              <p className="mt-1 text-xs sm:text-sm font-mono text-muted-foreground">
                {project.company} &middot; {project.date}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs sm:text-sm font-mono font-medium transition-colors hover:bg-muted"
                >
                  <ExternalLink className="size-3.5" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
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
            {project.tech.map((t) => (
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
      {/*Image Section*/}
      {project.img && (
        <BlurFade delay={0.15}>
          <div className="-mx-4 mt-6 mb-4 sm:-mx-6 overflow-hidden p-4">
            <Image
              src={project.img}
              alt={project.title}
              width={1200}
              height={700}
              className="w-full h-auto block rounded-none"
              priority
            />
          </div>
        </BlurFade>
      )}

      {/* Role */}
      {"role" in project && project.role && (
        <BlurFade delay={0.14}>
          <div className="mb-8 flex items-start gap-3 rounded-lg border bg-muted/30 p-4">
            <Users className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <p className="text-xs sm:text-sm font-mono tracking-tight leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">My Role: </span>
              {project.role}
            </p>
          </div>
        </BlurFade>
      )}
      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />
      {/* Description */}
      <BlurFade delay={0.16}>
        <div className="mb-10 mt-8 space-y-4">
          <div className="mb-4 flex items-baseline gap-2">
            <h2 className="text-2xl font-bold tracking-tight font-sans text-foreground">
              Overview
            </h2>
          </div>
          {project.desc.map((paragraph, i) => (
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
      {"highlights" in project && (project as any).highlights?.length > 0 && (
        <BlurFade delay={0.18} inView>
          <div className="mb-10 mt-8">
            <div className="mb-4 flex items-baseline gap-2">
              <h2 className="text-2xl font-bold tracking-tight font-sans text-foreground">
                Key Highlights
              </h2>
              <span className="text-xs font-mono text-muted-foreground/70">
                ({(project as any).highlights.length})
              </span>
            </div>

            <div className="-mx-4 sm:-mx-6 border-t border-b border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {(project as any).highlights.map((item: string, i: number) => {
                  const num = String(i + 1).padStart(2, "0");
                  const total = (project as any).highlights.length;
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
      {/* Features by category */}
      {"features" in project && (project as any).features?.length > 0 && (
        <BlurFade delay={0.2} inView>
          <div className="mb-10 mt-8">
            <div className="mb-4 flex items-baseline gap-2">
              <h2 className="text-2xl font-bold tracking-tight font-sans text-foreground">
                Features
              </h2>
              <span className="text-xs font-mono text-muted-foreground/70">
                ({(project as any).features.reduce((acc: number, f: any) => acc + f.items.length, 0)})
              </span>
            </div>
            <FeaturesAccordion features={(project as any).features} />
          </div>
        </BlurFade>
      )}
<div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />
      {/* Tech stack table */}
      {"techDetailed" in project &&
        (project as any).techDetailed?.length > 0 && (
          <BlurFade delay={0.22} inView>
            <div className="mb-10 mt-8">
              <div className="mb-4 flex items-baseline gap-2">
                <h2 className="text-2xl font-bold tracking-tight font-sans text-foreground">
                  Tech Stack
                </h2>
                <span className="text-xs font-mono text-muted-foreground/70">
                  ({(project as any).techDetailed.length})
                </span>
              </div>

              <div className="-mx-4 sm:-mx-6 border-t border-border/70">
                {(project as any).techDetailed.map(
                  (row: { layer: string; value: string }, i: number) => {
                    const num = String(i + 1).padStart(2, "0");
                    const items = row.value
                      .split(/\s*\+\s*|\s*,\s*/)
                      .map((s: string) => s.trim())
                      .filter(Boolean);

                    return (
                      <div
                        key={i}
                        className="grid grid-cols-1 md:grid-cols-[180px_1fr] border-b border-border/70"
                      >
                        {/* Left Column: Number & Layer Title */}
                        <div className="px-4 sm:px-6 py-3.5 sm:py-4 md:border-r md:border-dashed md:border-border/70 flex items-center gap-3 font-mono text-xs sm:text-sm select-none">
                          <span className="text-muted-foreground/60">{num}</span>
                          <span className="font-medium text-foreground">{row.layer}</span>
                        </div>

                        {/* Right Column: Pill Badges */}
                        <div className="px-4 sm:px-6 py-3 sm:py-3.5 flex flex-wrap items-center gap-2">
                          {items.map((techName: string, j: number) => {
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
                    );
                  }
                )}
              </div>
            </div>
          </BlurFade>
        )}
        <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />
      {/* Folder Structure */}
      {"folderStructure" in project &&
        (project as any).folderStructure?.length > 0 && (
          <BlurFade delay={hasRichContent ? 0.23 : 0.19} inView>
            <div className="mb-10 mt-8">
              <div className="mb-4 flex items-baseline gap-2">
                <h2 className="text-2xl font-bold tracking-tight font-sans text-foreground">
                  Project Structure
                </h2>
                <span className="text-xs font-mono text-muted-foreground/70">
                  (Directory Tree)
                </span>
              </div>
              <FolderStructure structure={(project as any).folderStructure} />
            </div>
          </BlurFade>
        )}
        <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />
      {/* Gallery */}
      {mediaItems.length > 0 && (
        <BlurFade delay={hasRichContent ? 0.24 : 0.2} inView>
          <div className="mb-10 mt-8">
            <div className="mb-4 flex items-baseline gap-2">
              <h2 className="text-2xl font-bold tracking-tight font-sans text-foreground">
                Screenshots
              </h2>
              <span className="text-xs font-mono text-muted-foreground/70">
                ({mediaItems.length})
              </span>
            </div>
            <ImageCarousel images={mediaItems} title={project.title} />
          </div>
        </BlurFade>
      )}
  <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />
      {/* Next project */}
      <BlurFade delay={hasRichContent ? 0.28 : 0.24} inView>
        <div className="mt-8">
          {(() => {
            const idx = projects.findIndex((p) => p.id === project.id);
            const next = projects[(idx + 1) % projects.length];
            return (
              <Link
                href={`/projects/${next.id}`}
                className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <div>
                  <p className="text-xs font-mono text-muted-foreground">
                    Next Project
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
