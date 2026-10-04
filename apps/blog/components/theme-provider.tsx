'use client';

import * as React from 'react';
import { ThemeSync } from './theme-sync';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeSync />
      {children}
    </>
  );
}
