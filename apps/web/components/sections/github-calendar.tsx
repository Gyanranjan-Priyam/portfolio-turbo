"use client";

import { useEffect, useState, useRef } from "react";
import { GitHubCalendar as Calendar } from "react-github-calendar";
import { BlurFade } from "@/components/ui/blur-fade";
import { Calendar as CalendarIcon, ChevronDown, Check, ExternalLink, Github } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

const YEAR_OPTIONS = [
  { label: "Last 12 Months", value: "last" },
  { label: "2026", value: "2026" },
  { label: "2025", value: "2025" },
  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
  { label: "2022", value: "2022" },
] as const;

export function GitHubCalendarSection() {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");
  const [selectedYear, setSelectedYear] = useState<string>("last");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

  useEffect(() => {
    const html = document.documentElement;
    const update = () =>
      setColorScheme(html.classList.contains("dark") ? "dark" : "light");

    update();

    const observer = new MutationObserver(update);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const activeOption =
    YEAR_OPTIONS.find((opt) => opt.value === selectedYear) || YEAR_OPTIONS[0];

  return (
    <div className="py-8">
      <BlurFade delay={0.04} inView>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              GitHub Contributions
            </h2>
            <p
              className="mt-1 text-xs sm:text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Public activity &amp; commit history
            </p>
          </div>

          <div className="flex items-center gap-2.5">


            {/* GitHub Profile Link */}
            <a
              href="https://github.com/gyanranjan-priyam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              aria-label="View Gyanranjan Priyam's GitHub Profile"
            >
              <Github className="size-3.5" />
              <span className="hidden sm:inline">Profile</span>
              <ExternalLink className="size-3 text-muted-foreground" />
            </a>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.08} inView>
        <div
          className="no-scrollbar overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800 bg-card/40 p-4 sm:p-5 flex justify-center items-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="w-full flex justify-center no-scrollbar">
            <Calendar
              username="gyanranjan-priyam"
              colorScheme={colorScheme}
              year={selectedYear === "last" ? "last" : Number(selectedYear)}
              blockSize={9.5}
              blockMargin={2.8}
              blockRadius={2}
              fontSize={11}
              theme={{
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
            />
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
