"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Meet({ className }: { className?: string } = {}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "meet" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Button
      data-cal-namespace="meet"
      data-cal-link="gyanranjanpriyam/meet"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className={cn(
        "group h-9 cursor-pointer hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 text-xs font-semibold font-mono font-medium text-primary-foreground hover:shadow-lg hover:shadow-primary/25 select-none transition-all",
        className
      )}
    >
      <span>Schedule a meet</span>
      <svg
        viewBox="0 0 24 24"
        className="size-3.5 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </Button>
  );
}
