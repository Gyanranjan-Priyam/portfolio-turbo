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
import { SoundToggle } from "@/components/ui/sound"

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
          className="w-56 rounded-none p-1.5 border border-border bg-popover/95 backdrop-blur-md shadow-2xl"
          side="bottom"
          align="end"
          sideOffset={8}
          finalFocus={false}
        >
          <div className="flex flex-col gap-0.5">
            {items.map((link) => {
              // Section with sub-items (e.g. Works -> Projects, Templates)
              if (link.items && link.items.length > 0) {
                return (
                  <div key={link.title} className="flex flex-col gap-0.5 pt-1">
                    <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/70 font-semibold">
                      // {link.title}
                    </span>
                    <div className="pl-1.5 flex flex-col gap-0.5 border-l border-border/60 ml-3">
                      {link.items.map((sub, index) => {
                        const isSubExternal = sub.href.startsWith("http")
                        const isSubActive =
                          pathname === sub.href ||
                          (!isSubExternal && pathname?.startsWith(sub.href))

                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            target={isSubExternal ? "_blank" : undefined}
                            rel={isSubExternal ? "noopener noreferrer" : undefined}
                            aria-current={isSubActive ? "page" : undefined}
                            className="rounded-none px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground flex items-center justify-between"
                            onClick={() => handleOpenChange(false)}
                            data-sound="select"
                          >
                            <span className="font-sans font-medium text-foreground">
                              {sub.title}
                            </span>
                            <span className="font-mono text-[10px] text-muted-foreground/60">
                              0{index + 1}
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              }

              if (!link.href) return null
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
                  className="rounded-none px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground"
                  onClick={() => handleOpenChange(false)}
                  data-sound="select"
                >
                  {link.title}
                </Link>
              )
            })}
            <div className="pt-1 mt-1 border-t border-border/70 flex items-center justify-between px-2.5 py-0.5">
              <span className="text-[11px] font-mono text-muted-foreground">Sound</span>
              <SoundToggle />
            </div>
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
      className="group relative flex h-8 w-8 touch-manipulation flex-col items-center justify-center gap-1 border-none p-0 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 active:scale-95 rounded-none"
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle Navigation Menu"
      data-sound="open"
      {...props}
    >
      <span className="flex h-0.5 w-3.5 transform rounded-[1px] bg-foreground transition-transform group-data-popup-open:translate-y-0.75 group-data-popup-open:rotate-45" />
      <span className="flex h-0.5 w-3.5 transform rounded-[1px] bg-foreground transition-transform group-data-popup-open:-translate-y-0.75 group-data-popup-open:-rotate-45" />
    </Button>
  )
}

export default NavMobile
