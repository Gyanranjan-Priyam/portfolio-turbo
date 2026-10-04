'use client';

import * as React from 'react';
import {
  X,
  Copy,
  Check,
  Share2,
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { EASE_OUT } from '@/lib/ease';
import { cn } from '@/lib/utils';
import { getShortUrl, getShortCode } from '@/lib/short-url';
import { SITE_URL } from '@/lib/consts';

interface SocialShareItem {
  id: string;
  label: string;
  icon: (props: { className?: string }) => React.ReactNode;
  action: (data: { url: string; shortUrl: string; title: string; description?: string }) => void;
}

const SPRING_FOLDER = {
  type: 'spring',
  stiffness: 350,
  damping: 32,
  mass: 0.85,
} as const;

export interface BloomShareMenuProps {
  title: string;
  slug: string;
  description?: string;
  url?: string;
  className?: string;
}

export function BloomShareMenu({
  title,
  slug,
  description,
  url,
  className,
}: BloomShareMenuProps) {
  const [open, setOpen] = React.useState(false);
  const [copiedShort, setCopiedShort] = React.useState(false);
  const reduce = useReducedMotion();
  const modalRef = React.useRef<HTMLDivElement>(null);

  const fullUrl = url || `${SITE_URL}/${slug}`;
  const shortUrl = getShortUrl(slug);
  const shortCode = getShortCode(slug);
  const shortUrlDisplay = shortUrl.replace(/^https?:\/\//, '');

  const encodedTitle = encodeURIComponent(title);
  const encodedShortUrl = encodeURIComponent(shortUrl);
  const encodedDescription = encodeURIComponent(description || title);

  const handleCopyShortUrl = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopiedShort(true);
      setTimeout(() => setCopiedShort(false), 2000);
    } catch (err) {
      console.error('Failed to copy short URL', err);
    }
  };

  const shareItems: SocialShareItem[] = [
    {
      id: 'x',
      label: 'X (Twitter)',
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      action: () => {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedShortUrl}`,
          '_blank',
          'noopener,noreferrer'
        );
      },
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      action: () => {
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodedShortUrl}`,
          '_blank',
          'noopener,noreferrer'
        );
      },
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
      action: () => {
        window.open(
          `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedShortUrl}`,
          '_blank',
          'noopener,noreferrer'
        );
      },
    },
    {
      id: 'telegram',
      label: 'Telegram',
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      action: () => {
        window.open(
          `https://t.me/share/url?url=${encodedShortUrl}&text=${encodedTitle}`,
          '_blank',
          'noopener,noreferrer'
        );
      },
    },
    {
      id: 'reddit',
      label: 'Reddit',
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.703zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      ),
      action: () => {
        window.open(
          `https://reddit.com/submit?url=${encodedShortUrl}&title=${encodedTitle}`,
          '_blank',
          'noopener,noreferrer'
        );
      },
    },
    {
      id: 'facebook',
      label: 'Facebook',
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      action: () => {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodedShortUrl}`,
          '_blank',
          'noopener,noreferrer'
        );
      },
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      action: async () => {
        await handleCopyShortUrl();
        window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 'email',
      label: 'Email',
      icon: ({ className }) => (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      action: () => {
        window.location.href = `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedShortUrl}`;
      },
    },
    {
      id: 'native',
      label: 'More Share',
      icon: ({ className }) => (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
      action: async () => {
        if (typeof navigator !== 'undefined' && navigator.share) {
          try {
            await navigator.share({
              title,
              text: description || title,
              url: shortUrl,
            });
          } catch (err) {
            if ((err as Error)?.name !== 'AbortError') {
              handleCopyShortUrl();
            }
          }
        } else {
          handleCopyShortUrl();
        }
      },
    },
  ];

  // Lock background scroll and stop Lenis when modal is open
  React.useEffect(() => {
    if (open) {
      const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
      lenis?.stop();
      const originalOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      return () => {
        document.documentElement.style.overflow = originalOverflow;
        document.body.style.overflow = '';
        lenis?.start();
      };
    }
  }, [open]);

  // Handle ESC key and backdrop clicks
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className={cn('inline-flex', className)}>
      {/* Trigger Capsule Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Share this article"
        className="inline-flex h-8 px-4 items-center justify-center gap-2 rounded-full border border-border bg-muted/50 hover:bg-neutral-200 dark:hover:bg-neutral-800 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground shadow-xs cursor-pointer transition-all active:scale-95"
      >
        <Share2 className="h-3.5 w-3.5" />
        <span>SHARE</span>
      </button>

      {/* Centered Modal with Backdrop Blur Overlay */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* 1. Backdrop Blur Overlay */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* 2. Center Screen Modal Card */}
            <motion.div
              key="panel"
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label="Share article dialog"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 12 }}
              transition={SPRING_FOLDER}
              style={{ borderRadius: 16 }}
              className="relative z-10 w-[min(92vw,440px)] overflow-hidden border border-border bg-card shadow-2xl backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent="true"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-muted/40">
                <div className="flex items-center gap-2">
                  <Share2 className="h-4 w-4 text-primary" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                    Share Article
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close share menu"
                  className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Short URL Banner */}
              <div className="px-4 py-3 border-b border-border/80 bg-background/60 flex items-center justify-between gap-2.5">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="font-mono text-[10px] uppercase font-bold text-primary px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20 shrink-0">
                    SHORT LINK
                  </span>
                  <span className="font-mono text-xs text-muted-foreground truncate select-all">
                    {shortUrlDisplay}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyShortUrl}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-[11px] font-semibold bg-muted hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-border text-muted-foreground hover:text-foreground transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95"
                  title="Copy short link"
                >
                  {copiedShort ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* 3x3 Radial Staggered Social Share Grid */}
              <motion.div
                initial={
                  reduce ? false : { clipPath: 'inset(45% 34% 45% 34%)' }
                }
                animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{
                  delay: reduce ? 0 : 0.06,
                  duration: 0.4,
                  ease: EASE_OUT,
                }}
                className="grid grid-cols-3 bg-card"
              >
                {shareItems.map((item, i) => {
                  const cols = 3;
                  const rows = Math.ceil(shareItems.length / cols);
                  const col = i % cols;
                  const row = Math.floor(i / cols);
                  const dist = Math.hypot(
                    col - (cols - 1) / 2,
                    row - (rows - 1) / 2
                  );

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        item.action({
                          url: fullUrl,
                          shortUrl,
                          title,
                          description,
                        });
                        if (item.id !== 'copy-short') {
                          setOpen(false);
                        }
                      }}
                      className={cn(
                        'flex items-center justify-center p-4 text-muted-foreground transition-all duration-150 hover:text-foreground hover:bg-muted/40 cursor-pointer',
                        i % 3 !== 2 && 'border-r border-border',
                        i < 6 && 'border-b border-border'
                      )}
                      aria-label={`Share on ${item.label}`}
                    >
                      <motion.span
                        initial={
                          reduce
                            ? { opacity: 0 }
                            : { opacity: 0, scale: 0.85, filter: 'blur(6px)' }
                        }
                        animate={{
                          opacity: 1,
                          scale: 1,
                          filter: 'blur(0px)',
                        }}
                        transition={{
                          delay: reduce ? 0 : 0.08 + dist * 0.06,
                          type: 'spring',
                          stiffness: 440,
                          damping: 34,
                        }}
                        className="flex flex-col items-center gap-2"
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="font-mono text-[11px] font-medium tracking-tight">
                          {item.label}
                        </span>
                      </motion.span>
                    </button>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
