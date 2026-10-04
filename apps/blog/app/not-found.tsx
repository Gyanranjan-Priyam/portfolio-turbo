'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SearchModal } from '@/components/search-modal';

export default function NotFound() {
  const router = useRouter();
  const [remaining, setRemaining] = React.useState(6);
  const [isCancelled, setIsCancelled] = React.useState(false);

  React.useEffect(() => {
    if (isCancelled) return;

    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 0.1) {
          clearInterval(interval);
          router.push('/');
          return 0;
        }
        return prev - 0.1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isCancelled, router]);

  const pct = (Math.max(0, remaining) / 6) * 100;

  return (
    <main id="layout" className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <div className="border-x border-border mx-auto max-w-3xl px-4 sm:px-6 bg-background flex-1 w-full flex flex-col">
        <div className="flex-1 w-full flex flex-col py-6 sm:py-8">
          {/* 404 HERO SECTION */}
          <section className="flex flex-col items-center text-center my-4 mb-8 w-full">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>404 // ROUTE_NOT_FOUND</span>
            </div>

            <h1 className="font-sans text-5xl sm:text-6xl font-black tracking-tight text-foreground my-2">
              404
            </h1>
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-foreground mb-2">
              Lost in the Digital Void
            </h2>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-[420px] mx-auto mb-6">
              The article, route, or resource you are looking for has been moved, renamed, or doesn&apos;t exist.
            </p>

            {/* Auto Redirection Bar */}
            <div className="w-full max-w-[380px] mx-auto bg-card border border-border rounded-lg p-3 mb-6 flex flex-col gap-2 shadow-xs">
              {!isCancelled ? (
                <>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>
                        Redirecting to home in <strong className="text-foreground font-bold">{Math.ceil(remaining)}</strong>s
                      </span>
                    </div>
                    <button
                      onClick={() => setIsCancelled(true)}
                      className="bg-transparent border-none text-muted-foreground hover:text-foreground text-[11px] font-mono underline cursor-pointer p-0.5 transition-colors"
                      type="button"
                      aria-label="Stay on page"
                    >
                      Stay
                    </button>
                  </div>
                  <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-foreground rounded-full transition-[width] duration-100 linear"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </>
              ) : (
                <div className="font-mono text-xs text-muted-foreground text-center py-1">
                  Auto-redirection cancelled. Feel free to explore other articles.
                </div>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center justify-center gap-2.5 flex-wrap w-full">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground font-sans text-xs font-medium no-underline hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span>Back to Articles</span>
              </Link>

              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const searchFn = (window as unknown as { openSpotlightSearch?: () => void }).openSpotlightSearch;
                    if (typeof searchFn === 'function') {
                      searchFn();
                    }
                  }
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-card hover:bg-neutral-50 dark:hover:bg-neutral-900/60 border border-border text-foreground font-sans text-xs font-medium cursor-pointer transition-colors shadow-xs"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span>Search (Ctrl+K)</span>
              </button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <SearchModal posts={[]} />
    </main>
  );
}
