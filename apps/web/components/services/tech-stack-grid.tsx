"use client";

import { cn } from "@/lib/utils";
import { AnimatedTechnologyShowcase } from "@/components/services/animated-technology-showcase";
import { SHARED_TECHNOLOGIES } from "@/data/technologies-showcase";

export function TechStackGrid({ className }: { className?: string }) {
  return (
    <div className={cn("w-full bg-background relative select-text", className)}>
      {/* ------------------------------------------------------------------ */}
      {/* Top Header Bar matching reference image                            */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-3.5 bg-background border-b border-border">
        <div className="flex items-center gap-2 select-none shrink-0">
          <span className="w-1.5 h-4 bg-foreground inline-block rounded-xs" />
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground">
            Tech Stack I Work With
          </span>
          <span className="text-xs font-mono text-muted-foreground/70">
            ({SHARED_TECHNOLOGIES.length})
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 4-Column Animated Rotating Showcase with Framer Motion             */}
      {/* ------------------------------------------------------------------ */}
      <AnimatedTechnologyShowcase />
    </div>
  );
}

export default TechStackGrid;
