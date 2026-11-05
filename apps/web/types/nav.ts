export type NavItem<T extends string = string> = {
  title: string
  href?: T
  items?: {
    title: string
    href: T
    description?: string
  }[]
}
