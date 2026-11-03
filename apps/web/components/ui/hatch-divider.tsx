import * as React from "react";
import { cn } from "@/lib/utils";
import { PlusCross } from "@/components/ui/plus-cross";

export interface HatchDividerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  density?: "default" | "dense" | "subtle";
  variant?: "bordered" | "border-y" | "ghost";
  rounded?: boolean;
  extendLines?: boolean;
  showPluses?: boolean;
}

/**
 * HatchDivider - A diagonal striped / blueprint hatch pattern divider band
 */
export function HatchDivider({
  className,
  density = "default",
  variant = "bordered",
  rounded = true,
  extendLines = false,
  showPluses = false,
  ...props
}: HatchDividerProps) {
  const densityClass =
    density === "dense"
      ? "stripe-divider-dense"
      : density === "subtle"
        ? "pattern-diagonal-stripes-subtle"
        : "pattern-diagonal-stripes";

  return (
    <div
      role="separator"
      aria-hidden="true"
      className={cn(
        "relative w-full h-7 sm:h-8 select-none",
        variant === "bordered" && "border border-border/80 bg-background/50 backdrop-blur-xs",
        variant === "border-y" && "border-y border-border/80 bg-background/50 backdrop-blur-xs",
        rounded && variant === "bordered" && "rounded-lg",
        densityClass,
        className
      )}
      {...props}
    >
      {extendLines && (
        <>
          <div className="absolute top-0 right-full w-screen border-t border-border/80 pointer-events-none" />
          <div className="absolute top-0 left-full w-screen border-t border-border/80 pointer-events-none" />
          <div className="absolute bottom-0 right-full w-screen border-b border-border/80 pointer-events-none" />
          <div className="absolute bottom-0 left-full w-screen border-b border-border/80 pointer-events-none" />
        </>
      )}

      {showPluses && (
        <>
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <PlusCross />
          </div>
          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <PlusCross />
          </div>
          <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
            <PlusCross />
          </div>
          <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
            <PlusCross />
          </div>
        </>
      )}
    </div>
  );
}

export default HatchDivider;
