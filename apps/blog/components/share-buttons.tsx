'use client';

import * as React from 'react';

interface Props {
  title: string;
  url?: string;
}

export function ShareButtons({ title, url }: Props) {
  const [copied, setCopied] = React.useState(false);
  const [currentUrl, setCurrentUrl] = React.useState(url || '');

  React.useEffect(() => {
    if (!url && typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, [url]);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(currentUrl);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-xs text-muted-foreground">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-muted hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-border text-muted-foreground hover:text-foreground transition-colors no-underline"
        title="Share on X (Twitter)"
        aria-label="Share on X"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-muted hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-border text-muted-foreground hover:text-foreground transition-colors no-underline"
        title="Share on LinkedIn"
        aria-label="Share on LinkedIn"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66 0-.91-.74-1.66-1.66-1.66-.92 0-1.66.75-1.66 1.66 0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
      </a>

      <button
        type="button"
        onClick={handleCopy}
        className="relative inline-flex items-center justify-center w-7 h-7 rounded-md bg-muted hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-border text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        title="Copy article link"
        aria-label="Copy article link"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
        {copied && (
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded shadow whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}
