'use client';

import * as React from 'react';
import {
  X,
  Copy,
  Check,
} from 'lucide-react';
import { Grok, Claude, OpenAI } from '@lobehub/icons';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { EASE_OUT } from '@/lib/ease';
import { cn } from '@/lib/utils';
import { getShortUrl, getShortCode } from '@/lib/short-url';
import { SITE_URL } from '@/lib/consts';
import { exportArticleToPdf } from '@/lib/export-pdf';

interface ActionItem {
  id: string;
  label: string;
  icon: (props: { className?: string }) => React.ReactNode;
  action: () => void;
}

const SPRING_FOLDER = {
  type: 'spring',
  stiffness: 350,
  damping: 32,
  mass: 0.85,
} as const;

export interface BloomCopyMenuProps {
  title: string;
  slug: string;
  description?: string;
  author?: string;
  content?: string;
  htmlContent?: string;
  pubDate?: string;
  category?: string;
  heroImage?: string;
  url?: string;
  className?: string;
}

export function BloomCopyMenu({
  title,
  slug,
  description,
  author,
  content,
  htmlContent,
  pubDate,
  category,
  heroImage,
  url,
  className,
}: BloomCopyMenuProps) {
  const [open, setOpen] = React.useState(false);
  const [copiedStatus, setCopiedStatus] = React.useState<string | null>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = React.useState(false);
  const reduce = useReducedMotion();
  const modalRef = React.useRef<HTMLDivElement>(null);

  const fullUrl = url || `${SITE_URL}/${slug}`;
  const shortUrl = getShortUrl(slug);
  const shortUrlDisplay = shortUrl.replace(/^https?:\/\//, '');

  const showCopied = (key: string) => {
    setCopiedStatus(key);
    setTimeout(() => setCopiedStatus(null), 2000);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      showCopied('link');
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  const handleCopyMarkdown = async () => {
    try {
      const header = `# ${title}\n\n> ${description || ''}\n\n**Author:** ${author || 'Gyanranjan Priyam'}\n**Link:** ${fullUrl}\n\n---\n\n`;
      const fullMarkdown = `${header}${content || ''}`;
      await navigator.clipboard.writeText(fullMarkdown);
      showCopied('markdown');
    } catch (err) {
      console.error('Failed to copy markdown', err);
    }
  };

  const handleCopyPlainText = async () => {
    try {
      const plainText = `${title}\n\n${description || ''}\n\nRead full article at: ${fullUrl}`;
      await navigator.clipboard.writeText(plainText);
      showCopied('text');
    } catch (err) {
      console.error('Failed to copy plain text', err);
    }
  };

  const handleDownloadMarkdown = () => {
    const header = `---\ntitle: "${title}"\ndescription: "${description || ''}"\nauthor: "${author || 'Gyanranjan Priyam'}"\nurl: "${fullUrl}"\n---\n\n`;
    const fullMarkdown = `${header}${content || ''}`;
    const blob = new Blob([fullMarkdown], { type: 'text/markdown;charset=utf-8' });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `${slug}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
    showCopied('download-md');
  };

  const handleExportPDF = async () => {
    if (isGeneratingPdf) return;
    try {
      setIsGeneratingPdf(true);
      setCopiedStatus('generating-pdf');
      await exportArticleToPdf({
        title,
        slug,
        description,
        author,
        content,
        htmlContent,
        url: fullUrl,
        pubDate,
        category,
        heroImage,
      });
      showCopied('export-pdf');
    } catch (err) {
      console.error('Failed to export PDF:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleExportDocx = () => {
    const htmlExport = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>${title}</title></head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 800px; margin: 20px auto; padding: 20px; color: #111;">
        <h1 style="font-size: 26px; font-weight: bold; margin-bottom: 8px;">${title}</h1>
        <p style="color: #666; font-size: 15px; font-style: italic; margin-bottom: 16px;">${description || ''}</p>
        <p style="font-size: 13px; color: #888; border-bottom: 1px solid #eaeaea; padding-bottom: 12px;"><strong>Author:</strong> ${author || 'Gyanranjan Priyam'} &bull; <strong>Link:</strong> <a href="${fullUrl}" style="color: #0066cc;">${fullUrl}</a></p>
        <div style="font-size: 14px; margin-top: 20px;">${(htmlContent || (content || '')).replace(/\n\n/g, '<p style="margin: 12px 0;"></p>').replace(/\n/g, '<br/>')}</div>
      </body>
      </html>
    `;
    const blob = new Blob(['\ufeff' + htmlExport], {
      type: 'application/msword;charset=utf-8',
    });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `${slug}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
    showCopied('export-docx');
  };

  const handleOpenInChatGPT = () => {
    const prompt = encodeURIComponent(
      `Please read, analyze, and provide a summary of this article:\n\nTitle: ${title}\nLink: ${fullUrl}\nSummary: ${description || ''}`
    );
    window.open(`https://chatgpt.com/?q=${prompt}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenInClaude = () => {
    const prompt = encodeURIComponent(
      `Please read and summarize this article:\n\nTitle: ${title}\nLink: ${fullUrl}\nDescription: ${description || ''}`
    );
    window.open(`https://claude.ai/new?q=${prompt}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenInGrok = () => {
    const prompt = encodeURIComponent(
      `Analyze this engineering article: ${title} - ${fullUrl}`
    );
    window.open(`https://x.com/i/grok?text=${prompt}`, '_blank', 'noopener,noreferrer');
  };

  const menuItems: ActionItem[] = [
    {
      id: 'claude',
      label: 'Open in Claude',
      icon: ({ className }) => <Claude size={20} className={className} />,
      action: handleOpenInClaude,
    },
    {
      id: 'chatgpt',
      label: 'Open in ChatGPT',
      icon: ({ className }) => <OpenAI size={20} className={className} />,
      action: handleOpenInChatGPT,
    },
    {
      id: 'grok',
      label: 'Open in Grok',
      icon: ({ className }) => <Grok size={20} className={className} />,
      action: handleOpenInGrok,
    },
    {
      id: 'copy-md',
      label: 'Copy Markdown',
      icon: ({ className }) =>
        copiedStatus === 'markdown' ? (
          <Check className={cn(className, 'text-emerald-500')} />
        ) : (
          <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.27 19.385H1.73A1.73 1.73 0 0 1 0 17.655V6.345a1.73 1.73 0 0 1 1.73-1.73h20.54A1.73 1.73 0 0 1 24 6.345v11.308a1.73 1.73 0 0 1-1.73 1.732zM5.769 15.923v-4.5l2.308 2.885 2.308-2.885v4.5h2.307V8.077h-2.307l-2.308 2.885-2.308-2.885H3.462v7.846zm11.539 0l3.461-4.038h-2.307V8.077h-2.308v3.808h-2.308z" />
          </svg>
        ),
      action: handleCopyMarkdown,
    },
    {
      id: 'download-md',
      label: 'Download .MD',
      icon: ({ className }) =>
        copiedStatus === 'download-md' ? (
          <Check className={cn(className, 'text-emerald-500')} />
        ) : (
          <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        ),
      action: handleDownloadMarkdown,
    },
    {
      id: 'export-docx',
      label: 'Export to Word',
      icon: ({ className }) =>
        copiedStatus === 'export-docx' ? (
          <Check className={cn(className, 'text-emerald-500')} />
        ) : (
          <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.17 2.062h-7.042a1.05 1.05 0 0 0-1.042 1.05v3.15H6.282A1.284 1.284 0 0 0 5 7.545v8.91a1.284 1.284 0 0 0 1.282 1.283h6.804v3.15c0 .58.47 1.05 1.042 1.05h7.042a1.05 1.05 0 0 0 1.042-1.05V3.112a1.05 1.05 0 0 0-1.042-1.05zm-9.333 11.517l-1.395-4.492h1.365l.777 3.033.743-3.033h1.312l-1.42 4.492H11.837zm-.62-7.291v-.989h1.871v.989H11.217zm9.953 14.65h-5.992V3.112h5.992v17.826z" />
          </svg>
        ),
      action: handleExportDocx,
    },
    {
      id: 'export-pdf',
      label: isGeneratingPdf ? 'Generating PDF...' : 'Export to PDF',
      icon: ({ className }) =>
        isGeneratingPdf ? (
          <svg
            className={cn(className, 'animate-spin text-primary')}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="10" />
          </svg>
        ) : copiedStatus === 'export-pdf' ? (
          <Check className={cn(className, 'text-emerald-500')} />
        ) : (
          <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.5 2H4.5A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2zm-9.7 13.8c-.5.4-1.2.6-2 .6h-1.5V7.6h1.7c.9 0 1.6.2 2.1.6.5.4.8 1 .8 1.8 0 .8-.3 1.4-.8 1.8-.4.3-.9.5-1.5.5h-.7v1.9h1.1c.4 0 .7.1 1 .2.3.1.5.3.6.5.1.2.2.5.2.8 0 .4-.1.7-.3.9-.2.2-.4.4-.7.6zm4.8 0c-.5.4-1.1.6-1.9.6h-1.6V7.6h1.6c.8 0 1.4.2 1.9.6.5.4.7 1 .7 1.8 0 .8-.2 1.4-.7 1.8-.5.4-1.1.6-1.9.6h-.8v3.4h.8c.8 0 1.4.2 1.9.6zm4.6-5.8h-2.4v2.2h2.2v1.5h-2.2v3.1h-1.6V7.6h3.9v1.6z" />
          </svg>
        ),
      action: handleExportPDF,
    },
    {
      id: 'copy-link',
      label: 'Copy Page Link',
      icon: ({ className }) =>
        copiedStatus === 'link' ? (
          <Check className={cn(className, 'text-emerald-500')} />
        ) : (
          <svg
            className={className}
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
        ),
      action: handleCopyLink,
    },
    {
      id: 'copy-text',
      label: 'Copy Plain Text',
      icon: ({ className }) =>
        copiedStatus === 'text' ? (
          <Check className={cn(className, 'text-emerald-500')} />
        ) : (
          <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
          </svg>
        ),
      action: handleCopyPlainText,
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

  // Handle ESC key
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
        aria-label="Page actions and AI tools"
        className="inline-flex h-8 px-4 items-center justify-center gap-2 rounded-full border border-border bg-muted/50 hover:bg-neutral-200 dark:hover:bg-neutral-800 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground shadow-xs cursor-pointer transition-all active:scale-95"
      >
        <Copy className="h-3.5 w-3.5" />
        <span>COPY PAGE</span>
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
              aria-label="Copy page and export dialog"
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
                  <Copy className="h-4 w-4 text-primary" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                    Copy Page & AI Tools
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Short Link Banner */}
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
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-[11px] font-semibold bg-muted hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-border text-muted-foreground hover:text-foreground transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95"
                  title="Copy short link"
                >
                  {copiedStatus === 'link' ? (
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

              {/* 3x3 Radial Staggered Actions Grid */}
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
                {menuItems.map((item, i) => {
                  const cols = 3;
                  const rows = Math.ceil(menuItems.length / cols);
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
                        item.action();
                        if (
                          item.id !== 'copy-md' &&
                          item.id !== 'download-md' &&
                          item.id !== 'copy-link' &&
                          item.id !== 'copy-text'
                        ) {
                          setOpen(false);
                        }
                      }}
                      className={cn(
                        'flex items-center justify-center p-4 text-muted-foreground transition-all duration-150 hover:text-foreground hover:bg-muted/40 cursor-pointer',
                        i % 3 !== 2 && 'border-r border-border',
                        i < 6 && 'border-b border-border'
                      )}
                      aria-label={item.label}
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
