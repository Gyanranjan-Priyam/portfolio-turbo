import React from "react"
import { cn } from "@/lib/utils"

export function PriyamMark({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 68 28"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto text-foreground shrink-0 transition-opacity hover:opacity-80", className)}
      aria-hidden="true"
      {...props}
    >
      {/* Letter 'G' in pixel style */}
      {/* Top bar */}
      <rect x="0" y="0" width="28" height="6" rx="1" />
      {/* Left bar */}
      <rect x="0" y="0" width="6" height="28" rx="1" />
      {/* Bottom bar */}
      <rect x="0" y="22" width="28" height="6" rx="1" />
      {/* Right bottom stem */}
      <rect x="22" y="12" width="6" height="16" rx="1" />
      {/* Middle crossbar */}
      <rect x="12" y="12" width="16" height="6" rx="1" />

      {/* Letter 'P' in pixel style */}
      {/* Left bar */}
      <rect x="38" y="0" width="6" height="28" rx="1" />
      {/* Top bar */}
      <rect x="38" y="0" width="28" height="6" rx="1" />
      {/* Right upper bar */}
      <rect x="60" y="0" width="6" height="16" rx="1" />
      {/* Middle bar */}
      <rect x="38" y="12" width="28" height="6" rx="1" />
    </svg>
  )
}
