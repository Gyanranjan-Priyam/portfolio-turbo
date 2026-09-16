"use client";

import { useState } from "react";
import { ChevronsUpDown, ChevronUp, Code2 } from "lucide-react";

interface FeatureGroup {
  category: string;
  items: string[];
}

export function FeaturesAccordion({ features }: { features: FeatureGroup[] }) {
  // Default open the first feature group for instant engagement
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggle = (i: number) => {
    setOpenIndices((prev) =>
      prev.includes(i) ? prev.filter((idx) => idx !== i) : [...prev, i]
    );
  };

  return (
    <div className="-mx-4 sm:-mx-6 border-t border-b border-border divide-y divide-border">
      {features.map((group, i) => {
        const isOpen = openIndices.includes(i);
        return (
          <div key={i} className="group/item transition-colors">
            {/* Header row */}
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-start justify-between gap-4 px-4 sm:px-6 py-4 text-left transition-colors hover:bg-muted/30 cursor-pointer"
            >
              <div className="flex items-start gap-3.5 min-w-0">
                {/* Minimal keycap code badge matching reference */}
                <div className="size-8 shrink-0 mt-0.5 rounded-lg border border-border/80 bg-muted/40 dark:bg-neutral-900 flex items-center justify-center text-muted-foreground group-hover/item:text-foreground group-hover/item:border-foreground/40 transition-colors shadow-2xs select-none">
                  <Code2 className="size-4" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold font-sans text-foreground leading-snug group-hover/">
                    {group.category}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5 text-xs font-mono text-muted-foreground">
                    <span>{group.items.length} {group.items.length === 1 ? "feature" : "features"}</span>
                    <span className="text-muted-foreground/40">&bull;</span>
                    <span className="text-muted-foreground/70">Production Ready</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 mt-1.5 p-1 text-muted-foreground group-hover/item:text-foreground transition-colors">
                {isOpen ? (
                  <ChevronUp className="size-4" />
                ) : (
                  <ChevronsUpDown className="size-4" />
                )}
              </div>
            </button>

            {/* Expandable Bullet List */}
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <div className="px-4 sm:px-6 pb-5 pt-1">
                  <ul className="space-y-2 pl-11.5 list-none">
                    {group.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-mono"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/60" />
                        <span className="text-muted-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
