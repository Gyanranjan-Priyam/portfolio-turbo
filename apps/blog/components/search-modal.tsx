'use client';

import * as React from 'react';
import Link from 'next/link';
import { BlogPostData } from '@/lib/types';

interface Props {
  posts: BlogPostData[];
}

export function SearchModal({ posts }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [activeTag, setActiveTag] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const allTags = React.useMemo(() => {
    return Array.from(new Set(posts.flatMap((p) => p.tags || []))).sort();
  }, [posts]);

  // Global keyboard shortcuts (Ctrl+K, Cmd+K, '/')
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      if (
        e.key === '/' &&
        !isOpen &&
        !(
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          (e.target as HTMLElement)?.isContentEditable
        )
      ) {
        e.preventDefault();
        setIsOpen(true);
        return;
      }

      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    }

    // Expose openSpotlightSearch globally for any trigger buttons
    (window as unknown as { openSpotlightSearch?: () => void }).openSpotlightSearch = () => {
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  React.useEffect(() => {
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      lenis?.start();
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      setQuery('');
      setActiveTag(null);
    }

    return () => {
      lenis?.start();
    };
  }, [isOpen]);

  const filteredPosts = React.useMemo(() => {
    if (!query.trim() && !activeTag) return [];

    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesTag = activeTag
        ? post.tags?.some((t) => t.toLowerCase() === activeTag.toLowerCase())
        : true;
      if (!q) return matchesTag;

      const matchesQuery =
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.tags?.some((t) => t.toLowerCase().includes(q));

      return matchesQuery && matchesTag;
    });
  }, [posts, query, activeTag]);

  const highlightMatch = (text: string, q: string) => {
    if (!q || !q.trim()) return text;
    const parts = text.split(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === q.toLowerCase() ? (
        <mark key={i} className="bg-amber-400/20 text-foreground px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex justify-center items-start pt-[12vh]"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-[560px] px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="w-full bg-background border border-border rounded-xl shadow-xl overflow-hidden"
          data-lenis-prevent="true"
        >
          {/* Input Row */}
          <div className="flex items-center gap-3 px-4 py-3">
            <svg
              className="text-muted-foreground shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles by title, tag, or topic..."
              autoComplete="off"
              spellCheck="false"
              className="grow bg-transparent border-none outline-none font-sans text-sm text-foreground placeholder:text-muted-foreground"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="bg-transparent border-none text-muted-foreground hover:text-foreground cursor-pointer p-1 flex items-center justify-center rounded transition-colors"
                aria-label="Clear search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="font-mono text-[10px] font-semibold text-muted-foreground bg-muted border border-border px-1.5 py-0.5 rounded cursor-pointer hover:text-foreground"
            >
              ESC
            </button>
          </div>

          {/* Tag Filter Pills */}
          {(query || activeTag) && (
            <div className="flex flex-wrap gap-1.5 px-4 py-2 border-t border-b border-border bg-muted/50">
              {allTags.map((tag) => {
                const isSelected = activeTag === tag;
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActiveTag(isSelected ? null : tag)}
                    className={`font-mono text-[11px] rounded-full px-2 py-0.5 cursor-pointer transition-colors border ${
                      isSelected
                        ? 'bg-primary text-primary-foreground border-primary font-semibold'
                        : 'text-muted-foreground bg-background hover:text-foreground border-border'
                    }`}
                  >
                    #{tag}
                  </button>
                );
              })}
            </div>
          )}

          {/* Results List */}
          {(query || activeTag) && (
            <div className="max-h-[45vh] overflow-y-auto">
              {filteredPosts.length === 0 ? (
                <div className="py-8 px-4 text-center text-muted-foreground font-sans text-xs">
                  <p>No articles found for &quot;{query || activeTag}&quot;</p>
                </div>
              ) : (
                filteredPosts.map((post) => {
                  const dateStr = new Date(post.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  });

                  return (
                    <Link
                      key={post.slug}
                      href={`/${post.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="block no-underline px-4 py-3 border-b border-border hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h3 className="text-xs sm:text-sm font-semibold text-foreground m-0 leading-snug">
                          {highlightMatch(post.title, query)}
                        </h3>
                        <span className="font-mono text-[10px] text-muted-foreground whitespace-nowrap shrink-0">
                          {dateStr}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-1.5 line-clamp-2">
                        {highlightMatch(post.description, query)}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {post.tags?.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] text-muted-foreground bg-muted border border-border rounded px-1.5 py-0.5"
                          >
                            #{highlightMatch(t, query)}
                          </span>
                        ))}
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          )}
        </div>

        {/* Keyboard Shortcut Hint */}
        <p className="text-center font-mono text-[11px] mt-2.5">
          Press <kbd className="inline-block bg-muted border border-border rounded px-1 py-0.5 text-[10px] text-muted-foreground">/</kbd> to search · <kbd className="inline-block bg-muted border border-border rounded px-1 py-0.5 text-[10px] text-muted-foreground">ESC</kbd> to close
        </p>
      </div>
    </div>
  );
}
