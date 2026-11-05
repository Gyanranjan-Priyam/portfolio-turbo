"use client";

import { useState, useEffect } from "react";

export type Currency = "INR" | "USD";

const STORAGE_KEY = "portfolio_currency_preference";

function detectIsIndia(): boolean {
  if (typeof window === "undefined") return false;

  // 1. Timezone detection (instant, synchronous, highly accurate for users in India)
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (
      tz === "Asia/Kolkata" ||
      tz === "Asia/Calcutta" ||
      tz?.toLowerCase().includes("kolkata") ||
      tz?.toLowerCase().includes("calcutta")
    ) {
      return true;
    }
  } catch {}

  // 2. Browser language / locale check (e.g. en-IN, hi-IN)
  try {
    const langs = [
      navigator.language,
      ...(navigator.languages || []),
    ].filter(Boolean);

    if (
      langs.some((l) =>
        /-IN$/i.test(l) ||
        /^hi\b/i.test(l) ||
        /^ta\b/i.test(l) ||
        /^te\b/i.test(l) ||
        /^bn\b/i.test(l) ||
        /^mr\b/i.test(l) ||
        /^gu\b/i.test(l)
      )
    ) {
      return true;
    }
  } catch {}

  return false;
}

export function useCurrency(defaultCurrency?: Currency) {
  const [currency, setCurrencyState] = useState<Currency>(defaultCurrency || "USD");
  const [isDetected, setIsDetected] = useState(false);

  useEffect(() => {
    // 1. Check if user already manually selected currency
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Currency | null;
      if (saved === "INR" || saved === "USD") {
        setCurrencyState(saved);
        setIsDetected(true);
        return;
      }
    } catch {}

    // 2. Synchronous client heuristic (Timezone & Locale)
    const isIndia = detectIsIndia();
    setCurrencyState(isIndia ? "INR" : "USD");
    setIsDetected(true);

    // 3. Background server / Geo IP validation
    const controller = new AbortController();
    fetch("/api/geo", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.country) {
          try {
            if (!localStorage.getItem(STORAGE_KEY)) {
              setCurrencyState(data.isIndia ? "INR" : "USD");
            }
          } catch {}
        }
      })
      .catch(() => {
        // Fallback silently
      });

    return () => {
      controller.abort();
    };
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {}
  };

  return { currency, setCurrency, isDetected };
}

