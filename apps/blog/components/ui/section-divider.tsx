import * as React from "react";
import { cn } from "@/lib/utils";
import { PlusCross } from "@/components/ui/plus-cross";

export interface SectionDividerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  density?: "default" | "dense" | "subtle";
  variant?: "hatch" | "line";
  extendLines?: boolean;
  showPluses?: boolean;
  plusClassName?: string;
  lineClassName?: string;
}

/**
 * SectionDivider - Technical blueprint divider with diagonal stripe hatch pattern,
 * extended horizontal grid lines crossing into viewport margins, and plus markers at
 * the container boundary intersections.
 */
export function SectionDivider({
  className,
  density = "default",
  variant = "hatch",
  extendLines = true,
  showPluses = true,
  plusClassName,
  lineClassName,
  ...props
}: SectionDividerProps) {
  const densityClass =
    density === "dense"
      ? "stripe-divider-dense"
      : density === "subtle"
        ? "pattern-diagonal-stripes-subtle"
        : "stripe-divider";

  if (variant === "line") {
    return (
      <div
        role="separator"
        aria-hidden="true"
        className={cn(
          "relative -mx-4 sm:-mx-6 h-px border-t border-border select-none",
          className
        )}
        {...props}
      >
        {extendLines && (
          <>
            <div
              className={cn(
                "absolute top-0 right-full w-screen border-t border-border pointer-events-none",
                lineClassName
              )}
            />
            <div
              className={cn(
                "absolute top-0 left-full w-screen border-t border-border pointer-events-none",
                lineClassName
              )}
            />
          </>
        )}
        {showPluses && (
          <>
            <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <PlusCross className={plusClassName} />
            </div>
            <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <PlusCross className={plusClassName} />
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-hidden="true"
      className={cn(
        "relative -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border select-none",
        densityClass,
        className
      )}
      {...props}
    >
      {extendLines && (
        <>
          {/* Top-left horizontal extension */}
          <div
            className={cn(
              "absolute top-0 right-full w-screen border-t border-border pointer-events-none",
              lineClassName
            )}
          />
          {/* Top-right horizontal extension */}
          <div
            className={cn(
              "absolute top-0 left-full w-screen border-t border-border pointer-events-none",
              lineClassName
            )}
          />
          {/* Bottom-left horizontal extension */}
          <div
            className={cn(
              "absolute bottom-0 right-full w-screen border-b border-border pointer-events-none",
              lineClassName
            )}
          />
          {/* Bottom-right horizontal extension */}
          <div
            className={cn(
              "absolute bottom-0 left-full w-screen border-b border-border pointer-events-none",
              lineClassName
            )}
          />
        </>
      )}

      {showPluses && (
        <>
          {/* Top-left plus */}
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <PlusCross className={plusClassName} />
          </div>
          {/* Top-right plus */}
          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <PlusCross className={plusClassName} />
          </div>
          {/* Bottom-left plus */}
          <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
            <PlusCross className={plusClassName} />
          </div>
          {/* Bottom-right plus */}
          <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
            <PlusCross className={plusClassName} />
          </div>
        </>
      )}
    </div>
  );
}

/**
 * GridRow - A grid / table row with horizontal border line extensions to the screen edges
 * and plus markers at the container boundary intersections.
 */
export function GridRow({
  children,
  className,
  extendLine = true,
  showPlus = true,
  borderBottom = true,
  borderTop = false,
  lineClassName,
  plusClassName,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  extendLine?: boolean;
  showPlus?: boolean;
  borderBottom?: boolean;
  borderTop?: boolean;
  lineClassName?: string;
  plusClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative",
        borderTop && "border-t border-border/70",
        borderBottom && "border-b border-border/70",
        className
      )}
      {...props}
    >
      {borderTop && extendLine && (
        <>
          <div
            className={cn(
              "absolute top-0 right-full w-screen border-t border-border/70 pointer-events-none",
              lineClassName
            )}
          />
          <div
            className={cn(
              "absolute top-0 left-full w-screen border-t border-border/70 pointer-events-none",
              lineClassName
            )}
          />
        </>
      )}
      {borderTop && showPlus && (
        <>
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <PlusCross className={plusClassName} />
          </div>
          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <PlusCross className={plusClassName} />
          </div>
        </>
      )}

      {children}

      {borderBottom && extendLine && (
        <>
          <div
            className={cn(
              "absolute bottom-0 right-full w-screen border-b border-border/70 pointer-events-none",
              lineClassName
            )}
          />
          <div
            className={cn(
              "absolute bottom-0 left-full w-screen border-b border-border/70 pointer-events-none",
              lineClassName
            )}
          />
        </>
      )}
      {borderBottom && showPlus && (
        <>
          <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
            <PlusCross className={plusClassName} />
          </div>
          <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none">
            <PlusCross className={plusClassName} />
          </div>
        </>
      )}
    </div>
  );
}

export default SectionDivider;

