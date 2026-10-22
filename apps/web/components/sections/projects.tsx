"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ArrowRight, Globe, X } from "lucide-react";
import { IconBrandGithub as Github } from "@tabler/icons-react";
import Link from "next/link";
import projects from "@/data/projectsData";
import templates, { type Template } from "@/data/templateData";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";
import { TechBadge } from "@/components/tech-icons";
import { useLoaderStore } from "@/components/loader-component";
import { TextMorph } from "@/components/ui/text-morph";
import { cn } from "@/lib/utils";

type ProjectItem = (typeof projects)[number];
type TemplateItem = Template;
type WorkItem = ProjectItem | TemplateItem;

function ExpandedCard({
  active,
  id,
  onClose,
}: {
  active: WorkItem;
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
            data-sound="close"
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
              <motion.div
                layoutId={`button-${active.title}-${id}`}
                className="shrink-0"
              >
                <Link
                  href={active.link}
                  className="px-3.5 py-1.5 text-xs font-mono font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  Details <ArrowRight className="size-3" />
                </Link>
              </motion.div>
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
                    <TechBadge key={t} name={t} size="sm" />
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
    document.body
  );
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"projects" | "templates">("projects");
  const [active, setActive] = useState<WorkItem | null>(null);
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

  const currentItems =
    activeTab === "projects"
      ? projects.slice(0, 4)
      : templates.slice(0, 4);

  return (
    <section id="projects" className="py-8">
      {/* Header with TextMorph Heading & Segmented Switcher */}
      <BlurFade delay={0.04} inView>
        <div className="mb-6 flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center min-w-0">
            <TextMorph
              as="h2"
              className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-foreground select-none"
              ease={{ stiffness: 240, damping: 22 }}
            >
              {activeTab === "projects" ? "Projects" : "Templates"}
            </TextMorph>
          </div>

          {/* Segmented Tabs Switcher */}
          <div
            role="tablist"
            aria-label="Projects and Templates tabs"
            className="shrink-0 flex items-center rounded-full p-1 border border-border/80 bg-muted/20 backdrop-blur-xs"
          >
            <button
              type="button"
              role="tab"
              data-sound="select"
              aria-selected={activeTab === "projects"}
              onClick={() => {
                setActive(null);
                setActiveTab("projects");
              }}
              className={cn(
                "relative h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm font-mono font-medium rounded-full transition-colors cursor-pointer select-none inline-flex items-center justify-center",
                activeTab === "projects"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeTab === "projects" && (
                <motion.div
                  layoutId="active-work-tab"
                  className="absolute inset-0 bg-background rounded-full shadow-xs border border-border/70"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                Projects
                <span className="text-[10px] sm:text-[11px] opacity-60">({projects.length})</span>
              </span>
            </button>

            <button
              type="button"
              role="tab"
              data-sound="select"
              aria-selected={activeTab === "templates"}
              onClick={() => {
                setActive(null);
                setActiveTab("templates");
              }}
              className={cn(
                "relative h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm font-mono font-medium rounded-full transition-colors cursor-pointer select-none inline-flex items-center justify-center",
                activeTab === "templates"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeTab === "templates" && (
                <motion.div
                  layoutId="active-work-tab"
                  className="absolute inset-0 bg-background rounded-full shadow-xs border border-border/70"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                Templates
                <span className="text-[10px] sm:text-[11px] opacity-60">({templates.length})</span>
              </span>
            </button>
          </div>
        </div>
      </BlurFade>

      {/* Expanded Modal */}
      <AnimatePresence>
        {active && (
          <ExpandedCard
            active={active}
            id={id}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>

      {/* Cards List with animated transition */}
      <AnimatePresence mode="wait">
        <motion.ul
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="w-full space-y-3"
        >
          {currentItems.map((item, i) => (
            <BlurFade
              key={`card-${item.title}-${id}`}
              delay={0.04 + i * 0.04}
              inView
            >
              {/* Mobile layout – direct link */}
              <Link href={item.link} className="block md:hidden">
                <div className="group flex items-center justify-between p-3.5 rounded-sm border border-border/70 bg-card/40 dark:bg-neutral-900/30 hover:bg-muted/20 hover:border-foreground/30 transition-all">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="size-12 rounded-sm border border-border/60 object-cover object-top shrink-0"
                      width={100}
                      height={100}
                    />
                    <div className="min-w-0">
                      <h3 className="font-bold font-sans tracking-tight text-sm text-foreground uppercase truncate">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-muted-foreground truncate mt-0.5">
                        {item.company}
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
                layoutId={`card-${item.title}-${id}`}
                data-sound="open"
                onClick={() => setActive(item)}
                className="cursor-pointer hidden md:block"
              >
                <div className="group flex items-center justify-between p-3.5 sm:p-4 rounded-md border border-border/70 bg-card/40 dark:bg-neutral-900/30 hover:bg-muted/20 hover:border-foreground/30 transition-all">
                  <div className="flex items-center gap-4 min-w-0">
                    <motion.div
                      layoutId={`image-${item.title}-${id}`}
                      className="shrink-0"
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        className="size-13 sm:size-14 rounded-sm border border-border/60 object-cover object-top"
                        width={100}
                        height={100}
                      />
                    </motion.div>
                    <div className="min-w-0">
                      <motion.h3
                        layoutId={`title-${item.title}-${id}`}
                        className="font-bold font-sans tracking-tight text-sm sm:text-base text-foreground uppercase group-hover:text-foreground truncate"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${item.title}-${id}`}
                        className="text-xs sm:text-[13px] font-mono text-muted-foreground truncate mt-0.5"
                      >
                        {item.company}
                      </motion.p>
                    </div>
                  </div>
                  <motion.div
                    layoutId={`button-${item.title}-${id}`}
                    className="shrink-0 ml-3"
                  >
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-border/70 bg-muted/30 group-hover:bg-foreground group-hover:text-background text-foreground transition-all inline-flex items-center cursor-pointer">
                      Details
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </motion.ul>
      </AnimatePresence>

      {/* Dynamic View All Link */}
      <BlurFade delay={0.2} inView>
        <Link
          href={activeTab === "projects" ? "/projects" : "/templates"}
          className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>View All</span>
          <TextMorph
            as="span"
            ease={{ stiffness: 240, damping: 22 }}
          >
            {activeTab === "projects" ? "Projects" : "Templates"}
          </TextMorph>
          <ArrowRight className="size-3.5" />
        </Link>
      </BlurFade>
    </section>
  );
}

