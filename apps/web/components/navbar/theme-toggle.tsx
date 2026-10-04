"use client"

import * as React from "react"
import { useThemeToggle } from "@/components/motion/theme-toggle"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { isDark, mounted, toggle } = useThemeToggle()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted && isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors cursor-pointer",
        className
      )}
    >
      {/* Split circle / contrast icon matching the reference screenshot */}
      <svg
        viewBox="0 0 24 24"
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-300",
          mounted && isDark ? "rotate-180" : "rotate-0"
        )}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-16v16c4.41 0 8-3.59 8-8s-3.59-8-8-8z" />
      </svg>
    </button>
  )
}
