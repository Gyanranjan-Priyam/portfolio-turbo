import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { TemplatesSection } from "@/components/sections/templates";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";
import { GitHubCalendarSection } from "@/components/sections/github-calendar";
import { Separator } from "@/components/ui/separator";
import { ExperienceSection } from "@/components/sections/experience";
import { SITE_URL } from "@/lib/config";

const OG_IMAGE = `${SITE_URL}/opengraph-image`;

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Gyanranjan Priyam — Portfolio",
    description:
      "Full Stack Developer portfolio showcasing scalable web applications, React & Next.js projects, and open-source templates.",
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
    jobTitle: "Full Stack Developer",
    url: SITE_URL,
    image: OG_IMAGE,
    email: "info@priyam.tech",
    sameAs: [
      "https://linkedin.com/in/gyanranjan-priyam",
      "https://github.com/gyanranjan-priyam",
      "https://x.com/gr_priyam",
      "https://instagram.com/gyanranjanpriyam",
    ],
    description:
      "Full Stack Developer working at the intersection of web development, app development, and AI/ML to build scalable digital products people actually use.",
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "Three.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Full Stack Development",
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
      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />
      <AboutSection />
      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />
      <EducationSection />
      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />
      <ExperienceSection />
      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />
      <SkillsSection />
            <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />

      <GitHubCalendarSection />
      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />
      <ProjectsSection />
      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />
      <TemplatesSection />
      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />
      <ContactSection />
    </>
  );
}
