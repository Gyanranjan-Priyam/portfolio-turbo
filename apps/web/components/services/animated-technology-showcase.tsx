"use client";

import { useReducer, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { TechIcon } from "@/components/tech-icons";
import { PlusCross } from "@/components/ui/plus-cross";
import {
  SHARED_TECHNOLOGIES,
  INITIAL_SHOWCASE_ITEMS,
  type TechnologyItem,
} from "@/data/technologies-showcase";

/* -------------------------------------------------------------------------- */
/* State & Collision-Free Rotation Reducer                                    */
/* -------------------------------------------------------------------------- */

type ShowcaseState = {
  current: [TechnologyItem, TechnologyItem, TechnologyItem, TechnologyItem];
};

type Action = {
  type: "ROTATE_COLUMN";
  columnIndex: 0 | 1 | 2 | 3;
};

function showcaseReducer(state: ShowcaseState, action: Action): ShowcaseState {
  if (action.type !== "ROTATE_COLUMN") return state;
  const col = action.columnIndex;

  // 1. Collect IDs currently displayed in the other three columns
  const otherVisibleIds = state.current
    .filter((_, idx) => idx !== col)
    .map((tech) => tech.id);

  // 2. Identify the technology currently in this column to avoid immediate repeat
  const currentTechId = state.current[col].id;

  // 3. Filter eligible candidates from the shared collection:
  //    Must NOT be visible in any other column AND must NOT be the current tech in this column
  let candidates = SHARED_TECHNOLOGIES.filter(
    (tech) => !otherVisibleIds.includes(tech.id) && tech.id !== currentTechId
  );

  // Fallback safety (if pool were somehow constrained)
  if (candidates.length === 0) {
    candidates = SHARED_TECHNOLOGIES.filter(
      (tech) => !otherVisibleIds.includes(tech.id)
    );
  }

  // Safety guard against empty pool
  if (candidates.length === 0) {
    return state;
  }

  // 4. Random selection from candidate pool
  const selectedIndex = Math.floor(Math.random() * candidates.length);
  const nextTech = candidates[selectedIndex];

  // 5. Produce next state with updated column
  const nextCurrent = [...state.current] as [
    TechnologyItem,
    TechnologyItem,
    TechnologyItem,
    TechnologyItem
  ];
  nextCurrent[col] = nextTech;

  return {
    ...state,
    current: nextCurrent,
  };
}

/* -------------------------------------------------------------------------- */
/* Framer Motion 3D Bottom-to-Top Flip Animation Variants                     */
/* -------------------------------------------------------------------------- */

const flip3dVariants: Variants = {
  initial: {
    opacity: 0,
    rotateX: 90,
    y: 18,
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      opacity: { duration: 0.35, ease: "easeOut" },
      rotateX: { duration: 0.52, ease: [0.16, 1, 0.3, 1] },
      y: { duration: 0.52, ease: [0.16, 1, 0.3, 1] },
    },
  },
  exit: {
    opacity: 0,
    rotateX: -90,
    y: -18,
    transition: {
      opacity: { duration: 0.22, ease: "linear" },
      rotateX: { duration: 0.48, ease: [0.4, 0, 0.2, 1] },
      y: { duration: 0.48, ease: [0.4, 0, 0.2, 1] },
    },
  },
};

const reducedMotionVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

/* -------------------------------------------------------------------------- */
/* Logo Display Component (Authentic Brand Colors & Selective Inversion)       */
/* -------------------------------------------------------------------------- */

function TechLogoDisplay({ item }: { item: TechnologyItem }) {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return (
      <TechIcon
        name={item.name}
        className={cn(
          "size-7 sm:size-8 transition-transform duration-200 group-hover:scale-105",
          item.monochrome !== false ? "text-foreground" : ""
        )}
        colored={item.monochrome === false}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={item.logo}
      alt={`${item.name} logo`}
      onError={() => setUseFallback(true)}
      className={cn(
        "size-7 sm:size-8 object-contain transition-transform duration-200 group-hover:scale-105",
        // Selective dark mode inversion: only inverted if explicitly monochrome
        item.monochrome !== false && "dark:invert"
      )}
      loading="eager"
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Main Animated Showcase Component                                           */
/* -------------------------------------------------------------------------- */

export function AnimatedTechnologyShowcase({
  className,
}: {
  className?: string;
}) {
  const [state, dispatch] = useReducer(showcaseReducer, {
    current: INITIAL_SHOWCASE_ITEMS,
  });

  const shouldReduceMotion = useReducedMotion();

  // Recursive timeout-based rotation engine with independent staggered delays
  useEffect(() => {
    if (shouldReduceMotion) return;

    let isMounted = true;
    const timeouts: Array<NodeJS.Timeout | number> = [];

    // Staggered initial starts: col 0 at 2.4s, col 1 at 3.1s, col 2 at 3.8s, col 3 at 4.5s
    const initialDelays = [2400, 3100, 3800, 4500];

    ([0, 1, 2, 3] as const).forEach((colIndex) => {
      function scheduleNext() {
        if (!isMounted) return;

        // Randomize subsequent interval between 2.5s and 3.2s
        const nextInterval = 2500 + Math.random() * 700;

        timeouts[colIndex] = setTimeout(() => {
          if (!isMounted) return;
          dispatch({ type: "ROTATE_COLUMN", columnIndex: colIndex });
          scheduleNext();
        }, nextInterval);
      }

      // Initial kickoff
      timeouts[colIndex] = setTimeout(() => {
        if (!isMounted) return;
        dispatch({ type: "ROTATE_COLUMN", columnIndex: colIndex });
        scheduleNext();
      }, initialDelays[colIndex]);
    });

    return () => {
      isMounted = false;
      timeouts.forEach((timerId) => clearTimeout(timerId));
    };
  }, [shouldReduceMotion]);

  return (
    <div className={cn("w-full relative select-text", className)}>
      {/* 4-Column on Desktop (≥1024px), 2x2 Grid on Tablet/Mobile (<1024px) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border relative">
        {state.current.map((item, colIndex) => {
          // Layout-specific intersection cross positions
          // Desktop: 1 row of 4 columns
          const isLastDesktopCol = colIndex === 3;
          // Mobile/Tablet: 2 rows of 2 columns
        const isMobileRow2 = colIndex >= 2;
          const isMobileCol2 = colIndex % 2 === 1;

          return (
            <div
              key={colIndex}
              className="group relative bg-background p-4 sm:p-6 lg:p-7 flex flex-col items-center justify-center text-center"
            >
              {/* Technical Blueprint PlusCross Markers on Intersections */}
              {/* Top-Left Corner */}
              <PlusCross className="absolute -top-[5.5px] -left-[5.5px] z-10 size-[11px] text-muted-foreground/50 pointer-events-none select-none" />

              {/* Desktop Top-Right on column 4 */}
              {isLastDesktopCol && (
                <PlusCross className="absolute -top-[5.5px] -right-[5.5px] z-10 hidden lg:block size-[11px] text-muted-foreground/50 pointer-events-none select-none" />
              )}

              {/* Mobile/Tablet Top-Right on column 2 */}
              {isMobileCol2 && (
                <PlusCross className="absolute -top-[5.5px] -right-[5.5px] z-10 lg:hidden size-[11px] text-muted-foreground/50 pointer-events-none select-none" />
              )}

              {/* Desktop Bottom-Left on all 4 columns */}
              <PlusCross className="absolute -bottom-[5.5px] -left-[5.5px] z-10 hidden lg:block size-[11px] text-muted-foreground/50 pointer-events-none select-none" />

              {/* Desktop Bottom-Right on column 4 */}
              {isLastDesktopCol && (
                <PlusCross className="absolute -bottom-[5.5px] -right-[5.5px] z-10 hidden lg:block size-[11px] text-muted-foreground/50 pointer-events-none select-none" />
              )}

              {/* Mobile/Tablet Bottom-Left on row 2 */}
              {isMobileRow2 && (
                <PlusCross className="absolute -bottom-[5.5px] -left-[5.5px] z-10 lg:hidden size-[11px] text-muted-foreground/50 pointer-events-none select-none" />
              )}

              {/* Mobile/Tablet Bottom-Right on row 2 col 2 */}
              {isMobileRow2 && isMobileCol2 && (
                <PlusCross className="absolute -bottom-[5.5px] -right-[5.5px] z-10 lg:hidden size-[11px] text-muted-foreground/50 pointer-events-none select-none" />
              )}

              {/* Fixed Dimension 3D Viewport Container (Zero Layout Shifts) */}
              <div
                className="relative w-full h-[98px] sm:h-[110px] flex items-center justify-center overflow-hidden"
                style={{ perspective: 700 }}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={item.id}
                    variants={
                      shouldReduceMotion ? reducedMotionVariants : flip3dVariants
                    }
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full flex flex-col items-center justify-center text-center select-text"
                    style={{
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {/* Fixed Height Logo Container */}
                    <div className="h-8 sm:h-9 flex items-center justify-center mb-2 sm:mb-2.5">
                      <TechLogoDisplay item={item} />
                    </div>

                    {/* Technology Name */}
                    <span className="font-sans font-semibold text-xs sm:text-sm text-foreground tracking-tight block leading-tight mb-0.5 truncate max-w-full px-2">
                      {item.name}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnimatedTechnologyShowcase;
