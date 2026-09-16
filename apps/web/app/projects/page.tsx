import type { Metadata } from "next";
import projects from "@/data/projectsData";
import { ProjectsClient } from "./projects-client";

import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore production-ready full stack projects, web apps, and developer tools built with Next.js, React, and TypeScript by Gyanranjan Priyam.",
  keywords: [
    "Gyanranjan Priyam projects",
    "Gyanranjan Priyam portfolio",
    "Priyam Projects",
    "Gyanranjan developer portfolio",
    "Gyanranjan Priyam work",
    "portfolio showcase",
    "web development portfolio",
    "frontend developer portfolio",
    "full stack developer portfolio",
    "developer portfolio India",
    "Indian developer portfolio",
    "software engineer portfolio",
    "React projects",
    "Next.js projects",
    "Next.js portfolio",
    "TypeScript projects",
    "Node.js projects",
    "JavaScript projects",
    "Tailwind CSS projects",
    "Prisma projects",
    "REST API projects",
    "full stack projects",
    "web application projects",
    "responsive web projects",
    "web design portfolio",
    "frontend development examples",
    "SaaS projects",
    "open source projects GitHub",
    "real world React projects",
    "real world Next.js projects",
    "hire React developer India",
    "hire Next.js developer",
    "freelance web developer portfolio",
    "professional web development",
    "web developer projects 2025",
    "coding projects showcase",
    "GitHub projects portfolio",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Gyanranjan Priyam",
    description:
      "Explore production-ready full stack projects, web apps, and developer tools built with Next.js, React, and TypeScript by Gyanranjan Priyam.",
    url: `${SITE_URL}/projects`,
    siteName: "Gyanranjan Priyam",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Gyanranjan Priyam",
    description:
      "Explore production-ready full stack projects, web apps, and developer tools built with Next.js, React, and TypeScript by Gyanranjan Priyam.",
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
      name: "Projects",
      item: `${SITE_URL}/projects`,
    },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProjectsClient projects={projects} />
    </>
  );
}
