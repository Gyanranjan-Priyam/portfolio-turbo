"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  IconSearch,
  IconHome,
  IconBriefcase,
  IconTemplate,
  IconNotebook,
  IconStack2,
  IconDownload,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconSun,
  IconMoon,
  IconArrowRight,
  IconX,
} from "@tabler/icons-react"
import projects from "@/data/projectsData"
import templates from "@/data/templateData"
import { BLOG_URL } from "@/lib/config"
import { useThemeToggle } from "@/components/motion/theme-toggle"
import { cn } from "@/lib/utils"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [isMac, setIsMac] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const router = useRouter()
  const { isDark, toggle: toggleTheme } = useThemeToggle()

  React.useEffect(() => {
    setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform || ""))
  }, [])

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === "Escape") {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // Lock body scroll when open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      setSearch("")
      setSelectedIndex(0)
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Build searchable items
  const allItems = React.useMemo(() => {
    const navItems = [
      {
        id: "nav-home",
        category: "Navigation",
        title: "Home",
        subtitle: "Go to overview & summary",
        icon: <IconHome className="h-4 w-4" />,
        action: () => router.push("/"),
      },
      {
        id: "nav-projects",
        category: "Navigation",
        title: "Projects",
        subtitle: `Explore ${projects.length}+ production builds`,
        icon: <IconBriefcase className="h-4 w-4" />,
        action: () => router.push("/projects"),
      },
      {
        id: "nav-templates",
        category: "Navigation",
        title: "Templates",
        subtitle: `Explore ${templates.length}+ starter kits`,
        icon: <IconTemplate className="h-4 w-4" />,
        action: () => router.push("/templates"),
      },
      {
        id: "nav-blog",
        category: "Navigation",
        title: "Blog",
        subtitle: "Technical articles & deep dives",
        icon: <IconNotebook className="h-4 w-4" />,
        action: () => window.open(BLOG_URL, "_blank"),
      },
      {
        id: "nav-experience",
        category: "Navigation",
        title: "Experience",
        subtitle: "Work experience & career milestones",
        icon: <IconStack2 className="h-4 w-4" />,
        action: () => router.push("/#experience"),
      },
      {
        id: "nav-resume",
        category: "Navigation",
        title: "Resume (PDF)",
        subtitle: "Download official resume",
        icon: <IconDownload className="h-4 w-4" />,
        action: () => window.open("/resume/resume.pdf", "_blank"),
      },
    ]

    const projectItems = projects.map((p) => ({
      id: `project-${p.id}`,
      category: "Projects",
      title: p.title,
      subtitle: Array.isArray(p.desc) ? p.desc[0] : p.desc,
      icon: <IconBriefcase className="h-4 w-4" />,
      action: () => router.push(p.link),
    }))

    const templateItems = templates.map((t) => ({
      id: `template-${t.id}`,
      category: "Templates",
      title: t.title,
      subtitle: Array.isArray(t.desc) ? t.desc[0] : t.desc,
      icon: <IconTemplate className="h-4 w-4" />,
      action: () => router.push(t.link),
    }))

    const socialItems = [
      {
        id: "social-github",
        category: "Socials & Contact",
        title: "GitHub",
        subtitle: "@gyanranjan-priyam",
        icon: <IconBrandGithub className="h-4 w-4" />,
        action: () => window.open("https://github.com/gyanranjan-priyam", "_blank"),
      },
      {
        id: "social-linkedin",
        category: "Socials & Contact",
        title: "LinkedIn",
        subtitle: "Gyanranjan Priyam",
        icon: <IconBrandLinkedin className="h-4 w-4" />,
        action: () =>
          window.open("https://linkedin.com/in/gyanranjan-priyam", "_blank"),
      },
      {
        id: "social-instagram",
        category: "Socials & Contact",
        title: "Instagram",
        subtitle: "@gyanranjanpriyam",
        icon: <IconBrandInstagram className="h-4 w-4" />,
        action: () =>
          window.open("https://instagram.com/gyanranjanpriyam", "_blank"),
      },
      {
        id: "social-email",
        category: "Socials & Contact",
        title: "Send Email",
        subtitle: "info@priyam.tech",
        icon: <IconMail className="h-4 w-4" />,
        action: () => window.open("mailto:info@priyam.tech"),
      },
    ]

    const actionItems = [
      {
        id: "action-theme",
        category: "Theme",
        title: isDark ? "Switch to Light Mode" : "Switch to Dark Mode",
        subtitle: "Toggle color theme",
        icon: isDark ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />,
        action: () => toggleTheme(),
      },
    ]

    return [...navItems, ...projectItems, ...templateItems, ...socialItems, ...actionItems]
  }, [router, isDark, toggleTheme])

  const filteredItems = React.useMemo(() => {
    if (!search.trim()) return allItems.slice(0, 15)
    const q = search.toLowerCase().trim()
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    )
  }, [allItems, search])

  // Handle keyboard arrow navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return

      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : 0
        )
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredItems.length - 1
        )
      } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
        e.preventDefault()
        filteredItems[selectedIndex].action()
        setOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, filteredItems, selectedIndex])

  return (
    <>
      {/* Trigger button as seen in reference image */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 px-2 py-1 text-xs text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800/80 rounded-md transition-colors cursor-pointer group"
        aria-label="Search and command palette"
      >
        <IconSearch className="h-3.5 w-3.5 shrink-0" />
        <span className="hidden sm:inline-flex items-center gap-0.5">
          <kbd className="inline-flex h-4 items-center justify-center rounded border border-border/80 bg-neutral-100 dark:bg-neutral-800 px-1 font-mono text-[9px] font-medium text-muted-foreground group-hover:text-foreground">
            {isMac ? "⌘" : "Ctrl"}
          </kbd>
          <kbd className="inline-flex h-4 items-center justify-center rounded border border-border/80 bg-neutral-100 dark:bg-neutral-800 px-1 font-mono text-[9px] font-medium text-muted-foreground group-hover:text-foreground">
            K
          </kbd>
        </span>
      </button>

      {/* Modal dialog */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-background/60 backdrop-blur-sm animate-in fade-in-0">
          <div
            className="fixed inset-0"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-popover shadow-2xl z-10 animate-in zoom-in-95 duration-150">
            {/* Search Input Bar */}
            <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
              <IconSearch className="h-4 w-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                autoFocus
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setSelectedIndex(0)
                }}
                placeholder="Search projects, templates, pages, or actions..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-hidden"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="p-0.5 text-muted-foreground hover:text-foreground rounded"
                >
                  <IconX className="h-3.5 w-3.5" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center rounded border border-border bg-muted/60 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                ESC
              </kbd>
            </div>

            {/* Results list */}
            <div className="max-h-80 overflow-y-auto p-1.5 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-xs text-muted-foreground">
                  No matching results found for &ldquo;{search}&rdquo;.
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const isSelected = index === selectedIndex
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        item.action()
                        setOpen(false)
                      }}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={cn(
                        "w-full flex items-center justify-between gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs transition-colors cursor-pointer",
                        isSelected
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-foreground"
                      )}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={cn(
                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-foreground/80",
                            isSelected
                              ? "border-accent-foreground/20 bg-background"
                              : "border-border/60 bg-muted/40"
                          )}
                        >
                          {item.icon}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span
                            className={cn(
                              "font-medium truncate",
                              isSelected ? "text-accent-foreground" : "text-foreground"
                            )}
                          >
                            {item.title}
                          </span>
                          <span className="text-[10px] text-muted-foreground truncate">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <span className="text-[9px] font-mono rounded bg-muted/70 px-1 py-0.5 text-muted-foreground">
                          {item.category}
                        </span>
                        {isSelected && (
                          <IconArrowRight className="h-3 w-3 text-muted-foreground" />
                        )}
                      </div>
                    </button>
                  )
                })
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-border px-3 py-1.5 text-[10px] text-muted-foreground bg-muted/30">
              <div className="flex items-center gap-2">
                <span>Navigate <kbd className="font-mono">↑</kbd><kbd className="font-mono">↓</kbd></span>
                <span>Select <kbd className="font-mono">↵</kbd></span>
              </div>
              <span>Gyanranjan Priyam Portfolio</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
