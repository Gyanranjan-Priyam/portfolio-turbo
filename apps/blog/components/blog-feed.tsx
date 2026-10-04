'use client';

import * as React from 'react';
import { BlogPostData } from '@/lib/types';
import { BlogCard } from './blog-card';
import { SearchModal } from './search-modal';

interface Props {
  posts: BlogPostData[];
  categories: string[];
}

const PAGE_SIZE = 6;

export function BlogFeed({ posts, categories }: Props) {
  const [currentCategory, setCurrentCategory] = React.useState('All');
  const [currentPage, setCurrentPage] = React.useState(1);
  const feedRef = React.useRef<HTMLDivElement>(null);

  // Sync state from URL query parameters (?page=X&category=Y) on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlPage = parseInt(params.get('page') || '1', 10);
      const urlCategory = params.get('category');

      if (!isNaN(urlPage) && urlPage > 0) {
        setCurrentPage(urlPage);
      }
      if (urlCategory && categories.some((c) => c.toLowerCase() === urlCategory.toLowerCase())) {
        const matched = categories.find((c) => c.toLowerCase() === urlCategory.toLowerCase());
        if (matched) setCurrentCategory(matched);
      }
    }
  }, [categories]);

  const filteredPosts = React.useMemo(() => {
    if (currentCategory === 'All') return posts;
    return posts.filter((post) => {
      const cat = post.category || 'Engineering';
      const tags = post.tags || [];
      return (
        cat.toLowerCase() === currentCategory.toLowerCase() ||
        tags.some((t) => t.toLowerCase() === currentCategory.toLowerCase())
      );
    });
  }, [posts, currentCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const validPage = Math.min(currentPage, totalPages);

  const paginatedPosts = React.useMemo(() => {
    const startIndex = (validPage - 1) * PAGE_SIZE;
    return filteredPosts.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filteredPosts, validPage]);

  const updateUrl = (page: number, cat: string) => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams();
      if (page > 1) params.set('page', String(page));
      if (cat !== 'All') params.set('category', cat);
      const queryString = params.toString();
      const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
      window.history.pushState({ page, category: cat }, '', newUrl);
    }
  };

  const scrollToFeed = () => {
    if (feedRef.current) {
      const lenis = (window as unknown as { lenis?: { scrollTo: (target: HTMLElement | number, opts?: { offset?: number; duration?: number }) => void } }).lenis;
      if (lenis) {
        lenis.scrollTo(feedRef.current, { offset: -80, duration: 1.0 });
      } else {
        const offset = 80;
        const top = feedRef.current.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  const handleCategoryChange = (cat: string) => {
    setCurrentCategory(cat);
    setCurrentPage(1);
    updateUrl(1, cat);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== validPage) {
      setCurrentPage(newPage);
      updateUrl(newPage, currentCategory);
      scrollToFeed();
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center my-2 mb-4 w-full">
        <h1 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
          The <span className="font-cooper italic font-normal text-foreground">Priyam&apos;s</span> Blog
        </h1>

        <p className="font-sans text-xs sm:text-sm text-muted-foreground max-w-[480px] mx-auto mb-5 leading-relaxed">
          Articles, tutorials, and practical insights on web development and engineering.
        </p>

        {/* Search Bar Pill */}
        <div className="w-full max-w-[340px] mx-auto mb-5">
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                const searchFn = (window as unknown as { openSpotlightSearch?: () => void }).openSpotlightSearch;
                if (typeof searchFn === 'function') {
                  searchFn();
                }
              }
            }}
            className="w-full flex items-center justify-between gap-2.5 px-3.5 py-1.5 bg-background hover:bg-neutral-50 dark:hover:bg-neutral-900/60 border border-border rounded-full shadow-xs cursor-pointer transition-colors text-muted-foreground hover:text-foreground"
            type="button"
            aria-label="Search articles"
            title="Search articles (Ctrl+K)"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
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
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span className="font-sans text-xs">Search articles...</span>
            </div>
            <div>
              <kbd className="font-mono text-[10px] font-medium px-1.5 py-0.5 rounded bg-muted border border-border text-muted-foreground">
                Ctrl K
              </kbd>
            </div>
          </button>
        </div>

        {/* Category Filter Tabs */}
        <nav className="w-full max-w-[600px] mx-auto" aria-label="Filter posts by category">
          <div className="flex items-center justify-center flex-wrap gap-1.5">
            {categories.map((cat) => {
              const isSelected = currentCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={`inline-flex items-center px-3 py-1 rounded-full font-sans text-xs font-medium border cursor-pointer transition-colors ${
                    isSelected
                      ? 'text-primary-foreground bg-primary border-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground bg-background hover:bg-neutral-100 dark:hover:bg-neutral-800 border-border'
                  }`}
                  aria-selected={isSelected}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </nav>
      </section>

      {/* Diagonal Stripe Hatch Pattern Divider Band */}
      <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border my-6" />

      {/* POSTS FEED SECTION */}
      <section className="w-full pt-1" ref={feedRef}>
        {filteredPosts.length === 0 ? (
          <div className="text-center py-10 px-6 bg-card border border-border rounded-lg my-6">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="text-sm font-semibold text-foreground mb-1">No articles found</h3>
            <p className="text-xs text-muted-foreground mb-4">
              Try selecting another category or clear your search term.
            </p>
            <button
              onClick={() => handleCategoryChange('All')}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium cursor-pointer"
              type="button"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-8 w-full">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* PAGINATION SECTION */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center gap-2.5 mt-6 mb-4">
          <nav className="inline-flex items-center gap-1.5" aria-label="Pagination">
            <button
              onClick={() => handlePageChange(validPage - 1)}
              disabled={validPage <= 1}
              className="inline-flex items-center justify-center min-w-8 h-8 px-3 rounded-md font-mono text-xs bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-2xs"
              type="button"
              aria-label="Previous page"
            >
              ← Prev
            </button>

            <div className="inline-flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                const isActive = p === validPage;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handlePageChange(p)}
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-md font-mono text-xs cursor-pointer transition-all ${
                      isActive
                        ? 'bg-primary text-primary-foreground font-bold border border-primary shadow-xs'
                        : 'bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted shadow-2xs'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                    aria-label={`Page ${p}`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(validPage + 1)}
              disabled={validPage >= totalPages}
              className="inline-flex items-center justify-center min-w-8 h-8 px-3 rounded-md font-mono text-xs bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-2xs"
              type="button"
              aria-label="Next page"
            >
              Next →
            </button>
          </nav>
          
          <p className="font-mono text-[11px] text-muted-foreground m-0">
            Showing {(validPage - 1) * PAGE_SIZE + 1}–{Math.min(validPage * PAGE_SIZE, filteredPosts.length)} of {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} · Page {validPage} of {totalPages}
          </p>
        </div>
      )}

      {/* Global Search Modal */}
      <SearchModal posts={posts} />
    </>
  );
}
