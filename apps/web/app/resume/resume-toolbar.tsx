"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Printer, Check, Copy, Home } from "lucide-react";
import { toast } from "sonner";
import { BlurFade } from "@/components/ui/blur-fade";

export function ResumeToolbar() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Resume link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy link");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <BlurFade delay={0.04}>
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8 sm:mb-10 print:hidden">
        <div>
          <h1 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight font-sans text-foreground">
            Resume
          </h1>
          <p className="text-xs font-medium sm:text-sm font-mono text-muted-foreground leading-relaxed max-w-2xl">
            A collection of my professional experience, technical skills, education, and achievements. Explore my journey as a developer, the technologies I work with, and the projects I've contributed to.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 sm:ml-4 sm:mt-1 flex-wrap">
          <Link
            href="/"
            aria-label="Home"
            title="Back to home"
            className="rounded-full border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground shadow-2xs"
          >
            <Home className="size-4" />
          </Link>
          <button
            onClick={handleCopyLink}
            aria-label="Copy link"
            title="Copy link to resume"
            className="rounded-full border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer shadow-2xs"
          >
            {copied ? (
              <Check className="size-4 text-emerald-500" />
            ) : (
              <Copy className="size-4" />
            )}
          </button>
          <a
            href="https://assets.priyam.tech/resume/resume.pdf"
            download="Gyanranjan_Priyam_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 p-2 rounded-full bg-foreground text-background text-xs sm:text-sm font-mono font-medium transition-all hover:opacity-90 shadow-sm"
          >
            <Download className="size-4" />
          </a>
        </div>
      </div>
    </BlurFade>
  );
}
