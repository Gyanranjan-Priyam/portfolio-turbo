"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";

export function BottomBlur() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide the bottom blur as soon as the footer enters the viewport
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        // Start fading out right as the top of the footer reaches the bottom of the viewport
        rootMargin: "0px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed bottom-0 inset-x-0 z-30 h-20 sm:h-28 md:h-20 select-none overflow-hidden transition-opacity duration-300 ease-out",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <ProgressiveBlur
        position="bottom"
        height="100%"
        blurLevels={[0.5, 1, 2, 4, 8, 12, 16, 24]}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </div>
  );
}
