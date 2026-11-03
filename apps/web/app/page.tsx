import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";
import { GitHubCalendarSection } from "@/components/sections/github-calendar";
import { ExperienceSection } from "@/components/sections/experience";
import { SectionDivider } from "@/components/ui/section-divider";
import { SITE_URL } from "@/lib/config";

const OG_IMAGE = `${SITE_URL}/og.png`;

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Gyanranjan Priyam — Portfolio",
    description:
      "Frontend Developer portfolio showcasing scalable web applications, React & Next.js projects, and open-source templates.",
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Gyanranjan Priyam",
    jobTitle: "Frontend Developer",
    url: SITE_URL,
    image: OG_IMAGE,
    email: "hello@priyam.tech",
    sameAs: [
      "https://linkedin.com/in/gyanranjan-priyam",
      "https://github.com/gyanranjan-priyam",
      "https://x.com/gr_priyam",
      "https://instagram.com/gyanranjanpriyam",
    ],
    description:
      "Frontend Developer working at the intersection of web development, app development, and AI/ML to build scalable digital products people actually use.",
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "Three.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Frontend Development",
      "WebGL",
      "GSAP",
    ],
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <EducationSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <GitHubCalendarSection />
      <SectionDivider />
      <ContactSection />
    </>
  );
}
