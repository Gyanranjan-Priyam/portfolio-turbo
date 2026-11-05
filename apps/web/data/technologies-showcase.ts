export interface TechnologyItem {
  id: string;
  name: string;
  role: string;
  logo: string;
  monochrome?: boolean;
}

/**
 * Single shared collection containing all available portfolio technologies.
 * Every column draws independently from this unified pool.
 */
export const SHARED_TECHNOLOGIES: TechnologyItem[] = [
  // Core initial 4 (matches exact reference screenshot order)
  {
    id: "nextjs",
    name: "Next.js",
    role: "FULLSTACK FRAMEWORK",
    logo: "/tech-logo/nextjs.svg",
    monochrome: true,
  },
  {
    id: "react",
    name: "React",
    role: "UI ARCHITECTURE",
    logo: "/tech-logo/react.svg",
    monochrome: true,
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    role: "UTILITY DESIGN SYSTEM",
    logo: "/tech-logo/tailwindcss.svg",
    monochrome: true,
  },
  {
    id: "shadcn",
    name: "shadcn/ui",
    role: "DESIGN PRIMITIVES",
    logo: "/tech-logo/shadcn.svg",
    monochrome: true,
  },

  // Languages & Core Runtimes
  {
    id: "typescript",
    name: "TypeScript",
    role: "TYPED SYSTEMS",
    logo: "/tech-logo/typescript.svg",
    monochrome: false,
  },
  {
    id: "javascript",
    name: "JavaScript",
    role: "CORE WEB LANGUAGE",
    logo: "/tech-logo/javascript.svg",
    monochrome: false,
  },
  {
    id: "python",
    name: "Python",
    role: "SCRIPTING & AI",
    logo: "/tech-logo/python.svg",
    monochrome: false,
  },

  // Frontend Libraries & Tooling
  {
    id: "radix",
    name: "Radix UI",
    role: "ACCESSIBLE COMPONENTS",
    logo: "/tech-logo/radix.svg",
    monochrome: true,
  },
  {
    id: "baseui",
    name: "Base UI",
    role: "UNSTYLED PRIMITIVES",
    logo: "/tech-logo/baseui.svg",
    monochrome: true,
  },
  {
    id: "motion",
    name: "Motion",
    role: "INTERACTIONS & PHYSICS",
    logo: "/tech-logo/motion.svg",
    monochrome: true,
  },
  {
    id: "gsap",
    name: "GSAP",
    role: "TIMELINE ANIMATION",
    logo: "/tech-logo/gsap.svg",
    monochrome: false,
  },
  {
    id: "expo",
    name: "Expo",
    role: "CROSS-PLATFORM MOBILE",
    logo: "/tech-logo/expo.svg",
    monochrome: true,
  },
  {
    id: "tanstack",
    name: "TanStack",
    role: "QUERY & TABLE STATE",
    logo: "/tech-logo/tanstack.svg",
    monochrome: false,
  },

  // Backend & Databases
  {
    id: "nodejs",
    name: "Node.js",
    role: "BACKEND RUNTIME",
    logo: "/tech-logo/nodejs.svg",
    monochrome: false,
  },
  {
    id: "bun",
    name: "Bun",
    role: "FAST TOOLKIT & RUNTIME",
    logo: "/tech-logo/bun.svg",
    monochrome: true,
  },
  {
    id: "supabase",
    name: "Supabase",
    role: "POSTGRES BAAS & AUTH",
    logo: "/tech-logo/supabase.svg",
    monochrome: false,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    role: "RELATIONAL DATABASE",
    logo: "/tech-logo/postgresql.svg",
    monochrome: false,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    role: "DOCUMENT DATABASE",
    logo: "/tech-logo/mongodb.svg",
    monochrome: false,
  },
  {
    id: "redis",
    name: "Redis",
    role: "IN-MEMORY CACHE & QUEUE",
    logo: "/tech-logo/redis.svg",
    monochrome: false,
  },
  {
    id: "prisma",
    name: "Prisma",
    role: "TYPE-SAFE ORM",
    logo: "/tech-logo/prisma.svg",
    monochrome: true,
  },
  {
    id: "nginx",
    name: "Nginx",
    role: "REVERSE PROXY & EDGE",
    logo: "/tech-logo/nginx.svg",
    monochrome: false,
  },

  // DevOps & Cloud
  {
    id: "docker",
    name: "Docker",
    role: "CONTAINERIZATION",
    logo: "/tech-logo/docker.svg",
    monochrome: false,
  },
  {
    id: "vercel",
    name: "Vercel",
    role: "EDGE & CLOUD PLATFORM",
    logo: "/tech-logo/vercel.svg",
    monochrome: true,
  },
  {
    id: "git",
    name: "Git",
    role: "VERSION CONTROL",
    logo: "/tech-logo/git.svg",
    monochrome: false,
  },
  {
    id: "github",
    name: "GitHub",
    role: "CI/CD & ACTIONS",
    logo: "/tech-logo/github.svg",
    monochrome: true,
  },

  // AI & Workflow
  {
    id: "claude",
    name: "Claude",
    role: "ANTHROPIC WORKFLOWS",
    logo: "/tech-logo/claude.svg",
    monochrome: false,
  },
  {
    id: "gemini",
    name: "Gemini",
    role: "GOOGLE MULTIMODAL AI",
    logo: "/tech-logo/gemini.svg",
    monochrome: false,
  },


  // Payments & Billing
  {
    id: "stripe",
    name: "Stripe",
    role: "CARDS & BILLING",
    logo: "/tech-logo/stripe.svg",
    monochrome: false,
  },
  {
    id: "razorpay",
    name: "Razorpay",
    role: "UPI & NETBANKING",
    logo: "/tech-logo/razorpay.svg",
    monochrome: false,
  },
];

/**
 * Initial deterministic 4 items matching the reference screenshot.
 */
export const INITIAL_SHOWCASE_ITEMS: [
  TechnologyItem,
  TechnologyItem,
  TechnologyItem,
  TechnologyItem
] = [
  SHARED_TECHNOLOGIES[0],
  SHARED_TECHNOLOGIES[1],
  SHARED_TECHNOLOGIES[2],
  SHARED_TECHNOLOGIES[3],
];

