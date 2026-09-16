"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { useLoaderStore } from "@/components/loader-component";
import {
  ExpandableTabs,
  type ExpandableTabsItem,
  useExpandableTabs,
} from "@/components/motion/expandable-tabs";
import { useThemeToggle } from "@/components/motion/theme-toggle";
import { ActionSwapIcon } from "@/components/motion/action-swap";
import {
  IconHome,
  IconBriefcase,
  IconNotebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconCompass,
  IconDownload,
  IconCopy,
  IconCheck,
  IconExternalLink,
  IconMoon,
  IconSun,
  IconArrowUp,
  IconShare,
  IconCode,
  IconStack2,
  IconFolderCode,
  IconTemplate,
  IconAdjustments,
} from "@tabler/icons-react";
import projects from "@/data/projectsData";
import templates from "@/data/templateData";
import { BLOG_URL } from "@/lib/config";

const EMAIL_ADDRESS = "info@priyam.tech";

/* -------------------------------------------------------------------------- */
/* 1. Explore / Navigation Panel                                              */
/* -------------------------------------------------------------------------- */
function NavigationPanel() {
  const { close } = useExpandableTabs();
  const pathname = usePathname();

  const navLinks = [
    {
      title: "Home",
      description: "Overview & summary",
      href: "/",
      icon: <IconHome className="h-4 w-4" />,
      active: pathname === "/",
    },
    {
      title: "Projects",
      description: `${projects.length}+ production builds`,
      href: "/projects",
      badge: `${projects.length}`,
      icon: <IconBriefcase className="h-4 w-4" />,
      active: pathname.startsWith("/projects"),
    },
    {
      title: "Templates",
      description: `${templates.length}+ starter kits`,
      href: "/templates",
      badge: `${templates.length}`,
      icon: <IconTemplate className="h-4 w-4" />,
      active: pathname.startsWith("/templates"),
    },
    {
      title: "Blog",
      description: "Articles & deep dives",
      href: BLOG_URL,
      external: true,
      icon: <IconNotebook className="h-4 w-4" />,
      active: false,
    },
    {
      title: "Experience",
      description: "Career & background",
      href: "/#experience",
      icon: <IconStack2 className="h-4 w-4" />,
      active: false,
    },
    {
      title: "Resume",
      description: "Download PDF document",
      href: "/resume/resume.pdf",
      badge: "PDF",
      external: true,
      icon: <IconDownload className="h-4 w-4" />,
      active: false,
    },
  ];

  return (
    <div className="w-[290px] sm:w-[340px]">
      <div className="flex items-center justify-between pt-1 pb-2 mb-2 border-b border-border/60">
        <h3 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
          Navigation
        </h3>
        <span className="text-[10px] font-mono text-muted-foreground">
          Index
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
        {navLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            onClick={() => close()}
            className={`group flex items-center gap-2 rounded-lg p-2 transition-colors cursor-pointer border ${
              link.active
                ? "bg-neutral-100 dark:bg-neutral-800/80 border-neutral-300 dark:border-neutral-700 text-foreground font-medium"
                : "bg-transparent hover:bg-neutral-100/70 dark:hover:bg-neutral-900/60 border-transparent hover:border-border/60 text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background/80 text-foreground/80">
              {link.icon}
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium truncate">
                  {link.title}
                </span>
                {link.badge && (
                  <span className="rounded bg-neutral-200/60 dark:bg-neutral-800 px-1 py-0.2 text-[8.5px] font-mono text-muted-foreground">
                    {link.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-muted-foreground truncate">
                {link.description}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Projects Panel                                                          */
/* -------------------------------------------------------------------------- */
function ProjectsPanel() {
  const { close } = useExpandableTabs();
  const featured = projects.slice(0, 3);

  return (
    <div className="w-[295px] sm:w-[345px]">
      <div className="flex items-center justify-between pt-1 pb-2 mb-2 border-b border-border/60">
        <h3 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
          Selected Projects
        </h3>
        <Link
          href="/projects"
          onClick={() => close()}
          className="text-[11px] font-mono text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors cursor-pointer"
        >
          View all ({projects.length})
          <IconExternalLink className="h-3 w-3" />
        </Link>
      </div>

      <div className="flex flex-col gap-1.5">
        {featured.map((p) => (
          <Link
            key={p.id}
            href={p.link}
            onClick={() => close()}
            className="group flex items-start gap-2.5 rounded-lg p-2 transition-colors border border-transparent hover:border-border/60 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/60 cursor-pointer"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background/80 text-foreground/80 mt-0.5">
              <IconFolderCode className="h-3.5 w-3.5" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-medium text-foreground truncate group-hover:text-primary transition-colors">
                  {p.title}
                </span>
                <span className="text-[9.5px] font-mono text-muted-foreground shrink-0">
                  {p.date}
                </span>
              </div>
              <p className="text-[10.5px] text-muted-foreground line-clamp-1 mt-0.5">
                {Array.isArray(p.desc) ? p.desc[0] : p.desc}
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {p.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded bg-neutral-200/60 dark:bg-neutral-800 px-1.5 py-0.5 text-[8.5px] font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. Templates Panel                                                         */
/* -------------------------------------------------------------------------- */
function TemplatesPanel() {
  const { close } = useExpandableTabs();

  return (
    <div className="w-[295px] sm:w-[345px]">
      <div className="flex items-center justify-between pt-1 pb-2 mb-2 border-b border-border/60">
        <h3 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
          Templates & Starters
        </h3>
        <Link
          href="/templates"
          onClick={() => close()}
          className="text-[11px] font-mono text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors cursor-pointer"
        >
          View all ({templates.length})
          <IconExternalLink className="h-3 w-3" />
        </Link>
      </div>

      <div className="flex flex-col gap-1.5">
        {templates.map((t) => (
          <Link
            key={t.id}
            href={t.link}
            onClick={() => close()}
            className="group flex items-start gap-2.5 rounded-lg p-2 transition-colors border border-transparent hover:border-border/60 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/60 cursor-pointer"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background/80 text-foreground/80 mt-0.5">
              <IconTemplate className="h-3.5 w-3.5" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-medium text-foreground truncate group-hover:text-primary transition-colors">
                  {t.title}
                </span>
                <span className="text-[9.5px] font-mono text-muted-foreground shrink-0">
                  {t.category}
                </span>
              </div>
              <p className="text-[10.5px] text-muted-foreground line-clamp-1 mt-0.5">
                {Array.isArray(t.desc) ? t.desc[0] : t.desc}
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {t.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-neutral-200/60 dark:bg-neutral-800 px-1.5 py-0.5 text-[8.5px] font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. Blog Panel                                                              */
/* -------------------------------------------------------------------------- */
function BlogsPanel() {
  const { close } = useExpandableTabs();

  const blogCategories = [
    {
      title: "Engineering",
      desc: "Next.js 16, React 19, Architecture & Web Performance",
      href: `${BLOG_URL}/tags/Engineering`,
      icon: <IconCode className="h-3.5 w-3.5" />,
      tag: "Deep Dive",
    },
    {
      title: "Security & CVEs",
      desc: "CVE breakdowns, data breaches & cloud security",
      href: `${BLOG_URL}/tags/Security`,
      icon: <IconStack2 className="h-3.5 w-3.5" />,
      tag: "Security",
    },
    {
      title: "Career & Journey",
      desc: "Student developer essays & leadership insights",
      href: `${BLOG_URL}/tags/Career`,
      icon: <IconFolderCode className="h-3.5 w-3.5" />,
      tag: "Stories",
    },
  ];

  return (
    <div className="w-[290px] sm:w-[340px]">
      <div className="flex items-center justify-between pt-1 pb-2 mb-2 border-b border-border/60">
        <h3 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
          Blog Topics
        </h3>
        <a
          href={BLOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => close()}
          className="text-[11px] font-mono text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors cursor-pointer"
        >
          All posts
          <IconExternalLink className="h-3 w-3" />
        </a>
      </div>

      <div className="flex flex-col gap-1.5">
        {blogCategories.map((b) => (
          <a
            key={b.title}
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => close()}
            className="group flex items-center justify-between rounded-lg p-2 transition-colors border border-transparent hover:border-border/60 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/60 cursor-pointer"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background/80 text-foreground/80">
                {b.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-medium text-foreground truncate group-hover:text-primary transition-colors">
                    {b.title}
                  </span>
                  <span className="rounded bg-neutral-200/60 dark:bg-neutral-800 px-1 py-0.2 text-[8.5px] font-mono text-muted-foreground">
                    {b.tag}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground truncate">
                  {b.desc}
                </span>
              </div>
            </div>
            <IconExternalLink className="h-3 w-3 text-muted-foreground/60 shrink-0 ml-1" />
          </a>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-1.5 pt-2 mt-2 border-t border-border/60">
        <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mr-0.5">
          Popular:
        </span>
        {["Career", "Learning", "Personal", "Engineering", "Security"].map((tag) => (
          <a
            key={tag}
            href={`${BLOG_URL}/tags/${encodeURIComponent(tag)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => close()}
            className="rounded-md bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer border border-border/50"
          >
            #{tag}
          </a>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. Contact & Profiles Panel                                                */
/* -------------------------------------------------------------------------- */
function SocialsPanel() {
  const [copied, setCopied] = useState(false);

  const socials = [
    {
      title: "GitHub",
      handle: "gyanranjan-priyam",
      href: "https://github.com/gyanranjan-priyam",
      icon: <IconBrandGithub className="h-3.5 w-3.5" />,
    },
    {
      title: "LinkedIn",
      handle: "gyanranjan-priyam",
      href: "https://linkedin.com/in/gyanranjan-priyam",
      icon: <IconBrandLinkedin className="h-3.5 w-3.5" />,
    },
    {
      title: "Instagram",
      handle: "gyanranjanpriyam",
      href: "https://instagram.com/gyanranjanpriyam",
      icon: <IconBrandInstagram className="h-3.5 w-3.5" />,
    },
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      toast.success("Email copied to clipboard", {
        description: EMAIL_ADDRESS,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy email");
    }
  };

  return (
    <div className="w-[280px] sm:w-[310px]">
      <div className="flex items-center justify-between pt-1 pb-2 mb-2 border-b border-border/60">
        <h3 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
          Contact & Profiles
        </h3>
        <span className="text-[10px] font-mono text-muted-foreground">
          Direct
        </span>
      </div>

      <div className="grid grid-cols-1 gap-1 mb-2">
        {socials.map((s) => (
          <a
            key={s.title}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg p-2 transition-colors border border-transparent hover:border-border/60 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/60 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md border border-border/60 bg-background/80 text-foreground/80">
                {s.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-foreground">
                  {s.title}
                </span>
                <span className="text-[9.5px] font-mono text-muted-foreground">
                  {s.handle}
                </span>
              </div>
            </div>
            <IconExternalLink className="h-3 w-3 text-muted-foreground/60" />
          </a>
        ))}
      </div>

      {/* Email Box */}
      <div className="flex items-center justify-between gap-1.5 rounded-lg p-2 border border-border/60 bg-neutral-100/50 dark:bg-neutral-900/50">
        <div className="flex items-center gap-1.5 min-w-0">
          <IconMail className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
          <span className="text-[11px] font-mono truncate text-foreground">
            {EMAIL_ADDRESS}
          </span>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={handleCopyEmail}
            title="Copy email"
            className="flex h-6 w-6 items-center justify-center rounded-md border border-border/60 bg-background/80 hover:bg-background text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            {copied ? (
              <IconCheck className="h-3 w-3 text-foreground" />
            ) : (
              <IconCopy className="h-3 w-3" />
            )}
          </button>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            title="Send email"
            className="flex h-6 px-2 items-center justify-center rounded-md bg-foreground text-background text-[10.5px] font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            Send
          </a>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main NavigationDock Component                                              */
/* -------------------------------------------------------------------------- */
export function NavigationDock() {
  const [hideBar, setHideBar] = useState(false);
  const isLoading = useLoaderStore((s) => s.isLoading);

  const { isDark, mounted, toggle: toggleTheme } = useThemeToggle();

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideBar(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (isLoading) return null;

  const items: ExpandableTabsItem[] = [
    {
      id: "explore",
      label: "Explore",
      tooltip: "Navigation (Home, Resume & Experience)",
      icon: <IconCompass className="h-4 w-4" />,
      content: <NavigationPanel />,
    },
    {
      id: "projects",
      label: "Projects",
      tooltip: "Projects & Production Builds",
      icon: <IconBriefcase className="h-4 w-4" />,
      content: <ProjectsPanel />,
    },
    {
      id: "templates",
      label: "Templates",
      tooltip: "Templates & Starter Kits",
      icon: <IconTemplate className="h-4 w-4" />,
      content: <TemplatesPanel />,
    },
    {
      id: "blog",
      label: "Blog",
      tooltip: "Blog & Technical Articles",
      icon: <IconNotebook className="h-4 w-4" />,
      content: <BlogsPanel />,
    },
    {
      id: "contact",
      label: "Contact",
      tooltip: "Get in Touch & Social Profiles",
      icon: <IconMail className="h-4 w-4" />,
      content: <SocialsPanel />,
    },
    {
      id: "theme",
      label: mounted && isDark ? "Light" : "Dark",
      tooltip: mounted && isDark ? "Switch to Light Mode" : "Switch to Dark Mode",
      icon: mounted ? (
        <ActionSwapIcon
          value={isDark ? "dark" : "light"}
          animation="blur"
          className="h-4 w-4"
        >
          {isDark ? (
            <IconSun className="h-4 w-4" />
          ) : (
            <IconMoon className="h-4 w-4" />
          )}
        </ActionSwapIcon>
      ) : (
        <IconMoon className="h-4 w-4" />
      ),
      onClick: toggleTheme,
    },
  ];

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-50 flex items-end justify-center px-3 transition-all duration-300 ease-out md:bottom-6 ${
        hideBar
          ? "translate-y-12 opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      }`}
    >
      <ExpandableTabs items={items} />
    </div>
  );
}
