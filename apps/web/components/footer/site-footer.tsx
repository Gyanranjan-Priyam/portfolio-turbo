import * as React from "react"
import Link from "next/link"

import { GitHubIcon, GmailIcon, LinkedInIcon, XIcon } from "./footer-icons"
import { DEFAULT_FOOTER_CONFIG, type FooterConfig } from "./footer-data"
import { SiteFooterInteractiveLogotype } from "./site-footer-brand"
import { LocalTime } from "./local-time"
import { cn } from "@/lib/utils"

export interface SiteFooterProps {
  config?: Partial<FooterConfig>
  className?: string
}

export function SiteFooter({ config: customConfig, className }: SiteFooterProps) {
  const config: FooterConfig = {
    ...DEFAULT_FOOTER_CONFIG,
    ...customConfig,
  }

  return (
    <footer className={cn("w-full max-w-screen flex flex-col justify-between overflow-x-clip", className)}>
      <div className="w-full flex flex-col">
        {/* Top diagonal stripe divider - FULL SCREEN WIDTH */}
        <div className="w-full border-t border-b border-border">
          <div className="stripe-divider h-7 sm:h-8 w-full" />
        </div>

        {/* Title & Quote block - FULL WIDTH HORIZONTAL LINE */}
        <div className="w-full border-b border-border">
          <div className="mx-auto border-x border-border max-w-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-x-6 gap-y-2 px-4 sm:px-6 py-4 sm:py-5">
            <span className="font-caveat font-semibold text-xl sm:text-2xl text-foreground tracking-wide leading-none shrink-0">
              {config.siteTitle}
            </span>
            <p className="font-serif italic text-xs sm:text-[13px] text-muted-foreground sm:text-right leading-relaxed m-0 sm:max-w-[65%]">
              &ldquo;{config.siteSubtitle.replace(/^["“]|["”]$/g, '')}&rdquo;
            </p>
          </div>
        </div>

        {/* Explore, Product, Resources & Connect 4-Column Grid - FULL WIDTH */}
        <div className="w-full border-b border-border">
          <div className="mx-auto border-x border-border max-w-3xl">
            <dl className="grid grid-cols-2 gap-px bg-border font-mono md:grid-cols-4">
              <Field label="Explore">
                <ul className="flex flex-col gap-2 text-xs sm:text-[13px] text-muted-foreground">
                  {config.exploreLinks.map((item) => (
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
                  {config.productLinks.map((item) => (
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
                  {config.resourceLinks.map((item) => (
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
                  {config.connectLinks.map((item) => (
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
          <div className="mx-auto border-x border-border max-w-3xl">
            <dl className="grid grid-cols-1 gap-px bg-border font-mono sm:grid-cols-4">
              <Field className="sm:col-span-3" label="Latest Writing">
                <ul className="flex flex-col gap-2 text-xs sm:text-[13px] text-muted-foreground">
                  {config.latestWriting.map((item) => (
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
          <div className="mx-auto border-x border-border max-w-3xl flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 sm:py-4 text-muted-foreground">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-foreground flex items-center gap-2"
              aria-label="Home"
            >
              <span className="font-mono text-sm sm:text-base font-semibold tracking-tight text-foreground">priyam.tech</span>
            </Link>

            <div className="flex items-center gap-3.5">
              <a
                className="flex items-center transition-colors hover:text-foreground"
                href={config.socialLinks.email}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <GmailIcon className="size-4" />
              </a>
              <div className="h-4 w-px bg-border" />

              <a
                className="flex items-center transition-colors hover:text-foreground"
                href={config.socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X Profile"
              >
                <XIcon className="size-4" />
              </a>

              <div className="h-4 w-px bg-border" />

              <a
                className="flex items-center transition-colors hover:text-foreground"
                href={config.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="size-4" />
              </a>

              <div className="h-4 w-px bg-border" />

              <a
                className="flex items-center transition-colors hover:text-foreground"
                href={config.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Bottom Logotype - SLEEK COMPACT BOTTOM ACCENT */}
      <div className="w-full shrink-0">
        <SiteFooterInteractiveLogotype />
        <div className="h-4 pb-[env(safe-area-inset-bottom,0)]" />
      </div>
    </footer>
  )
}


function Field({
  className,
  label,
  children,
}: {
  className?: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-2 bg-background px-4 sm:px-6 py-4 sm:py-5",
        className
      )}
    >
      <dt className="text-[0.625rem]/4 font-semibold tracking-wider text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="text-xs sm:text-[13px] text-foreground leading-relaxed">{children}</dd>
    </div>
  )
}

export const Footer = SiteFooter
