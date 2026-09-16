"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ArrowRight, Globe, X } from "lucide-react";
import { IconBrandGithub as Github } from "@tabler/icons-react";
import Link from "next/link";
import templates from "@/data/templateData";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

import { useLoaderStore } from "@/components/loader-component";

function ExpandedCard({
  active,
  id,
  onClose,
}: {
  active: (typeof templates)[number];
  id: string;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, onClose);

  return createPortal(
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        data-lenis-prevent
        className="fixed inset-0 bg-background/80 backdrop-blur-md h-full w-full z-50 touch-none overscroll-none"
        onClick={onClose}
      />
      <div className="fixed inset-0 grid place-items-center z-50 pointer-events-none p-4">
        <motion.div
          layoutId={`card-${active.title}-${id}`}
          ref={ref}
          data-lenis-prevent
          className="pointer-events-auto relative w-full max-w-[95vw] sm:max-w-xl md:max-w-2xl max-h-[90vh] bg-card border border-border rounded-sm shadow-2xl overflow-hidden flex flex-col overscroll-contain"
        >
          <motion.button
            key={`button-close-${active.title}-${id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.05 } }}
            className="absolute top-3 right-3 z-10 flex items-center justify-center bg-background/80 backdrop-blur-md border border-border/80 rounded-full size-8 text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-sm"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X className="size-4" />
          </motion.button>
          
          <div className="flex-shrink-0">
            <motion.div layoutId={`image-${active.title}-${id}`}>
              <Image
                src={active.img}
                alt={active.title}
                width={800}
                height={400}
                className="w-full h-52 sm:h-64 border-b border-border object-cover object-top"
              />
            </motion.div>
          </div>

          <div
            data-lenis-prevent
            className="flex-1 overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-5 sm:p-6"
          >
            <div className="flex justify-between items-start gap-4 mb-3">
              <div>
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-bold font-sans text-lg sm:text-xl tracking-tight text-foreground uppercase"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.title}-${id}`}
                  className="text-xs sm:text-sm font-mono text-muted-foreground mt-0.5"
                >
                  {active.company} · {active.date}
                </motion.p>
              </div>
              <Link
                href={active.link}
                className="px-3.5 py-1.5 text-xs font-mono font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors flex-shrink-0 inline-flex items-center gap-1"
              >
                Details <ArrowRight className="size-3" />
              </Link>
            </div>

            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <p className="text-xs sm:text-[13px] font-mono leading-relaxed text-muted-foreground">
                {active.desc[0]}
              </p>

              {active.tech && active.tech.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {active.tech.map((t: string) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/70 bg-muted/20 px-2.5 py-0.5 text-[11px] font-mono font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2.5 pt-2">
                {active.liveLink && (
                  <a
                    href={active.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg border border-border/70 bg-card hover:bg-muted text-foreground transition-colors"
                  >
                    <Globe className="size-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
                {active.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg border border-border/70 bg-card hover:bg-muted text-foreground transition-colors"
                  >
                    <Github className="size-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>,
    document.body,
  );
}

export function TemplatesSection() {
  const [active, setActive] = useState<(typeof templates)[number] | null>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    
    const lenis = useLoaderStore.getState().lenis;
    if (active) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [active]);

  const displayTemplates = templates.slice(0, 4);

  return (
    <section id="templates" className="py-8">
      <BlurFade delay={0.04} inView>
        <div className="mb-6 flex items-baseline gap-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-foreground">
            Templates
          </h2>
        </div>
      </BlurFade>

      <AnimatePresence>
        {active && (
          <ExpandedCard
            active={active}
            id={id}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>

      <ul className="w-full space-y-3">
        {displayTemplates.map((template, i) => (
          <BlurFade
            key={`card-${template.title}-${id}`}
            delay={0.04 + i * 0.05}
            inView
          >
            {/* Mobile layout – direct link */}
            <Link href={template.link} className="block md:hidden">
              <div className="group flex items-center justify-between p-3.5 rounded-xl border border-border/70 bg-card/40 dark:bg-neutral-900/30 hover:bg-muted/20 hover:border-foreground/30 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <Image
                    src={template.img}
                    alt={template.title}
                    className="size-12 rounded-lg border border-border/60 object-cover object-top shrink-0"
                    width={100}
                    height={100}
                  />
                  <div className="min-w-0">
                    <h3 className="font-bold font-sans tracking-tight text-sm text-foreground uppercase truncate">
                      {template.title}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground truncate mt-0.5">
                      {template.company}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium border border-border/70 bg-muted/30 text-foreground shrink-0 ml-2">
                  Details
                </span>
              </div>
            </Link>

            {/* Desktop layout – modal card */}
            <motion.div
              layoutId={`card-${template.title}-${id}`}
              onClick={() => setActive(template)}
              className="cursor-pointer hidden md:block"
            >
              <div className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-border/70 bg-card/40 dark:bg-neutral-900/30 hover:bg-muted/20 hover:border-foreground/30 transition-all">
                <div className="flex items-center gap-4 min-w-0">
                  <motion.div layoutId={`image-${template.title}-${id}`} className="shrink-0">
                    <Image
                      src={template.img}
                      alt={template.title}
                      className="size-13 sm:size-14 rounded-lg border border-border/60 object-cover object-top"
                      width={100}
                      height={100}
                    />
                  </motion.div>
                  <div className="min-w-0">
                    <motion.h3
                      layoutId={`title-${template.title}-${id}`}
                      className="font-bold font-sans tracking-tight text-sm sm:text-base text-foreground uppercase group-hover:text-foreground truncate"
                    >
                      {template.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${template.title}-${id}`}
                      className="text-xs sm:text-[13px] font-mono text-muted-foreground truncate mt-0.5"
                    >
                      {template.company}
                    </motion.p>
                  </div>
                </div>
                <motion.button
                  layoutId={`button-${template.title}-${id}`}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-border/70 bg-muted/30 group-hover:bg-foreground group-hover:text-background text-foreground transition-all shrink-0 cursor-pointer ml-3"
                >
                  Details
                </motion.button>
              </div>
            </motion.div>
          </BlurFade>
        ))}
      </ul>

      <BlurFade delay={0.3} inView>
        <Link
          href="/templates"
          className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          View All Templates <ArrowRight className="size-3.5" />
        </Link>
      </BlurFade>
    </section>
  );
}
