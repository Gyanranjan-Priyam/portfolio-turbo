"use client"

import { useCallback, useState } from "react"
import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"

import type { NavItem } from "@/types/nav"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { haptic } from "@/lib/haptic"

export function NavMobile({ items }: { items: NavItem<Route>[] }) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 40rem)") // sm breakpoint
  const pathname = usePathname()

  const handleOpenChange = useCallback((newOpen: boolean) => {
    haptic()
    setOpen(newOpen)
  }, [])

  if (isDesktop) {
    return null
  }

  return (
    <div className="sm:hidden flex items-center">
      <Popover open={open} onOpenChange={handleOpenChange} modal>
        <PopoverTrigger render={<NavMobileTrigger />} />

        <PopoverContent
          className="w-48 rounded-xl p-1.5 border border-border bg-popover shadow-lg"
          side="bottom"
          align="end"
          sideOffset={8}
          finalFocus={false}
        >
          <div className="flex flex-col gap-0.5">
            {items.map((link) => {
              const isExternal = link.href.startsWith("http")
              const isActive =
                pathname === link.href ||
                (link.href === "/"
                  ? ["/", "/index"].includes(pathname || "")
                  : !isExternal && pathname?.startsWith(link.href))

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-current={isActive ? "page" : undefined}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground"
                  onClick={() => handleOpenChange(false)}
                >
                  {link.title}
                </Link>
              )
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

function NavMobileTrigger(
  props: Omit<React.ComponentProps<typeof Button>, "children">
) {
  return (
    <Button
      className="group relative flex h-8 w-8 touch-manipulation flex-col items-center justify-center gap-1 border-none p-0 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 active:scale-95"
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle Navigation Menu"
      {...props}
    >
      <span className="flex h-0.5 w-3.5 transform rounded-[1px] bg-foreground transition-transform group-data-popup-open:translate-y-0.75 group-data-popup-open:rotate-45" />
      <span className="flex h-0.5 w-3.5 transform rounded-[1px] bg-foreground transition-transform group-data-popup-open:-translate-y-0.75 group-data-popup-open:-rotate-45" />
    </Button>
  )
}

export default NavMobile
