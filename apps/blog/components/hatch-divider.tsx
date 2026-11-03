import * as React from "react";
import {
  SectionDivider,
  type SectionDividerProps,
} from "@/components/ui/section-divider";

export interface HatchDividerProps extends SectionDividerProps {
  rounded?: boolean;
}

/**
 * HatchDivider - Technical blueprint divider with diagonal stripe hatch pattern,
 * extended horizontal grid lines crossing into viewport margins, and plus markers at
 * the container boundary intersections.
 */
export function HatchDivider({
  className,
  density = "default",
  variant = "hatch",
  extendLines = true,
  showPluses = true,
  ...props
}: HatchDividerProps) {
  return (
    <SectionDivider
      className={className}
      density={density}
      variant={variant === "line" ? "line" : "hatch"}
      extendLines={extendLines}
      showPluses={showPluses}
      {...props}
    />
  );
}

export default HatchDivider;
