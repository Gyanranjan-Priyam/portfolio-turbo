'use client';

import * as React from 'react';
import { MarkdownHeading } from '@/lib/types';
import { BottomSheet } from '@/components/motion/bottom-sheet';
import { cn } from '@/lib/utils';

interface Props {
  headings: MarkdownHeading[];
  postTitle?: string;
}

export function TableOfContents({ headings, postTitle }: Props) {
  const filteredHeadings = headings.filter((h) => h.depth >= 1 && h.depth <= 3);
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [progress, setProgress] = React.useState<number>(0);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isNearFooter, setIsNearFooter] = React.useState(false);

  // Track active heading, scroll progress, and footer proximity
  React.useEffect(() => {
    setMounted(true);
    if (filteredHeadings.length === 0) return;

    function handleScroll() {
      const scrollPos = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = docHeight > 0 ? Math.min(100, Math.max(0, Math.round((scrollPos / docHeight) * 100))) : 0;
      setProgress(currentProgress);
      setIsScrolled(scrollPos > 120);

      // Check footer proximity to hide TOC when approaching the footer
      const footerEl = document.querySelector('footer');
      if (footerEl) {
        const footerTop = footerEl.getBoundingClientRect().top;
        setIsNearFooter(footerTop <= window.innerHeight + 40);
      } else {
        setIsNearFooter(false);
      }

      const offset = 140;
      let currentIdx = 0;

      for (let i = 0; i < filteredHeadings.length; i++) {
        const el = document.getElementById(filteredHeadings[i].slug);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top <= scrollPos + offset) {
            currentIdx = i;
          } else {
            break;
          }
        }
      }

      setActiveIndex(currentIdx);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [filteredHeadings]);

  const scrollToHeading = (slug: string) => {
    setOpen(false);
    
    // Give time for bottom sheet close animation to start before scrolling smoothly
    setTimeout(() => {
      const target = document.getElementById(slug);
      if (target) {
        const lenis = (window as unknown as { lenis?: { scrollTo: (target: HTMLElement | number, opts?: { offset?: number; duration?: number }) => void } }).lenis;
        if (lenis) {
          lenis.scrollTo(target, { offset: -80, duration: 1.2 });
        } else {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
        window.history.pushState(null, '', `#${slug}`);
      }
    }, 50);
  };

  const scrollToTop = () => {
    setOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  if (filteredHeadings.length === 0 || !mounted) return null;

  const currentHeading = filteredHeadings[activeIndex] || filteredHeadings[0];

  return (
    <>
      {/* Floating Action Pill for Desktop & Mobile (Centered in the middle of page, hidden near footer) */}
      <div
        className={cn(
          'fixed bottom-5 left-1/2 -translate-x-1/2 sm:bottom-6 z-40 transition-all duration-300 ease-out',
          isScrolled && !isNearFooter
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-6 scale-95 pointer-events-none'
        )}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-background/90 dark:bg-neutral-900/90 backdrop-blur-md text-foreground shadow-xl hover:shadow-2xl hover:border-foreground/30 active:scale-95 transition-all duration-150 cursor-pointer"
          aria-label="Table of Contents"
          title="Open Table of Contents"
        >
          {/* Circular progress badge */}
          <div className="relative flex items-center justify-center w-5 h-5 shrink-0">
            <svg className="w-5 h-5 -rotate-90 text-muted-foreground/20" viewBox="0 0 36 36">
              <path
                className="stroke-current"
                strokeWidth="3.5"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="stroke-primary text-foreground"
                strokeDasharray={`${progress}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute font-mono text-[9px] font-bold text-foreground">
              {filteredHeadings.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              TOC
            </span>
            <span className="hidden sm:inline font-sans text-xs text-muted-foreground max-w-[160px] truncate border-l border-border pl-2">
              {currentHeading?.text || 'On this page'}
            </span>
          </div>

          <svg
            className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground group-hover:translate-y-[-1px] transition-transform shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      </div>

      {/* 3. Bottom Sheet Component for Table of Contents (Mobile & Desktop) */}
      <BottomSheet
        open={open}
        onOpenChange={setOpen}
        snapPoints={[0.6, 0.9]}
        defaultSnap={0}
        title="Table of Contents"
        description={postTitle ? `${filteredHeadings.length} sections · ${postTitle}` : `${filteredHeadings.length} sections in this article`}
      >
        <div className="flex flex-col h-full py-2">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between px-1 mb-3 font-mono text-[11px] text-muted-foreground border-b border-border/40 pb-2">
            <span>Reading Progress: {progress}%</span>
            <span>
              Section {activeIndex + 1} of {filteredHeadings.length}
            </span>
          </div>

          {/* Heading Items List */}
          <div className="flex-1 overflow-y-auto py-1 pr-1 space-y-1">
            {filteredHeadings.map((heading, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={heading.slug}
                  type="button"
                  onClick={() => scrollToHeading(heading.slug)}
                  className={cn(
                    'w-full text-left flex items-start gap-3 p-2.5 rounded-lg text-sm transition-all duration-150 cursor-pointer border',
                    heading.depth >= 3 ? 'pl-8 text-xs' : 'font-medium',
                    isActive
                      ? 'bg-muted border-border text-foreground font-semibold shadow-xs'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  <div className="mt-0.5 shrink-0 flex items-center justify-center">
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-foreground shadow-xs" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                    )}
                  </div>
                  <span className="flex-1 leading-snug">{heading.text}</span>
                  {isActive && (
                    <span className="shrink-0 font-mono text-[10px] text-muted-foreground uppercase bg-background px-1.5 py-0.5 rounded border border-border">
                      Current
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Bottom Sheet Footer Utility */}
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-border/80 px-1">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-muted px-2.5 py-1.5 rounded-md transition-colors cursor-pointer"
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
                <path d="m18 15-6-6-6 6" />
              </svg>
              <span>Back to top</span>
            </button>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground bg-muted hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-border px-3 py-1.5 rounded-md transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </BottomSheet>
    </>
  );
}
