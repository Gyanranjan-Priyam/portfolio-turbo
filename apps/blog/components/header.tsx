'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { AUTHOR_PORTFOLIO } from '@/lib/consts';

const mainNav = [
  { title: 'Home', href: '/', external: false },
  { title: 'Projects', href: `${AUTHOR_PORTFOLIO}/projects`, external: true },
  { title: 'Templates', href: `${AUTHOR_PORTFOLIO}/templates`, external: true },
  { title: 'Blog', href: '/', external: false },
];

const mobileNav = [
  { title: 'Home', href: '/', external: false },
  { title: 'Projects', href: `${AUTHOR_PORTFOLIO}/projects`, external: true },
  { title: 'Templates', href: `${AUTHOR_PORTFOLIO}/templates`, external: true },
  { title: 'Blog', href: '/', external: false },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

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
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const isCurrentPath = (item: { title: string; href: string; external?: boolean }) => {
    if (item.external) return false;
    if (item.title === 'Home') {
      return pathname === '/';
    }
    if (item.title === 'Blog') {
      return (
        pathname.startsWith('/tags') ||
        (pathname !== '/' && pathname !== '/about')
      );
    }
    if (item.href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(item.href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="border-x border-border mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
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
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-5 sm:gap-6 font-sans">
            {mainNav.map((item) => {
              const active = isCurrentPath(item);
              if (item.external) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] tracking-tight text-muted-foreground font-normal transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </a>
                );
              }
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`text-[14px] tracking-tight transition-colors hover:text-foreground ${
                    active
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground font-normal'
                  }`}
                >
                  {item.title}
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
              className="group relative flex h-8 w-8 touch-manipulation flex-col items-center justify-center gap-1 border-none p-0 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 rounded-md transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`flex h-0.5 w-3.5 transform rounded-[1px] bg-foreground transition-transform duration-200 ${
                  mobileMenuOpen ? 'translate-y-0.75 rotate-45' : ''
                }`}
              />
              <span
                className={`flex h-0.5 w-3.5 transform rounded-[1px] bg-foreground transition-transform duration-200 ${
                  mobileMenuOpen ? '-translate-y-0.75 -rotate-45' : ''
                }`}
              />
            </button>

            {mobileMenuOpen && (
              <div
                ref={menuRef}
                className="absolute right-0 top-full mt-2 w-48 rounded-xl p-1.5 border border-border bg-background shadow-lg z-50 flex flex-col gap-0.5"
              >
                {mobileNav.map((link) => {
                  const active = isCurrentPath(link);
                  if (link.external) {
                    return (
                      <a
                        key={link.title}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      >
                        {link.title}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                        active
                          ? 'bg-neutral-100 dark:bg-neutral-800 text-foreground font-semibold'
                          : 'text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800'
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

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
