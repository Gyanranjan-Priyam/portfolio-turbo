"use client";

import React, { useEffect, useRef, useState } from "react";
import type { Route } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import type { NavItem as NavItemType } from "@/types/nav";
import { cn } from "@/lib/utils";
import { PlusCross } from "@/components/ui/plus-cross";

export function Nav({
  items,
  activeId,
  className,
  exactMatch = false,
}: {
  items: NavItemType<Route>[];
  activeId?: string;
  className?: string;
  exactMatch?: boolean;
}) {
  const [worksOpen, setWorksOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setWorksOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setWorksOpen(false);
    }, 150);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWorksOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setWorksOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav
      data-active-id={activeId}
      className={cn("flex items-center gap-1.5 sm:gap-2 h-full", className)}
    >
      {items.map((item) => {
        // Dropdown item (Works)
        if (item.items && item.items.length > 0) {
          const isChildActive = item.items.some((sub) =>
            activeId?.startsWith(sub.href)
          );

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
                className={cn(
                  "group inline-flex items-center gap-1 text-[14px] font-normal tracking-tight text-muted-foreground transition-colors hover:text-foreground cursor-pointer focus:outline-none select-none",
                  (isChildActive || worksOpen) && "text-foreground font-medium"
                )}
                aria-expanded={worksOpen}
                aria-haspopup="true"
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform duration-200 text-muted-foreground group-hover:text-foreground",
                    worksOpen && "rotate-180 text-foreground"
                  )}
                />
              </button>

              <div
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 top-full -mt-px z-50 transition-all duration-150",
                  worksOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1 pointer-events-none"
                )}
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
                    {item.items.map((sub, index) => {
                      const isSubActive =
                        activeId === sub.href || activeId?.startsWith(sub.href);
                      const isSubExternal = sub.href.startsWith("http");

                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          target={isSubExternal ? "_blank" : undefined}
                          rel={isSubExternal ? "noopener noreferrer" : undefined}
                          onClick={() => setWorksOpen(false)}
                          className={cn(
                            "group relative flex items-start gap-3 px-3.5 py-2.5 transition-colors rounded-none",
                            "hover:bg-muted/40",
                            isSubActive ? "bg-muted/30" : "bg-transparent"
                          )}
                        >
                          <span className="font-mono text-[11px] font-medium text-muted-foreground/60 group-hover:text-foreground pt-0.5 select-none transition-colors">
                            0{index + 1}
                          </span>
                          <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                            <div className="flex items-center justify-between gap-1">
                              <span
                                className={cn(
                                  "font-sans font-semibold text-[13px] tracking-tight text-foreground transition-colors",
                                  isSubActive && "font-bold"
                                )}
                              >
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
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        }

        if (!item.href) return null;
        const href = item.href;
        const isExternal = href.startsWith("http");
        const isActive = exactMatch
          ? activeId === href
          : activeId === href ||
            (href === "/"
              ? ["/", "/index"].includes(activeId || "")
              : !isExternal && activeId?.startsWith(href));

        return (
          <NavItem
            key={href}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-current={isActive ? "page" : undefined}
          >
            {item.title}
          </NavItem>
        );
      })}
    </nav>
  );
}


export function NavItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "group relative inline-flex items-center justify-center px-2.5 py-1 text-[14px] font-normal tracking-tight text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-foreground aria-[current=page]:font-medium select-none",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
