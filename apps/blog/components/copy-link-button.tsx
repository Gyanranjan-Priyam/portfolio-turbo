'use client';

import * as React from 'react';

interface Props {
  url?: string;
  className?: string;
}

export function CopyLinkButton({ url, className }: Props) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      const linkToCopy = url || (typeof window !== 'undefined' ? window.location.href : '');
      await navigator.clipboard.writeText(linkToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-muted-foreground hover:text-foreground font-mono text-[11px] font-semibold uppercase tracking-wider transition-all duration-150 cursor-pointer shadow-xs active:scale-95 ${
        className || ''
      }`}
      aria-label="Copy link to clipboard"
    >
      {copied ? (
        <>
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
            className="text-emerald-500"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="text-emerald-500">COPIED!</span>
        </>
      ) : (
        <>
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
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          <span>COPY LINK</span>
        </>
      )}
    </button>
  );
}
