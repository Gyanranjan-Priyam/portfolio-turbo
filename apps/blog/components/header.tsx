"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { SoundToggle } from "./ui/sound";
import { PlusCross } from "./ui/plus-cross";
import { AUTHOR_PORTFOLIO } from "@/lib/consts";

interface NavEntry {
  title: string;
  href?: string;
  external?: boolean;
  items?: {
    title: string;
    href: string;
    description?: string;
    external?: boolean;
  }[];
}

const mainNav: NavEntry[] = [
  { title: "Home", href: "/", external: false },
  {
    title: "Works",
    items: [
      {
        title: "Projects",
        href: `${AUTHOR_PORTFOLIO}/projects`,
        description: "Case studies & builds",
        external: true,
      },
      {
        title: "Templates",
        href: `${AUTHOR_PORTFOLIO}/templates`,
        description: "Starters & boilerplates",
        external: true,
      },
    ],
  },
  { title: "Services", href: `${AUTHOR_PORTFOLIO}/services`, external: true },
  { title: "Blog", href: "/", external: false },
  { title: "Resume", href: `${AUTHOR_PORTFOLIO}/resume`, external: true },
];


export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [worksOpen, setWorksOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setWorksOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setWorksOpen(false);
    }, 150);
  };

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setWorksOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setWorksOpen(false);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [mobileMenuOpen]);

  const isCurrentPath = (item: {
    title: string;
    href?: string;
    external?: boolean;
  }) => {
    if (!item.href || item.external) return false;
    if (item.title === "Home") {
      return pathname === "/";
    }
    if (item.title === "Blog") {
      return (
        pathname.startsWith("/tags") ||
        (pathname !== "/" && pathname !== "/about")
      );
    }
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(item.href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="relative border-x border-border mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
        {/* Plus markers at navbar bottom border intersection */}
        <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
          <PlusCross />
        </div>
        <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
          <PlusCross />
        </div>
        {/* Left: Monogram logo */}
        <a
          href={AUTHOR_PORTFOLIO}
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
          aria-label="Gyanranjan Priyam — Home"
        >
          <img
            src="/logo.png"
            alt="Gyanranjan Priyam"
            width={32}
            height={32}
            className="rounded-full w-8 h-8 object-cover"
          />
        </a>

        {/* Right: Nav items, Separator, Theme toggle */}
        <div className="flex items-center gap-2 sm:gap-3 h-full">
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-1.5 sm:gap-2 font-sans h-full">
            {mainNav.map((item) => {
              if (item.items && item.items.length > 0) {
                return (
                  <div
                    key={item.title}
                    ref={dropdownRef}
                    className="relative h-14 flex items-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setWorksOpen((prev) => !prev)}
                      className={`group relative inline-flex items-center gap-1 px-2.5 py-1 text-[14px] font-normal tracking-tight transition-colors hover:text-foreground cursor-pointer focus:outline-none select-none ${
                        worksOpen ? "text-foreground font-medium" : "text-muted-foreground"
                      }`}
                      aria-expanded={worksOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`size-3.5 transition-transform duration-200 text-muted-foreground group-hover:text-foreground ${
                          worksOpen ? "rotate-180 text-foreground" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full -mt-px z-50 transition-all duration-150 ${
                        worksOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div className="relative w-60 rounded-none border border-border bg-background/95 backdrop-blur-md shadow-2xl select-none">

                        {/* Header Bar */}
                        <div className="px-3.5 py-1.5 border-b border-border bg-muted/20 flex items-center justify-between select-none">
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                            // Works
                          </span>
                          <span className="font-mono text-[10px] text-muted-foreground/60">
                            [0{item.items.length}]
                          </span>
                        </div>

                        {/* Dropdown Items */}
                        <div className="divide-y divide-border/60">
                          {item.items.map((sub, index) => (
                            <a
                              key={sub.href}
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setWorksOpen(false)}
                              className="group relative flex items-start gap-3 px-3.5 py-2.5 transition-colors rounded-none hover:bg-muted/40 select-none"
                            >
                              <span className="font-mono text-[11px] font-medium text-muted-foreground/60 group-hover:text-foreground pt-0.5 select-none transition-colors">
                                0{index + 1}
                              </span>
                              <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="font-sans font-semibold text-[13px] tracking-tight text-foreground">
                                    {sub.title}
                                  </span>
                                  <span className="font-mono text-xs text-muted-foreground/60 group-hover:text-foreground group-hover:translate-x-0.5 transition-all">
                                    →
                                  </span>
                                </div>
                                {sub.description && (
                                  <span className="font-mono text-[11px] font-medium text-muted-foreground leading-snug">
                                    {sub.description}
                                  </span>
                                )}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              const active = isCurrentPath(item);
              if (item.external) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-2.5 py-1 text-[14px] tracking-tight text-muted-foreground font-normal transition-colors hover:text-foreground select-none"
                  >
                    <span>{item.title}</span>
                  </a>
                );
              }
              return (
                <Link
                  key={item.title}
                  href={item.href || "/"}
                  aria-current={active ? "page" : undefined}
                  className={`group relative inline-flex items-center justify-center px-2.5 py-1 text-[14px] tracking-tight transition-colors hover:text-foreground select-none ${
                    active
                      ? "text-foreground font-medium"
                      : "text-muted-foreground font-normal"
                  }`}
                >
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation Dropdown */}
          <div className="sm:hidden relative">
            <button
              ref={triggerRef}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="group relative flex h-8 w-8 touch-manipulation flex-col items-center justify-center gap-1 border-none p-0 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 rounded-none transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`flex h-0.5 w-3.5 transform rounded-[1px] bg-foreground transition-transform duration-200 ${
                  mobileMenuOpen ? "translate-y-0.75 rotate-45" : ""
                }`}
              />
              <span
                className={`flex h-0.5 w-3.5 transform rounded-[1px] bg-foreground transition-transform duration-200 ${
                  mobileMenuOpen ? "-translate-y-0.75 -rotate-45" : ""
                }`}
              />
            </button>

            {mobileMenuOpen && (
              <div
                ref={menuRef}
                className="absolute right-0 top-full mt-2 w-56 rounded-none border border-border bg-background/95 backdrop-blur-md shadow-2xl z-50 flex flex-col"
              >
                {mainNav.map((link) => {
                  if (link.items && link.items.length > 0) {
                    return (
                      <div key={link.title} className="flex flex-col gap-0.5 pt-1.5 pb-1">
                        <span className="px-3.5 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/70 font-semibold">
                          // {link.title}
                        </span>
                        <div className="pl-2 flex flex-col divide-y divide-border/40 ml-3.5 border-l border-border/60">
                          {link.items.map((sub, index) => (
                            <a
                              key={sub.href}
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-2.5 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors flex items-center justify-between"
                            >
                              <span className="font-sans font-medium text-foreground">
                                {sub.title}
                              </span>
                              <span className="font-mono text-[10px] text-muted-foreground/60">
                                0{index + 1}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  const active = isCurrentPath(link);
                  if (link.external) {
                    return (
                      <a
                        key={link.title}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-3.5 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                      >
                        {link.title}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={link.title}
                      href={link.href || "/"}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3.5 py-2 text-xs font-medium transition-colors ${
                        active
                          ? "bg-muted/40 text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                      }`}
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Vertical Solid Separator */}
          <div className="h-4 w-px bg-border self-center" />

          {/* Sound Toggle Button */}
          <SoundToggle />

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
