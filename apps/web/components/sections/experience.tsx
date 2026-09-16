"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { experiences } from "@/data/experienceData";
import { BlurFade } from "@/components/ui/blur-fade";

import { useLoaderStore } from "@/components/loader-component";

function CloseIcon() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 text-muted-foreground"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
}

function ExpandedExperienceCard({
  active,
  id,
  onClose,
}: {
  active: (typeof experiences)[number];
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
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md h-full w-full touch-none overscroll-none"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 grid place-items-center p-4 pointer-events-none">
        <motion.div
          layoutId={`card-${active.id}-${id}`}
          ref={ref}
          data-lenis-prevent
          className="pointer-events-auto text-sm w-full max-w-md max-h-[90vh] overflow-hidden rounded-sm border bg-card shadow-lg font-mono flex flex-col"
        >
          <div className="flex items-start justify-between p-5 flex-shrink-0">
            <div className="flex items-center gap-4">
              <motion.div layoutId={`avatar-${active.id}-${id}`}>
                <Avatar className="size-14 border bg-black p-1.5">
                  <AvatarImage src={active.logo} alt={active.company} className="object-contains" />
                  <AvatarFallback className="text-xs font-bold font-mono">
                    {active.initials}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`company-${active.id}-${id}`}
                  className="text-md font-semibold font-mono"
                >
                  {active.company}
                </motion.h3>
                <motion.p
                  layoutId={`title-${active.id}-${id}`}
                  className="text-md text-muted-foreground font-mono"
                >
                  {active.title}
                </motion.p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1 transition-colors hover:bg-muted"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="border-t px-5 py-4 flex-1 overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <motion.p
              layoutId={`period-${active.id}-${id}`}
              className="mb-3 text-sm font-medium text-muted-foreground font-mono"
            >
              {active.period}
            </motion.p>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-md leading-relaxed text-muted-foreground font-mono"
            >
              {Array.isArray(active.content) ? (
                <ul className="space-y-2 list-none">
                  {active.content.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                active.content
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>,
    document.body,
  );
}

export function ExperienceSection() {
  const [active, setActive] = useState<(typeof experiences)[number] | null>(
    null,
  );
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

  return (
    <section id="experience" className="py-8">
      <BlurFade delay={0.04} inView>
        <h2 className="mb-6 text-3xl font-bold font-sans">
          Work Experience
        </h2>
      </BlurFade>

      <AnimatePresence>
        {active && (
          <ExpandedExperienceCard
            active={active}
            id={id}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>

      {/* List */}
      <div className="space-y-1">
        {experiences.map((exp, i) => (
          <BlurFade key={exp.id} delay={0.04 + i * 0.05} inView>
            <motion.div
              layoutId={`card-${exp.id}-${id}`}
              key={exp.id}
              onClick={() => setActive(exp)}
              className="flex cursor-pointer items-center gap-4 rounded-xl p-3 transition-colors hover:bg-muted/50"
            >
              <motion.div layoutId={`avatar-${exp.id}-${id}`}>
                <Avatar className="size-10 border">
                  <AvatarImage src={exp.logo} alt={exp.company} />
                  <AvatarFallback className="text-[10px] font-bold font-mono">
                    {exp.initials}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              <div className="flex-1 min-w-0">
                <motion.p
                  layoutId={`company-${exp.id}-${id}`}
                  className="text-md font-semibold leading-tight font-mono"
                >
                  {exp.company}
                </motion.p>
                <motion.p
                  layoutId={`title-${exp.id}-${id}`}
                  className="text-xs text-muted-foreground font-mono"
                >
                  {exp.title}
                </motion.p>
              </div>
              <motion.span
                layoutId={`period-${exp.id}-${id}`}
                className="shrink-0 text-xs text-muted-foreground text-right font-mono"
              >
                {exp.period}
              </motion.span>
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
