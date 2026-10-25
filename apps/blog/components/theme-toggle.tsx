'use client';

import * as React from 'react';
import { ThemeToggle as MotionThemeToggle } from '@/components/motion/theme-toggle';

export function ThemeToggle({ className = '' }: { className?: string }) {
  return (
    <MotionThemeToggle
      variant="rectangle"
      start="bottom-up"
      className={`theme-toggle-btn flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors cursor-pointer ${className}`}
      iconClassName="h-4 w-4"
    />
  );
}
