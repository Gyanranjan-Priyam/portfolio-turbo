"use client";

import { useEffect, useState, type ComponentPropsWithoutRef } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { ActionSwapIcon } from "@/components/motion/action-swap";
import { cn } from "@/lib/utils";

export interface ThemeToggleProps
  extends Omit<ComponentPropsWithoutRef<"button">, "children" | "onClick"> {
  iconClassName?: string;
}

export function useThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const nextDark = !isDark;
    const next = nextDark ? "dark" : "light";

    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", next);
  };

  return { isDark, mounted, toggle };
}

export function ThemeToggle({
  className,
  iconClassName,
  ...rest
}: ThemeToggleProps) {
  const { isDark, mounted, toggle } = useThemeToggle();

  return (
    <button
      type="button"
      aria-label={mounted && isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={cn("flex items-center justify-center cursor-pointer", className)}
      {...rest}
    >
      {mounted ? (
        <ActionSwapIcon
          value={isDark ? "dark" : "light"}
          animation="blur"
          className={iconClassName}
        >
          {isDark ? (
            <IconSun className={iconClassName} />
          ) : (
            <IconMoon className={iconClassName} />
          )}
        </ActionSwapIcon>
      ) : (
        <span className={iconClassName} aria-hidden="true" />
      )}
    </button>
  );
}
