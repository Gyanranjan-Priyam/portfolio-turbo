import React from "react";
import {
  siTypescript,
  siJavascript,
  siPython,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siShadcnui,
  siRadixui,
  siBaseui,
  siFramer,
  siExpo,
  siTanstack,
  siGsap,
  siNodedotjs,
  siBun,
  siPostgresql,
  siMongodb,
  siRedis,
  siNginx,
  siClaude,
  siGooglegemini,
  siGit,
  siGithub,
  siDocker,
  siVercel,
  siFigma,
  siPrisma,
  siBetterauth,
  siSocketdotio,
  siStripe,
  siExpress,
  siRazorpay,
  siThreedotjs,
  siZod,
  siVite,
  siSass,
  siLucide,
  siGoogle,
  type SimpleIcon,
} from "simple-icons";

export interface TechIconProps {
  name: string;
  className?: string;
  colored?: boolean;
}

/**
 * Helper to create an icon component directly from a Simple Icons data object
 */
export function createSimpleIconComponent(icon: SimpleIcon) {
  const Comp = function SimpleIconComponent({
    className = "size-3.5",
    colored = false,
  }: {
    className?: string;
    colored?: boolean;
  }) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className={className}
        fill={colored ? `#${icon.hex}` : "currentColor"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{icon.title}</title>
        <path d={icon.path} />
      </svg>
    );
  };
  Comp.displayName = `SimpleIcon_${icon.slug}`;
  return Comp;
}

// Icons imported from simple-icons
export const TypeScriptIcon = createSimpleIconComponent(siTypescript);
export const JavaScriptIcon = createSimpleIconComponent(siJavascript);
export const PythonIcon = createSimpleIconComponent(siPython);
export const ReactIcon = createSimpleIconComponent(siReact);
export const NextJSIcon = createSimpleIconComponent(siNextdotjs);
export const TailwindCSSIcon = createSimpleIconComponent(siTailwindcss);
export const ShadcnUIIcon = createSimpleIconComponent(siShadcnui);
export const RadixUIIcon = createSimpleIconComponent(siRadixui);
export const BaseUIIcon = createSimpleIconComponent(siBaseui);
export const MotionIcon = createSimpleIconComponent(siFramer);
export const ExpoIcon = createSimpleIconComponent(siExpo);
export const TanStackIcon = createSimpleIconComponent(siTanstack);
export const GSAPIcon = createSimpleIconComponent(siGsap);
export const NodeJSIcon = createSimpleIconComponent(siNodedotjs);
export const BunIcon = createSimpleIconComponent(siBun);
export const PostgreSQLIcon = createSimpleIconComponent(siPostgresql);
export const MongoDBIcon = createSimpleIconComponent(siMongodb);
export const RedisIcon = createSimpleIconComponent(siRedis);
export const NginxIcon = createSimpleIconComponent(siNginx);
export const ClaudeIcon = createSimpleIconComponent(siClaude);
export const GeminiIcon = createSimpleIconComponent(siGooglegemini);
export const GitIcon = createSimpleIconComponent(siGit);
export const GitHubIcon = createSimpleIconComponent(siGithub);
export const DockerIcon = createSimpleIconComponent(siDocker);
export const VercelIcon = createSimpleIconComponent(siVercel);
export const FigmaIcon = createSimpleIconComponent(siFigma);
export const PrismaIcon = createSimpleIconComponent(siPrisma);
export const BetterAuthIcon = createSimpleIconComponent(siBetterauth);
export const SocketIOIcon = createSimpleIconComponent(siSocketdotio);
export const StripeIcon = createSimpleIconComponent(siStripe);
export const ExpressIcon = createSimpleIconComponent(siExpress);
export const RazorpayIcon = createSimpleIconComponent(siRazorpay);
export const ThreeJSIcon = createSimpleIconComponent(siThreedotjs);
export const ZodIcon = createSimpleIconComponent(siZod);
export const ViteIcon = createSimpleIconComponent(siVite);
export const SCSSIcon = createSimpleIconComponent(siSass);
export const LucideIcon = createSimpleIconComponent(siLucide);
export const GoogleIcon = createSimpleIconComponent(siGoogle);

// Dedicated SVGs for brands restricted by trademark policies in Simple Icons (e.g. OpenAI, Adobe, AWS)
export function PhotoshopIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.15" />
      <path d="M5.5 6.5h3.8c2.2 0 3.7 1.3 3.7 3.2 0 2-1.6 3.3-3.8 3.3H7.5v4.5H5.5V6.5zm2 4.7h1.6c1.1 0 1.9-.6 1.9-1.5s-.8-1.5-1.9-1.5H7.5v3zm6.6 4.6c.7.5 1.7.8 2.6.8 1.4 0 2.2-.7 2.2-1.7 0-1-.6-1.5-2.1-1.9-1.8-.5-2.8-1.3-2.8-2.6 0-1.6 1.3-2.7 3.2-2.7.9 0 1.8.3 2.4.7l-.6 1.4c-.5-.4-1.2-.6-1.9-.6-1 0-1.7.6-1.7 1.3 0 .9.6 1.3 2 1.8 1.9.5 2.9 1.3 2.9 2.7 0 1.7-1.3 2.8-3.4 2.8-1 0-2.1-.3-2.8-.8l.6-1.8z" />
    </svg>
  );
}

export function OpenAIIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073ZM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494Z" />
    </svg>
  );
}

export function AWSIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M6.763 10.03c0 .242.06.436.182.582.12.145.315.218.582.218h1.237c.364 0 .618-.085.764-.255.145-.17.218-.46.218-.873 0-.46-.073-.788-.218-.982-.146-.194-.4-.29-.764-.29H7.527c-.267 0-.461.085-.582.254-.121.17-.182.437-.182.801v.546Zm-2.582-.29c0-.776.218-1.406.655-1.891.436-.485 1.079-.728 1.927-.728h2.837c.848 0 1.49.243 1.927.728.436.485.655 1.115.655 1.89v4.292H9.837v-.982c-.364.388-.752.679-1.164.873-.412.194-.909.29-1.49.29-.752 0-1.346-.206-1.782-.618-.437-.412-.655-.982-.655-1.71 0-.751.242-1.333.727-1.745.485-.412 1.188-.667 2.11-.764l1.636-.182v-.4c0-.364-.085-.63-.255-.8-.17-.17-.46-.255-.872-.255h-1.6c-.364 0-.619.06-.764.182-.146.121-.219.34-.219.654H4.18Zm15.637 5.091h-2.182l-2.036-6.691h2.29l1.092 4.29 1.163-4.29h1.746l1.163 4.29 1.091-4.29h2.292l-2.037 6.691h-2.182l-1.199-3.927-1.198 3.927Zm-15.127 5.455c6.255 3.345 13.673 2.182 18.546-1.309.218-.182.145-.437-.11-.328-4.945 2.11-10.981 2.328-16.727-.581-.255-.146-.436.072-.182.327-.837.836-1.527.89-1.527.89Z" />
    </svg>
  );
}

export function TipTapIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M4 6h16v3H13.5v9h-3V9H4V6z" />
    </svg>
  );
}

export function ArcjetIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2L2 22h4.5l5.5-11 5.5 11H22L12 2z" />
    </svg>
  );
}

export function LenisIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function ZustandIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M9 10h6l-6 5h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function RechartsIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <rect x="4" y="12" width="3.5" height="8" rx="1" />
      <rect x="10.25" y="6" width="3.5" height="14" rx="1" />
      <rect x="16.5" y="9" width="3.5" height="11" rx="1" />
    </svg>
  );
}

export function DndKitIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <circle cx="8" cy="7" r="1.5" />
      <circle cx="16" cy="7" r="1.5" />
      <circle cx="8" cy="12" r="1.5" />
      <circle cx="16" cy="12" r="1.5" />
      <circle cx="8" cy="17" r="1.5" />
      <circle cx="16" cy="17" r="1.5" />
    </svg>
  );
}

export function NodemailerIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.5l9 5.5 9-5.5V7H3zm18 10V9.5l-8.5 5.2a1 1 0 0 1-1 0L3 9.5V17h18z" />
    </svg>
  );
}

export function DefaultCodeIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

/**
 * Resolver mapping tech / tool names to their corresponding icon component
 */
export function getTechIconComponent(name: string): React.ComponentType<{ className?: string }> {
  const n = name.toLowerCase().trim();

  // TypeScript
  if (n.includes("typescript") || n === "ts") return TypeScriptIcon;

  // JavaScript
  if (n.includes("javascript") || n === "js") return JavaScriptIcon;

  // Python
  if (n.includes("python")) return PythonIcon;

  // React & derivatives
  if (n.includes("react")) return ReactIcon;

  // Next.js
  if (n.includes("next")) return NextJSIcon;

  // Tailwind CSS
  if (n.includes("tailwind")) return TailwindCSSIcon;

  // shadcn / UI
  if (n.includes("shadcn")) return ShadcnUIIcon;

  // Radix UI
  if (n.includes("radix")) return RadixUIIcon;

  // Base UI
  if (n.includes("base ui")) return BaseUIIcon;

  // Framer Motion / Motion
  if (n.includes("motion") || n.includes("framer")) return MotionIcon;

  // Expo
  if (n.includes("expo")) return ExpoIcon;

  // TanStack
  if (n.includes("tanstack")) return TanStackIcon;

  // GSAP / ScrollTrigger
  if (n.includes("gsap") || n.includes("scrolltrigger")) return GSAPIcon;

  // Node.js
  if (n.includes("node")) return NodeJSIcon;

  // Bun
  if (n.includes("bun")) return BunIcon;

  // PostgreSQL
  if (n.includes("postgres")) return PostgreSQLIcon;

  // MongoDB
  if (n.includes("mongo")) return MongoDBIcon;

  // Redis / Upstash
  if (n.includes("redis")) return RedisIcon;

  // Nginx
  if (n.includes("nginx")) return NginxIcon;

  // Claude / Anthropic
  if (n.includes("claude") || n.includes("anthropic")) return ClaudeIcon;

  // Gemini / Google Gemini
  if (n.includes("gemini")) return GeminiIcon;

  // OpenAI / ChatGPT
  if (n.includes("chatgpt") || n.includes("openai")) return OpenAIIcon;

  // Google / Google APIs
  if (n.includes("google")) return GoogleIcon;

  // Git
  if (n === "git") return GitIcon;

  // GitHub
  if (n.includes("github")) return GitHubIcon;

  // Docker
  if (n.includes("docker")) return DockerIcon;

  // Vercel
  if (n.includes("vercel")) return VercelIcon;

  // Figma
  if (n.includes("figma")) return FigmaIcon;

  // Photoshop
  if (n.includes("photoshop")) return PhotoshopIcon;

  // Prisma
  if (n.includes("prisma")) return PrismaIcon;

  // Better Auth
  if (n.includes("better auth") || n.includes("better-auth")) return BetterAuthIcon;

  // AWS / S3
  if (n.includes("aws") || n.includes("s3")) return AWSIcon;

  // TipTap
  if (n.includes("tiptap")) return TipTapIcon;

  // Socket.io
  if (n.includes("socket")) return SocketIOIcon;

  // Arcjet
  if (n.includes("arcjet")) return ArcjetIcon;

  // Stripe
  if (n.includes("stripe")) return StripeIcon;

  // Express
  if (n.includes("express")) return ExpressIcon;

  // Razorpay
  if (n.includes("razorpay")) return RazorpayIcon;

  // Three.js / Drei / Rapier / GLSL
  if (n.includes("three") || n.includes("drei") || n.includes("rapier") || n.includes("glsl")) return ThreeJSIcon;

  // Lenis
  if (n.includes("lenis")) return LenisIcon;

  // Zustand
  if (n.includes("zustand")) return ZustandIcon;

  // Zod
  if (n.includes("zod")) return ZodIcon;

  // Recharts
  if (n.includes("recharts") || n.includes("chart")) return RechartsIcon;

  // dnd kit / dnd-kit
  if (n.includes("dnd")) return DndKitIcon;

  // Nodemailer
  if (n.includes("nodemailer") || n.includes("email")) return NodemailerIcon;

  // Vite
  if (n.includes("vite")) return ViteIcon;

  // SCSS / Sass
  if (n.includes("scss") || n.includes("sass")) return SCSSIcon;

  // Lucide
  if (n.includes("lucide")) return LucideIcon;

  return DefaultCodeIcon;
}

export function TechIcon({ name, className = "size-3.5 shrink-0" }: TechIconProps) {
  const IconComp = getTechIconComponent(name);
  return <IconComp className={className} />;
}

export function TechBadge({
  name,
  className = "",
  iconClassName = "size-3.5 shrink-0",
  size = "md",
}: {
  name: string;
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1.5 text-xs sm:text-[13px]",
    lg: "px-3.5 py-1.5 text-sm",
  }[size];

  return (
    <div
      className={`group/tech-badge inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 hover:bg-muted hover:border-foreground/30 font-mono text-foreground transition-all duration-200 select-none ${sizeClasses} ${className}`}
    >
      <span className="shrink-0 transition-all duration-200 opacity-70 group-hover/tech-badge:opacity-100">
        <TechIcon name={name} className={iconClassName} />
      </span>
      <span>{name}</span>
    </div>
  );
}
