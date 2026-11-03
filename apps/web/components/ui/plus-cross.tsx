import * as React from "react";
import { cn } from "@/lib/utils";

export interface PlusCrossProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

/**
 * PlusCross - Technical / architectural crosshair plus marker for grid intersections
 */
export function PlusCross({
  className,
  size = 11,
  ...props
}: PlusCrossProps) {
  return (
    <svg
      viewBox="0 0 11 11"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "size-[11px] text-foreground/80 dark:text-foreground/85 pointer-events-none select-none shrink-0",
        className
      )}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M5.5 0V11M0 5.5H11"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default PlusCross;

