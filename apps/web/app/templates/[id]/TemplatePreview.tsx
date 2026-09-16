"use client";

import { useState } from "react";
import { Monitor, Smartphone, Globe } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface TemplatePreviewProps {
  title: string;
  liveLink: string;
  desktopImage?: string;
  mobileImage?: string;
}

export function TemplatePreview({ title, liveLink, desktopImage, mobileImage }: TemplatePreviewProps) {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  
  // If no images provided, show iframe fallback
  if (!desktopImage && !mobileImage) {
    return (
      <div className="-mx-4 sm:-mx-6 border-y border-border overflow-hidden bg-card/20">
        {/* Browser Chrome */}
        <div className="bg-muted/30 border-b border-border px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <div className="size-2.5 rounded-full bg-border" />
            <div className="size-2.5 rounded-full bg-border" />
            <div className="size-2.5 rounded-full bg-border" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground truncate">
            <Globe className="size-3.5 text-muted-foreground/70" />
            <span className="truncate">{liveLink}</span>
          </div>
          <div className="w-8" />
        </div>
        <div className="aspect-video overflow-hidden">
          <iframe
            src={liveLink}
            title={`${title} Preview`}
            className="w-full h-full border-none"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* View Toggle */}
      {(desktopImage && mobileImage) && (
        <div className="flex items-center gap-1 p-1 bg-muted/40 border border-border/70 rounded-full w-fit mb-6 mx-auto">
          <button
            onClick={() => setViewMode("desktop")}
            aria-pressed={viewMode === "desktop"}
            aria-label="Switch to desktop view"
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
              viewMode === "desktop"
                ? "bg-foreground text-background shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Monitor className="size-3.5" />
            Desktop
          </button>
          <button
            onClick={() => setViewMode("mobile")}
            aria-pressed={viewMode === "mobile"}
            aria-label="Switch to mobile view"
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
              viewMode === "mobile"
                ? "bg-foreground text-background shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Smartphone className="size-3.5" />
            Mobile
          </button>
        </div>
      )}

      {/* Preview Area */}
      <AnimatePresence mode="wait">
        {viewMode === "desktop" && desktopImage ? (
          <motion.div
            key="desktop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="-mx-4 sm:-mx-6 border-y border-border overflow-hidden bg-card/10"
          >
            {/* Browser Bar */}
            <div className="bg-muted/30 border-b border-border px-4 sm:px-6 py-2 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <div className="size-2 rounded-full bg-border" />
                <div className="size-2 rounded-full bg-border" />
                <div className="size-2 rounded-full bg-border" />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground truncate">
                <Globe className="size-3 text-muted-foreground/70" />
                <span className="truncate">{liveLink}</span>
              </div>
              <div className="w-8" />
            </div>
            
            {/* Desktop Screenshot */}
            <div className="overflow-hidden">
              <Image
                src={desktopImage}
                alt={`${title} Desktop View`}
                width={1920}
                height={1080}
                className="w-full h-auto block rounded-none"
                priority
              />
            </div>
          </motion.div>
        ) : viewMode === "mobile" && mobileImage ? (
          <motion.div
            key="mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex justify-center -mx-4 sm:-mx-6 py-6 border-y border-border bg-card/10"
          >
            {/* Minimal Mobile Container */}
            <div className="relative w-[280px] sm:w-[320px] rounded-2xl border-2 border-border bg-background p-2 shadow-lg">
              <div className="overflow-hidden rounded-xl bg-card">
                <Image
                  src={mobileImage}
                  alt={`${title} Mobile View`}
                  width={390}
                  height={844}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      
      {/* Caption */}
      <p className="mt-3 text-xs text-center font-mono text-muted-foreground">
        {viewMode === "desktop" ? "Desktop" : "Mobile"} view · {title}
      </p>
    </div>
  );
}
