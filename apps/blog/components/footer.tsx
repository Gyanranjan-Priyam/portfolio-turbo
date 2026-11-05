import * as React from "react";
import Link from "next/link";
import { AUTHOR_PORTFOLIO } from "@/lib/consts";
import { GitHubIcon, GmailIcon, InstagramIcon, LinkedInIcon, XIcon } from "./footer-icons";
import { FooterBrand } from "./footer-brand";
import { PlusCross } from "./ui/plus-cross";
import { LocalTime } from "./local-time";
import { cn } from "@/lib/utils";

export interface NavLinkItem {
  title: string;
  href?: string;
  external?: boolean;
}

export interface LatestPostItem {
  title: string;
  href: string;
  external?: boolean;
}

const exploreLinks: NavLinkItem[] = [
  { title: "About", href: `${AUTHOR_PORTFOLIO}/#about`, external: true },
  { title: "Projects", href: `${AUTHOR_PORTFOLIO}/projects`, external: true },
  {
    title: "Experience",
    href: `${AUTHOR_PORTFOLIO}/#experience`,
    external: true,
  },
  { title: "Skills", href: `${AUTHOR_PORTFOLIO}/#skills`, external: true },
  {
    title: "Certifications",
    href: `${AUTHOR_PORTFOLIO}/#education`,
    external: true,
  },
];

const productLinks: NavLinkItem[] = [{ title: "Building..." }];

const resourceLinks: NavLinkItem[] = [
  { title: "Blog", href: "/", external: false },
  { title: "Templates", href: `${AUTHOR_PORTFOLIO}/templates`, external: true },
  {
    title: "Resume",
    href: `${AUTHOR_PORTFOLIO}/resume`,
    external: true,
  },
  {
    title: "Source Code",
    href: "https://github.com/Gyanranjan-Priyam/portfolio-turbo",
    external: true,
  },
  { title: "llms.txt", href: "/llms.txt", external: true },
];

const connectLinks: NavLinkItem[] = [
  { title: "Email", href: "mailto:hello@priyam.tech", external: true },
  {
    title: "GitHub",
    href: "https://github.com/gyanranjan-priyam",
    external: true,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/gyanranjan-priyam",
    external: true,
  },
  { title: "X", href: "https://x.com/gr_priyam", external: true },
  {
    title: "Instagram",
    href: "https://instagram.com/gyanranjanpriyam",
    external: true,
  },
];

const DEFAULT_LATEST_WRITING: LatestPostItem[] = [
  {
    title:
      "My Role in HackVerse '26: Organising, Managing & Building the Hackathon",
    href: "/my-role-in-hackverse-26-organising-managing-and-building-the-hackathon",
  },
  {
    title:
      "Securing 1st Position in SIH Internal Round & Problem Statement Journey",
    href: "/securing-1st-position-in-sih-internal-round-and-our-problem-statement-journey",
  },
];

export interface FooterProps {
  latestWriting?: LatestPostItem[];
  className?: string;
}

export function Footer({
  latestWriting = DEFAULT_LATEST_WRITING,
  className,
}: FooterProps = {}) {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={cn(
        "w-full max-w-screen flex flex-col justify-between overflow-x-clip",
        className,
      )}
    >
      <div className="w-full flex flex-col">
        {/* Top diagonal stripe divider - FULL SCREEN WIDTH */}
        <div className="w-full border-t border-b border-border relative">
          <div className="stripe-divider h-7 sm:h-8 w-full" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="mx-auto max-w-4xl h-full relative">
              <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <PlusCross />
              </div>
              <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <PlusCross />
              </div>
              <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
                <PlusCross />
              </div>
              <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
                <PlusCross />
              </div>
            </div>
          </div>
        </div>

        {/* Title & Quote block - FULL WIDTH HORIZONTAL LINE */}
        <div className="w-full border-b border-border">
          <div className="relative mx-auto border-x border-border max-w-4xl flex flex-col sm:flex-row sm:items-center justify-between gap-x-6 gap-y-2 px-4 sm:px-6 py-4 sm:py-5">
            <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
              <PlusCross />
            </div>
            <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
              <PlusCross />
            </div>
            <span className="font-caveat font-semibold text-xl sm:text-2xl text-foreground tracking-wide leading-none shrink-0">
              Gyanranjan Priyam
            </span>
            <p className="font-serif italic text-xs sm:text-[13px] text-muted-foreground sm:text-right leading-relaxed m-0 sm:max-w-[65%]">
              &ldquo;There is still so much I don’t know, and that is exactly
              what keeps me moving.&rdquo;
            </p>
          </div>
        </div>

        {/* Explore, Product, Resources & Connect 4-Column Grid - FULL WIDTH */}
        <div className="w-full border-b border-border">
          <div className="relative mx-auto border-x border-border max-w-4xl">
            <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
              <PlusCross />
            </div>
            <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
              <PlusCross />
            </div>
            <dl className="grid grid-cols-2 gap-px bg-border font-mono font-medium md:grid-cols-4">
              <Field label="Explore">
                <ul className="flex flex-col gap-2 text-xs sm:text-[13px] text-muted-foreground">
                  {exploreLinks.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href || "/"}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="hover:underline underline-offset-4 hover:text-foreground transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Field>

              <Field label="Product">
                <ul className="flex flex-col gap-2 text-xs sm:text-[13px] text-muted-foreground">
                  {productLinks.map((item) => (
                    <li key={item.title} className="flex items-center gap-2">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="hover:underline underline-offset-4 hover:text-foreground transition-colors"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <span className="text-foreground/90 flex items-center gap-1.5">
                          <span className="inline-block size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{item.title}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </Field>

              <Field label="Resources">
                <ul className="flex flex-col gap-2 text-xs sm:text-[13px] text-muted-foreground">
                  {resourceLinks.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href || "/"}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="hover:underline underline-offset-4 hover:text-foreground transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Field>

              <Field label="Connect">
                <ul className="flex flex-col gap-2 text-xs sm:text-[13px] text-muted-foreground">
                  {connectLinks.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="hover:underline underline-offset-4 hover:text-foreground transition-colors"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Field>
            </dl>
          </div>
        </div>

        {/* Latest Writing & Location Grid - FULL WIDTH */}
        <div className="w-full border-b border-border">
          <div className="relative mx-auto border-x border-border max-w-4xl">
            <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
              <PlusCross />
            </div>
            <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
              <PlusCross />
            </div>
            <dl className="grid grid-cols-1 gap-px bg-border font-mono font-medium sm:grid-cols-4">
              <Field className="sm:col-span-3" label="Latest Writing">
                <ul className="flex flex-col gap-2 text-xs sm:text-[13px] text-muted-foreground">
                  {latestWriting.map((item) => (
                    <li key={item.title} className="truncate">
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="hover:underline underline-offset-4 hover:text-foreground transition-colors truncate block text-foreground/90 font-sans"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Field>

              <Field className="sm:col-span-1" label="Location">
                <LocalTime />
              </Field>
            </dl>
          </div>
        </div>

        {/* Bottom Status Bar - FULL WIDTH */}
        <div className="w-full border-b border-border">
          <div className="relative mx-auto border-x border-border max-w-4xl flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 sm:py-4 text-muted-foreground">
            <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
              <PlusCross />
            </div>
            <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
              <PlusCross />
            </div>
            
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <span className="font-mono font-medium text-xs text-muted-foreground" suppressHydrationWarning>
                © {currentYear} Gyanranjan Priyam<span className="hidden sm:inline">. All rights reserved.</span>
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-3.5">
              <a
                className="flex items-center text-foreground/80 hover:text-foreground transition-all duration-200 hover:scale-110 active:scale-95"
                href="https://github.com/gyanranjan-priyam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="size-4" />
              </a>

              <div className="h-4 w-px bg-border" />

              <a
                className="flex items-center transition-all duration-200 hover:scale-110 active:scale-95"
                href="https://linkedin.com/in/gyanranjan-priyam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="size-4" />
              </a>

              <div className="h-4 w-px bg-border" />

              <a
                className="flex items-center text-foreground/80 hover:text-foreground transition-all duration-200 hover:scale-110 active:scale-95"
                href="https://x.com/gr_priyam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X Profile"
              >
                <XIcon className="size-4" />
              </a>

              <div className="h-4 w-px bg-border" />

              <a
                className="flex items-center transition-all duration-200 hover:scale-110 active:scale-95"
                href="mailto:hello@priyam.tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <GmailIcon className="size-4" />
              </a>

              <div className="h-4 w-px bg-border" />

              <a
                className="flex items-center transition-all duration-200 hover:scale-110 active:scale-95"
                href="https://instagram.com/gyanranjanpriyam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Bottom Logotype */}
      <FooterBrand />
    </footer>
  );
}

function Field({
  className,
  label,
  children,
}: {
  className?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-2 bg-background px-4 sm:px-6 py-4 sm:py-5",
        className,
      )}
    >
      <dt className="text-[0.625rem]/4 font-semibold tracking-wider text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="text-xs sm:text-[13px] text-foreground leading-relaxed">
        {children}
      </dd>
    </div>
  );
}

export const SiteFooter = Footer;
