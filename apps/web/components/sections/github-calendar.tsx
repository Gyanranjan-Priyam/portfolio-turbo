"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { GitHubCalendar as Calendar } from "react-github-calendar";
import { BlurFade } from "@/components/ui/blur-fade";
import { Github, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export function GitHubCalendarSection() {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("dark");
  const [greeting, setGreeting] = useState<string>("Good day");
  const [greetingSubtitle, setGreetingSubtitle] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [stats, setStats] = useState<{
    total: number;
    start: string;
    end: string;
  }>({
    total: 0,
    start: "",
    end: "",
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hour = now.getHours();
      
      if (hour >= 5 && hour < 12) {
        setGreeting("Good morning");
        setGreetingSubtitle("— brewing coffee & starting fresh");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good afternoon");
        setGreetingSubtitle("— deep in code & creative flow");
      } else if (hour >= 17 && hour < 22) {
        setGreeting("Good evening");
        setGreetingSubtitle("— evening reflections & winding down");
      } else {
        setGreeting("Working late tonight");
        setGreetingSubtitle("— quiet hours, dark mode & side quests");
      }

      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const update = () =>
      setColorScheme(html.classList.contains("dark") ? "dark" : "light");

    update();

    const observer = new MutationObserver(update);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const transformData = (data: Activity[]) => {
    if (data && data.length > 0) {
      const total = data.reduce((sum, item) => sum + item.count, 0);
      const start = formatDate(data[0].date);
      const end = formatDate(data[data.length - 1].date);
      
      if (stats.total !== total || stats.start !== start || stats.end !== end) {
        setTimeout(() => {
          setStats({ total, start, end });
        }, 0);
      }
    }
    return data;
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      // Auto-scroll to the right so recent contributions (current week) are in full view
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
    }
  }, [stats.total, scrollContainerRef]);

  const legendColors = useMemo(() => {
    return colorScheme === "dark"
      ? ["#18181b", "#27272a", "#52525b", "#a1a1aa", "#ffffff"]
      : ["#ebedf0", "#cbd5e1", "#94a3b8", "#475569", "#0f172a"];
  }, [colorScheme]);

  return (
    <section className="py-8">
      {/* Section Header */}
      <BlurFade delay={0.04} inView>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-sans">
              GitHub Contributions
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-mono">
              Public activity &amp; commit history
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/gyanranjan-priyam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-muted hover:border-foreground/30 shadow-2xs font-mono"
              aria-label="View Gyanranjan Priyam's GitHub Profile"
            >
              <Github className="size-3.5" />
              <span className="hidden sm:inline">Profile</span>
              <ExternalLink className="size-3 text-muted-foreground" />
            </a>
          </div>
        </div>
      </BlurFade>

      {/* Main Blueprint Heatmap Card */}
      <BlurFade delay={0.08} inView>
        <div className="rounded-xl border border-border bg-card/60 backdrop-blur-xs p-4 sm:p-5 shadow-xs transition-all">
          {/* Scrollable Heatmap */}
          <div
            ref={(el) => {
              scrollContainerRef.current = el;
              if (el) {
                el.scrollLeft = el.scrollWidth;
              }
            }}
            className="w-full overflow-x-auto py-2 scroll-smooth"
            style={{ scrollbarWidth: "thin" }}
          >
            <div className="w-max mx-auto min-w-full flex justify-center px-1 [&_footer]:hidden [&_.react-activity-calendar__footer]:hidden [&_.react-activity-calendar__count]:hidden [&_.react-activity-calendar__legend]:hidden [&_svg~*]:hidden">
              <TooltipProvider delayDuration={0}>
                <Calendar
                  username="gyanranjan-priyam"
                  colorScheme={colorScheme}
                  blockSize={10.2}
                  blockMargin={2.8}
                  blockRadius={2}
                  fontSize={11}
                  showColorLegend={false}
                  showTotalCount={false}
                  transformData={transformData}
                  renderBlock={(block, activity) => {
                    const dateFormatted = format(
                      new Date(activity.date + "T00:00:00"),
                      "MMMM do"
                    );
                    const countText =
                      activity.count === 0
                        ? "No contributions"
                        : `${activity.count} contribution${activity.count === 1 ? "" : "s"}`;
                    const tooltipText = `${countText} on ${dateFormatted}.`;

                    return (
                      <Tooltip key={activity.date}>
                        <TooltipTrigger asChild>{block}</TooltipTrigger>
                        <TooltipContent
                          side="top"
                          sideOffset={6}
                          className="font-sans text-xs select-none"
                        >
                          {tooltipText}
                        </TooltipContent>
                      </Tooltip>
                    );
                  }}
                  theme={{
                    light: ["#ebedf0", "#cbd5e1", "#94a3b8", "#475569", "#0f172a"],
                    dark: ["#18181b", "#27272a", "#52525b", "#a1a1aa", "#ffffff"],
                  }}
                />
              </TooltipProvider>
            </div>
          </div>

          {/* Technical Blueprint Footer Caption (Matching Fig. 2 Reference) */}
          <div className="mt-4 pt-3 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-semibold text-foreground">Fig. 2.</span>
              <span>
                {stats.total > 0
                  ? `${stats.total.toLocaleString()} contributions`
                  : "Public activity"}
                {stats.start && stats.end ? `, ${stats.start} – ${stats.end}` : ""}
                .
              </span>
              <span>Source:</span>
              <a
                href="https://github.com/gyanranjan-priyam"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <span>.</span>
            </div>

            {/* Custom Monochrome Legend */}
            <div className="flex items-center gap-1.5 ml-auto select-none">
              <span className="text-[11px] text-muted-foreground">Less</span>
              <div className="flex items-center gap-0.5">
                {legendColors.map((bg, idx) => (
                  <span
                    key={idx}
                    className="size-2.5 rounded-[1.5px] border border-border/40"
                    style={{ backgroundColor: bg }}
                  />
                ))}
              </div>
              <span className="text-[11px] text-muted-foreground">More</span>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Diagonal Hatch Pattern Band with Handwritten Greeting, Subtitle & Live Clock */}
      <BlurFade delay={0.12} inView>
        <div className="mt-6 -mx-4 sm:-mx-6 border-y border-border pattern-diagonal-stripes overflow-hidden">
          <div className="px-4 sm:px-6 py-3 bg-background/80 backdrop-blur-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-caveat text-xl sm:text-2xl text-foreground font-medium tracking-wide">
                {greeting}
              </span>
              {greetingSubtitle ? (
                <span className="text-[11px] sm:text-xs font-mono text-muted-foreground/75 tracking-tight">
                  {greetingSubtitle}
                </span>
              ) : null}
            </div>
            {currentTime ? (
              <div className="flex items-center gap-2 select-none shrink-0 ml-auto sm:ml-0">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span
                  suppressHydrationWarning
                  className="text-xs sm:text-sm font-mono text-muted-foreground/90 tabular-nums tracking-wide"
                >
                  {currentTime}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
