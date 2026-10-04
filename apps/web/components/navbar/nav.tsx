import React from "react"
import type { Route } from "next"
import Link from "next/link"

import type { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

export function Nav({
  items,
  activeId,
  className,
  exactMatch = false,
}: {
  items: NavItem<Route>[]
  activeId?: string
  className?: string
  exactMatch?: boolean
}) {
  return (
    <nav
      data-active-id={activeId}
      className={cn("flex items-center gap-5 sm:gap-6", className)}
    >
      {items.map(({ title, href }) => {
        const isExternal = href.startsWith("http")
        const isActive = exactMatch
          ? activeId === href
          : activeId === href ||
            (href === "/"
              ? ["/", "/index"].includes(activeId || "")
              : !isExternal && activeId?.startsWith(href))

        return (
          <NavItem
            key={href}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-current={isActive ? "page" : undefined}
          >
            {title}
          </NavItem>
        )
      })}
    </nav>
  )
}

export function NavItem({
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "text-[14px] font-normal tracking-tight text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-foreground aria-[current=page]:font-medium",
        className
      )}
      {...props}
    />
  )
}
