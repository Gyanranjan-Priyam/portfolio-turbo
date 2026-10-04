"use client";

import Link from "next/link";
import { MAIN_NAV, MOBILE_NAV } from "@/config/site";
import { NavDesktop } from "@/components/navbar/nav-desktop";
import { NavMobile } from "@/components/navbar/nav-mobile";
import { ThemeToggle } from "@/components/navbar/theme-toggle";
import Image from "next/image";
import { VerticalSeparator } from "../ui/separator-vertical";

export function NavMain() {
  return (
    <header className="hidden sm:block sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="border-x border-border mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        {/* Left: Pixel/geometric monogram logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
          aria-label="Gyanranjan Priyam — Home"
        >
          <Image
            src="/logo.png"
            alt="Gyanranjan Priyam"
            width={32}
            height={32}
            className="rounded-full"
          />
        </Link>

        {/* Right: Nav items, Command palette trigger, GitHub, Theme toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <NavDesktop items={MAIN_NAV} />
          <NavMobile items={MOBILE_NAV} />
          <VerticalSeparator orientation="vertical" className="h-4 self-center" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export const SiteHeader = NavMain;
