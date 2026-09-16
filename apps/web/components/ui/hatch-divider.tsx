import * as React from "react";
import { cn } from "@/lib/utils";

export interface HatchDividerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  density?: "default" | "dense" | "subtle";
  variant?: "bordered" | "border-y" | "ghost";
  rounded?: boolean;
}

/**
 * HatchDivider - A diagonal striped / blueprint hatch pattern divider band
 */
export function HatchDivider({
  className,
  density = "default",
  variant = "bordered",
  rounded = true,
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
        "w-full h-7 sm:h-8 overflow-hidden bg-background/50 backdrop-blur-xs select-none",
        variant === "bordered" && "border border-border/80",
        variant === "border-y" && "border-y border-border/80",
        rounded && variant === "bordered" && "rounded-lg",
        densityClass,
        className
      )}
      {...props}
    />
  );
}

export default HatchDivider;
