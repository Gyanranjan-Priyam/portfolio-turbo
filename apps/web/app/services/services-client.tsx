"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Smartphone,
  Zap,
  Cloud,
  Code2,
  Gauge,
  Boxes,
  Rocket,
  ShieldCheck,
  Layers,
  CreditCard,
  Lock,
  LayoutDashboard,
  Wrench,
  Settings,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronDown,
  Monitor,
  Check,
  Crown,
} from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionDivider } from "@/components/ui/section-divider";
import { cn } from "@/lib/utils";
import { ContactSection } from "@/components/sections/contact";
import { TechStackGrid } from "@/components/services/tech-stack-grid";
import { useCurrency, type Currency } from "@/lib/use-currency";

/* -------------------------------------------------------------------------- */
/* Data Definitions                                                           */
/* -------------------------------------------------------------------------- */

interface ServiceTier {
  id: string;
  number: string;
  title: string;
  description: string;
  priceInr: string;
  priceUsd: string;
  deliverables: string[];
  popular?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  calNamespace?: string;
  calLink?: string;
  calConfig?: string;
  tags?: {
    icon: React.ReactNode;
    label: string;
  }[];
}

const SERVICES_DATA: ServiceTier[] = [
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive and SEO-friendly websites for individuals, startups and businesses.",
    priceInr: "₹12,000",
    priceUsd: "$299",
    icon: Monitor,
    calNamespace: "web-dev",
    calLink: "gyanranjanpriyam/web-dev",
    calConfig: '{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"auto"}',
    deliverables: [
      "Responsive, mobile-first design",
      "SEO and performance optimized",
      "Deployment and basic support",
    ],
    tags: [
      {
        icon: <Smartphone className="size-3.5 shrink-0 text-muted-foreground" />,
        label: "Responsive Design",
      },
      {
        icon: <Zap className="size-3.5 shrink-0 text-muted-foreground" />,
        label: "SEO Optimized",
      },
      {
        icon: <Cloud className="size-3.5 shrink-0 text-muted-foreground" />,
        label: "Deployment Support",
      },
    ],
  },
  {
    id: "frontend-engineering",
    number: "02",
    title: "Frontend Engineering",
    description:
      "Pixel-perfect, high-performance user interfaces using modern web technologies like Next.js, React and TypeScript.",
    priceInr: "₹20,000",
    priceUsd: "$499",
    popular: true,
    icon: Code2,
    calNamespace: "frontend-engineering",
    calLink: "gyanranjanpriyam/frontend-engineering",
    calConfig: '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
    deliverables: [
      "UI implementation from design (Figma, etc.)",
      "Performance and accessibility focused",
      "Reusable and scalable component architecture",
    ],
    tags: [
      {
        icon: <Code2 className="size-3.5 shrink-0 text-muted-foreground" />,
        label: "UI Implementation",
      },
      {
        icon: <Gauge className="size-3.5 shrink-0 text-muted-foreground" />,
        label: "Performance Optimization",
      },
      {
        icon: <Boxes className="size-3.5 shrink-0 text-muted-foreground" />,
        label: "Component Architecture",
      },
    ],
  },
  {
    id: "saas-development",
    number: "03",
    title: "SaaS Development",
    description:
      "End-to-end development of scalable, production-ready SaaS applications — from MVPs to full products.",
    priceInr: "₹50,000",
    priceUsd: "$1,499",
    icon: Layers,
    calNamespace: "saas-design",
    calLink: "gyanranjanpriyam/saas-design",
    calConfig: '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
    deliverables: [
      "MVP to production-ready development",
      "Authentication, roles and team management",
      "Scalable and maintainable architecture",
    ],
    tags: [
      {
        icon: <Rocket className="size-3.5 shrink-0 text-muted-foreground" />,
        label: "MVP to Production",
      },
      {
        icon: <ShieldCheck className="size-3.5 shrink-0 text-muted-foreground" />,
        label: "Authentication & Roles",
      },
      {
        icon: <Layers className="size-3.5 shrink-0 text-muted-foreground" />,
        label: "Scalable Architecture",
      },
    ],
  },
];

interface AddonItem {
  icon: React.ReactNode;
  title: string;
  priceInr: string;
  priceUsd: string;
}

const ADDONS_DATA: AddonItem[] = [
  {
    icon: <Code2 className="size-4 shrink-0" />,
    title: "API Integration",
    priceInr: "From ₹5,000",
    priceUsd: "From $129",
  },
  {
    icon: <CreditCard className="size-4 shrink-0" />,
    title: "Payment Integration",
    priceInr: "From ₹8,000",
    priceUsd: "From $199",
  },
  {
    icon: <Lock className="size-4 shrink-0" />,
    title: "Authentication",
    priceInr: "From ₹5,000",
    priceUsd: "From $129",
  },
  {
    icon: <LayoutDashboard className="size-4 shrink-0" />,
    title: "Admin Dashboard",
    priceInr: "From ₹15,000",
    priceUsd: "From $399",
  },
  {
    icon: <Wrench className="size-4 shrink-0" />,
    title: "Maintenance",
    priceInr: "From ₹2,999 / mo",
    priceUsd: "From $79 / mo",
  },
  {
    icon: <Settings className="size-4 shrink-0" />,
    title: "Custom Feature",
    priceInr: "Custom Quote",
    priceUsd: "Custom Quote",
  },
];

interface ProcessStep {
  number: string;
  badge: string;
  title: string;
  description: string;
  footer: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    badge: "INITIAL SCOPE",
    title: "Share your idea",
    description: "Tell me about your project, goals and requirements.",
    footer: "Step 01 · Discovery",
    icon: Sparkles,
  },
  {
    number: "02",
    badge: "TIMELINE & COST",
    title: "Plan and estimate",
    description: "We define the scope, timeline and cost together.",
    footer: "Step 02 · Planning",
    icon: Layers,
  },
  {
    number: "03",
    badge: "ITERATIVE DEV",
    title: "Build and iterate",
    description: "I develop, share progress and refine with your feedback.",
    footer: "Step 03 · Execution",
    icon: Code2,
  },
  {
    number: "04",
    badge: "PRODUCTION READY",
    title: "Deliver and support",
    description: "Launch the project and provide agreed support.",
    footer: "Step 04 · Delivery",
    icon: Rocket,
  },
];

/* -------------------------------------------------------------------------- */
/* Main Services Client Component                                             */
/* -------------------------------------------------------------------------- */

export function ServicesClient() {
  const { currency, setCurrency } = useCurrency();
  const [activeTab, setActiveTab] = useState<"development" | "templates">("development");
  const [projectType, setProjectType] = useState<string>("website");
  const [scope, setScope] = useState<string>("small");
  const [budget, setBudget] = useState<string>("default");
  const [showEstimate, setShowEstimate] = useState<boolean>(true);

  // Initialize Cal.com embed for seamless booking
  useEffect(() => {
    (async function () {
      try {
        const calWebDev = await getCalApi({ namespace: "web-dev" });
        calWebDev("ui", { hideEventTypeDetails: false, layout: "month_view" });

        const calFrontend = await getCalApi({ namespace: "frontend-engineering" });
        calFrontend("ui", { hideEventTypeDetails: false, layout: "month_view" });

        const calSaas = await getCalApi({ namespace: "saas-design" });
        calSaas("ui", { hideEventTypeDetails: false, layout: "month_view" });

        const calMeet = await getCalApi({ namespace: "meet" });
        calMeet("ui", { hideEventTypeDetails: false, layout: "month_view" });

        const cal30Min = await getCalApi({ namespace: "30min" });
        cal30Min("ui", { hideEventTypeDetails: false, layout: "month_view" });
      } catch (err) {
        console.error("Cal embed init error:", err);
      }
    })();
  }, []);

  // Dynamic estimate calculations based on selections
  const calculateEstimate = (curr: Currency) => {
    switch (projectType) {
      case "website":
        if (scope === "small") {
          return {
            price: curr === "INR" ? "₹12,000 – ₹20,000" : "$299 – $450",
            timeline: "4 – 7 business days",
            deliverables: [
              "1–5 high-performance responsive pages",
              "Technical SEO and metadata architecture",
              "Fast Vercel/Cloudflare deployment",
              "Contact form with email notifications",
              "14 days post-launch warranty support",
            ],
          };
        }
        if (scope === "medium") {
          return {
            price: curr === "INR" ? "₹25,000 – ₹40,000" : "$500 – $800",
            timeline: "1 – 2 weeks",
            deliverables: [
              "6–15 modular pages with custom animations",
              "Blog / CMS integration (MDX or headless CMS)",
              "Automated sitemap, RSS, OpenGraph assets",
              "Analytics & conversion tracking integration",
              "30 days warranty & maintenance support",
            ],
          };
        }
        return {
          price: curr === "INR" ? "₹45,000+" : "$900+",
          timeline: "3 – 4 weeks",
          deliverables: [
            "15+ custom structured pages or web platform",
            "Multi-language or localization readiness",
            "Advanced micro-interactions & custom graphics",
            "Performance optimization score 95+ on Lighthouse",
            "45 days dedicated warranty & onboarding",
          ],
        };

      case "frontend":
        if (scope === "small") {
          return {
            price: curr === "INR" ? "₹20,000 – ₹35,000" : "$499 – $750",
            timeline: "1 – 2 weeks",
            deliverables: [
              "Pixel-perfect React / Next.js implementation",
              "Design system tokens with Tailwind CSS",
              "Accessible ARIA compliant UI components",
              "State management and form validations",
              "14 days component revision support",
            ],
          };
        }
        if (scope === "medium") {
          return {
            price: curr === "INR" ? "₹40,000 – ₹65,000" : "$800 – $1,300",
            timeline: "2 – 3 weeks",
            deliverables: [
              "Comprehensive UI component design library",
              "Full REST / GraphQL API hooks integration",
              "Complex dashboard interfaces and charts",
              "Core Web Vitals tuning & bundle optimization",
              "30 days bugfix & maintenance support",
            ],
          };
        }
        return {
          price: curr === "INR" ? "₹70,000+" : "$1,400+",
          timeline: "4+ weeks",
          deliverables: [
            "Enterprise-grade frontend platform architecture",
            "Full end-to-end integration with backend APIs",
            "Role-based view permission management",
            "Comprehensive testing suite setup",
            "60 days architectural support",
          ],
        };

      case "saas":
        if (scope === "small") {
          return {
            price: curr === "INR" ? "₹50,000 – ₹80,000" : "$1,499 – $2,000",
            timeline: "2 – 3 weeks",
            deliverables: [
              "Production-ready MVP architecture",
              "Authentication, session management & RBAC",
              "Database schemas (PostgreSQL / Supabase / Prisma)",
              "Payment gateway integration (Stripe / Razorpay)",
              "30 days warranty support",
            ],
          };
        }
        if (scope === "medium") {
          return {
            price: curr === "INR" ? "₹85,000 – ₹1,50,000" : "$2,000 – $3,500",
            timeline: "3 – 5 weeks",
            deliverables: [
              "Full-featured multi-tenant SaaS application",
              "Subscription billing, invoicing & customer portal",
              "Transactional emails & webhook delivery pipeline",
              "Admin management console with audit logging",
              "45 days warranty & scale monitoring",
            ],
          };
        }
        return {
          price: curr === "INR" ? "₹1,80,000+" : "$4,000+",
          timeline: "6+ weeks",
          deliverables: [
            "Enterprise scalable SaaS platform",
            "Custom AI integration or background queue workers",
            "High concurrency database indexing and cache layers",
            "Dedicated deployment pipeline and observability",
            "90 days engineering support",
          ],
        };

      default:
        return {
          price: curr === "INR" ? "₹35,000 – ₹90,000" : "$700 – $1,800",
          timeline: "2 – 4 weeks",
          deliverables: [
            "Custom scoped feature architecture",
            "Integration with existing repositories or APIs",
            "Full code documentation and handoff",
            "Comprehensive testing across devices",
            "30 days warranty support",
          ],
        };
    }
  };

  const currentEstimate = calculateEstimate(currency);

  const handleSelectService = (service: ServiceTier) => {
    if (service.id.includes("website")) setProjectType("website");
    else if (service.id.includes("frontend")) setProjectType("frontend");
    else if (service.id.includes("saas")) setProjectType("saas");

    const estimatorElement = document.getElementById("project-estimator");
    if (estimatorElement) {
      estimatorElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-6 sm:pt-8 pb-0">
      {/* -------------------------------------------------------------------- */}
      {/* 1. Header & Breadcrumb                                               */}
      {/* -------------------------------------------------------------------- */}
      <BlurFade delay={0.04}>
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground mb-4 select-none"
        >
          <Link
            href="/"
            className="hover:text-foreground transition-colors cursor-pointer"
          >
            Home
          </Link>
          <span className="text-muted-foreground/60 select-none">/</span>
          <span className="text-foreground font-medium">Services</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight font-sans text-foreground mb-3">
          Services
        </h1>

        {/* Subtitle / Intro */}
        <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed max-w-2xl mb-8 sm:mb-10">
          I build thoughtful digital experiences — from high-performance websites
          to scalable web applications and SaaS products, with a focus on clean
          design, engineering quality and real-world impact.
        </p>
      </BlurFade>

      {/* -------------------------------------------------------------------- */}
      {/* 2. Services Pricing Grid (3 in a row + Custom Idea + Tech Stack)     */}
      {/* -------------------------------------------------------------------- */}
      <BlurFade delay={0.08}>
        {/* Pricing Header Bar with Region Indicator & Currency Switcher */}
        <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider font-semibold select-none">
              // PRICING TIERS
            </span>
            <span className="font-mono text-[11px] text-muted-foreground/60 hidden sm:inline select-none">
              [{currency === "INR" ? "Region: India (INR)" : "Region: Global (USD)"}]
            </span>
          </div>

          {/* Region / Currency Switcher */}
          <div
            role="group"
            aria-label="Select currency"
            className="flex items-center border border-border bg-muted/20 p-0.5 rounded-sm select-none"
          >
            <button
              type="button"
              onClick={() => setCurrency("INR")}
              className={cn(
                "px-2.5 py-1 text-xs font-mono font-medium rounded-xs transition-all cursor-pointer",
                currency === "INR"
                  ? "bg-background text-foreground shadow-2xs font-semibold border border-border"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-pressed={currency === "INR"}
            >
              ₹ INR
            </button>
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={cn(
                "px-2.5 py-1 text-xs font-mono font-medium rounded-xs transition-all cursor-pointer",
                currency === "USD"
                  ? "bg-background text-foreground shadow-2xs font-semibold border border-border"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-pressed={currency === "USD"}
            >
              $ USD
            </button>
          </div>
        </div>

        <div className="-mx-4 sm:-mx-6 border-y border-border">
          {/* Main Grid: 3 Columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {SERVICES_DATA.map((service) => {
              const ServiceIcon = service.icon;
              const isPopular = service.popular;
              return (
                <div
                  key={service.id}
                  className="bg-background p-5 sm:p-6 lg:p-7 flex flex-col justify-between select-text group/pricing relative"
                >
                  <div>
                    {/* Top Row: Icon Container on Left, Arrow / Popular Badge on Right */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="size-9 sm:size-10 rounded-sm sm:rounded-md border border-border/80 bg-muted/30 flex items-center justify-center shrink-0 text-foreground">
                        <ServiceIcon className="size-4 sm:size-4.5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans font-bold text-base sm:text-lg text-foreground tracking-tight mb-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-[13px] text-muted-foreground leading-relaxed mb-5 min-h-[38px]">
                      {service.description}
                    </p>

                    {/* Starting at Price Box */}
                    <div
                      className={cn(
                        "w-full px-3.5 py-2 flex items-center justify-between gap-3 mb-5 rounded-sm border transition-colors",
                        isPopular
                          ? "bg-foreground text-background border-foreground dark:bg-foreground dark:text-background"
                          : "border-border/80 bg-muted/20 dark:bg-neutral-900/40 text-foreground"
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-xs select-none",
                          isPopular ? "text-background/80" : "text-muted-foreground"
                        )}
                      >
                        Starting at
                      </span>
                      <div
                        className={cn(
                          "h-3.5 w-px",
                          isPopular ? "bg-background/30" : "bg-border"
                        )}
                      />
                      <span
                        suppressHydrationWarning
                        className="font-sans font-bold text-sm sm:text-base tracking-tight"
                      >
                        {currency === "INR" ? service.priceInr : service.priceUsd}
                      </span>
                    </div>

                    {/* Deliverables Checklist with Checkmarks */}
                    <ul className="space-y-2 mb-6 text-xs sm:text-[13px] text-muted-foreground font-sans">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="size-3.5 text-foreground shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Get Started Button */}
                  <button
                    type="button"
                    data-cal-namespace={service.calNamespace}
                    data-cal-link={service.calLink}
                    data-cal-config={service.calConfig}
                    onClick={() => {
                      if (!service.calLink) {
                        handleSelectService(service);
                      }
                    }}
                    className={cn(
                      "w-full py-2 px-4 rounded-sm border text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer mt-auto",
                      isPopular
                        ? "bg-foreground text-background hover:bg-foreground/90 font-semibold"
                        : "border-border/90 bg-card hover:bg-muted text-foreground"
                    )}
                  >
                    <span>Get started</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              );
            })}

            {/* Full-width "Custom Idea and design" Row (same height style) */}
            <div className="md:col-span-3 bg-background p-5 sm:p-6 lg:p-7 select-text group/custom">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
                {/* Left Side: Header, Title, Description & Price */}
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="size-9 sm:size-10 rounded-sm sm:rounded-md border border-border/80 bg-muted/30 flex items-center justify-center shrink-0 text-foreground">
                      <Sparkles className="size-4 sm:size-4.5" />
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded border border-border/80 bg-muted/40 font-mono text-[10px] tracking-wider text-muted-foreground uppercase font-medium select-none">
                      TAILORED SCOPE
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-base sm:text-xl text-foreground tracking-tight mb-2">
                    Custom Idea & Design
                  </h3>

                  <p className="font-sans text-xs sm:text-[13px] text-muted-foreground leading-relaxed mb-4 max-w-lg">
                    Have a unique product vision, custom SaaS architecture, complex API ecosystem, or bespoke digital experience? Let&apos;s collaborate from concept to launch with tailored milestones and fixed pricing.
                  </p>

                  <div className="w-fit border border-border/80 bg-muted/20 dark:bg-neutral-900/40 px-3.5 py-1.5 flex items-center gap-3 rounded-sm">
                    <span className="font-mono text-xs text-muted-foreground select-none">
                      Scope based
                    </span>
                    <div className="h-3.5 w-px bg-border" />
                    <span className="font-sans font-bold text-sm sm:text-base text-foreground tracking-tight">
                      Custom Quote
                    </span>
                  </div>
                </div>

                {/* Right Side: Deliverables & CTA */}
                <div className="flex flex-col justify-between h-full pt-1 sm:pt-0">
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-[13px] text-muted-foreground font-sans">
                    <li className="flex items-start gap-2">
                      <Check className="size-3.5 text-foreground shrink-0 mt-0.5" />
                      <span className="leading-tight">
                        Bespoke UI/UX design & component architecture tailored to your brand
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-3.5 text-foreground shrink-0 mt-0.5" />
                      <span className="leading-tight">
                        Custom integrations (AI workflows, Auth, Databases, Stripe/Razorpay)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-3.5 text-foreground shrink-0 mt-0.5" />
                      <span className="leading-tight">
                        Flexible milestone sprints, code reviews & dedicated warranty support
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    data-cal-namespace="meet"
                    data-cal-link="gyanranjanpriyam/meet"
                    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                    className="w-full sm:w-auto self-start py-2 px-5 rounded-sm border border-border/90 bg-card hover:bg-foreground hover:text-background text-foreground text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Discuss your project</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Tech Stack Box Grid Section */}
            <div className="md:col-span-3 bg-background border-t border-border">
              <TechStackGrid />
            </div>
          </div>
        </div>

        {/* Blueprint Hatched Stripe Divider connected directly to tech showcase */}
        <SectionDivider className="mt-0 -mt-px mb-8 sm:mb-12" />
      </BlurFade>

      {/* -------------------------------------------------------------------- */}
      {/* 3. Add-ons Section                                                   */}
      {/* -------------------------------------------------------------------- */}
      <BlurFade delay={0.2}>
        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-1">
            <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-foreground">
              Add ons
            </h2>
            <span className="text-xs font-mono font-medium text-muted-foreground/70">
              ({ADDONS_DATA.length})
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground font-sans">
            Extend your project with additional services as per your needs.
          </p>
        </div>

        {/* 2-Column Grid Table matching Key Highlights in Project Detail Page */}
        <div className="-mx-4 sm:-mx-6 border-t border-b border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {ADDONS_DATA.map((item, i) => {
              const num = String(i + 1).padStart(2, "0");
              const total = ADDONS_DATA.length;
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
                  key={item.title}
                  className={`group flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 sm:py-4 transition-colors hover:bg-muted/30 border-border ${borderBottomClass} ${borderRightClass}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Minimalist Keycap Badge */}
                    <div className="size-7 shrink-0 rounded-md border border-border/80 bg-muted/40 dark:bg-neutral-900 flex items-center justify-center text-[11px] font-mono font-medium text-muted-foreground group-hover:text-foreground group-hover:border-foreground/40 transition-colors select-none shadow-2xs">
                      {num}
                    </div>

                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0">
                        {item.icon}
                      </span>
                      <span className="font-sans font-medium text-xs sm:text-sm text-foreground truncate">
                        {item.title}
                      </span>
                    </div>
                  </div>

                  <span
                    suppressHydrationWarning
                    className="font-mono text-xs text-muted-foreground shrink-0 ml-3"
                  >
                    {currency === "INR" ? item.priceInr : item.priceUsd}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </BlurFade>

      {/* Blueprint Hatched Stripe Divider */}
      <SectionDivider className="my-6 sm:my-8" />

      {/* -------------------------------------------------------------------- */}
      {/* 4. How It Works Section                                              */}
      {/* -------------------------------------------------------------------- */}
      <BlurFade delay={0.24}>
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-foreground mb-1">
            How it works
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-sans">
            A simple and transparent process to turn your idea into a working product.
          </p>
        </div>

        {/* 4 Cards Grid with Separators */}
        <div className="-mx-4 sm:-mx-6 border-y border-border">
          {/* 4-Column Grid with 1px Separators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {PROCESS_STEPS.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-background p-5 sm:p-6 lg:p-7 flex flex-col justify-between select-text group/card"
                >
                  <div>
                    {/* Top Row: Icon Container on Left, Technical Badge on Right */}
                    <div className="flex items-center justify-between gap-3 mb-6 sm:mb-8">
                      <div className="size-9 sm:size-10 rounded-sm sm:rounded-md border flex items-center justify-center shrink-0">
                        <StepIcon className="size-4 sm:size-4.5" />
                      </div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded border border-border/80 bg-muted/40 font-mono text-[10px] tracking-wider text-muted-foreground uppercase font-medium select-none">
                        {step.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans font-bold text-sm sm:text-base text-foreground tracking-tight mb-2 sm:mb-2.5">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Footer: Monospace Pillar / Step Tag */}
                  <div className="mt-8 sm:mt-10 pt-4 flex items-center">
                    <span className="font-mono text-xs text-muted-foreground/80 tracking-tight select-none">
                      {step.footer}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BlurFade>

      {/* Blueprint Hatched Stripe Divider */}
      <SectionDivider />

      {/* -------------------------------------------------------------------- */}
      {/* 6. Have Something in Mind? (CTA Section)                             */}
      {/* -------------------------------------------------------------------- */}
      <BlurFade delay={0.32}>
        <ContactSection />
      </BlurFade>
    </div>
  );
}

export default ServicesClient;

