"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Meet() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return (
    <Button
      data-cal-namespace="30min"
      data-cal-link="gyanranjanpriyam/30min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className="h-9 cursor-pointer hover:bg-primary/90 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 text-xs font-semibold font-mono text-primary-foreground hover:shadow-lg hover:shadow-primary/25 select-none transition-all"
    >
      Let&apos;s have a meet.{" "}
      <motion.svg
        transition={{ repeat: Infinity, duration: 1.5 }}
        viewBox="0 0 24 24"
        className="size-3.5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </motion.svg>
    </Button>
  );
}
