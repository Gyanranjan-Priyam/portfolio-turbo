import type { ReactNode } from "react";
import { createElement } from "react";
import { TechIcon } from "@/components/tech-icons";

export type Skill = {
  name: string;
  icon?: ReactNode;
};

export type SkillCategory = {
  number: string;
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    number: "01",
    title: "Language",
    skills: [
      { name: "TypeScript", icon: createElement(TechIcon, { name: "TypeScript" }) },
      { name: "JavaScript", icon: createElement(TechIcon, { name: "JavaScript" }) },
      { name: "Python", icon: createElement(TechIcon, { name: "Python" }) },
    ],
  },
  {
    number: "02",
    title: "Frontend",
    skills: [
      { name: "React", icon: createElement(TechIcon, { name: "React" }) },
      { name: "Next.js", icon: createElement(TechIcon, { name: "Next.js" }) },
      { name: "Tailwind CSS", icon: createElement(TechIcon, { name: "Tailwind CSS" }) },
      { name: "shadcn/ui", icon: createElement(TechIcon, { name: "shadcn/ui" }) },
      { name: "Radix UI", icon: createElement(TechIcon, { name: "Radix UI" }) },
      { name: "Base UI", icon: createElement(TechIcon, { name: "Base UI" }) },
      { name: "Motion", icon: createElement(TechIcon, { name: "Motion" }) },
      { name: "Expo", icon: createElement(TechIcon, { name: "Expo" }) },
      { name: "TanStack", icon: createElement(TechIcon, { name: "TanStack" }) },
      { name: "GSAP", icon: createElement(TechIcon, { name: "GSAP" }) },
    ],
  },
  {
    number: "03",
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: createElement(TechIcon, { name: "Node.js" }) },
      { name: "Bun", icon: createElement(TechIcon, { name: "Bun" }) },
      { name: "PostgreSQL", icon: createElement(TechIcon, { name: "PostgreSQL" }) },
      { name: "MongoDB", icon: createElement(TechIcon, { name: "MongoDB" }) },
      { name: "Redis", icon: createElement(TechIcon, { name: "Redis" }) },
      { name: "nginx", icon: createElement(TechIcon, { name: "nginx" }) },
    ],
  },
  {
    number: "04",
    title: "Workflow & AI",
    skills: [
      { name: "Claude", icon: createElement(TechIcon, { name: "Claude" }) },
      { name: "Gemini", icon: createElement(TechIcon, { name: "Gemini" }) },
      { name: "ChatGPT", icon: createElement(TechIcon, { name: "ChatGPT" }) },
      { name: "Git", icon: createElement(TechIcon, { name: "Git" }) },
      { name: "GitHub", icon: createElement(TechIcon, { name: "GitHub" }) },
      { name: "Docker", icon: createElement(TechIcon, { name: "Docker" }) },
      { name: "Vercel", icon: createElement(TechIcon, { name: "Vercel" }) },
    ],
  },
  {
    number: "05",
    title: "Design",
    skills: [
      { name: "Figma", icon: createElement(TechIcon, { name: "Figma" }) },
      { name: "Photoshop", icon: createElement(TechIcon, { name: "Photoshop" }) },
    ],
  },
];
