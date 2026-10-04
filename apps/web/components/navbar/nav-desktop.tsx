"use client"

import type { Route } from "next"
import { usePathname } from "next/navigation"

import type { NavItem } from "@/types/nav"
import { Nav } from "@/components/navbar/nav"

export function NavDesktop({ items }: { items: NavItem<Route>[] }) {
  const pathname = usePathname()

  return <Nav className="hidden sm:flex font-sans" items={items} activeId={pathname} />
}
