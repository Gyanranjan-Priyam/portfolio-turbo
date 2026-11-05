"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Shield, Handshake, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export const LEGAL_TABS = [
  {
    href: "/legal/terms",
    label: "Terms of Service",
    shortLabel: "Terms",
    icon: FileText,
    description: "Acceptable use, IP rights & site governance",
  },
  {
    href: "/legal/privacy",
    label: "Privacy Policy",
    shortLabel: "Privacy",
    icon: Shield,
    description: "Data handling, analytics & user rights",
  },
  {
    href: "/legal/agreement",
    label: "Client Agreement",
    shortLabel: "Agreement",
    icon: Handshake,
    description: "Engineering SOW, milestone payments & IP transfer",
  },
  {
    href: "/legal/refund",
    label: "Refund Policy",
    shortLabel: "Refunds",
    icon: RotateCcw,
    description: "Deposit rules, cancellations & warranty terms",
  },
] as const;

export function LegalNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Legal documents navigation"
      className={cn("w-full -mx-4 sm:-mx-6 border-y border-border bg-background select-none", className)}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 sm:py-3 no-scrollbar">
          {LEGAL_TABS.map((tab) => {
            const isActive = pathname === tab.href;
            const Icon = tab.icon;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-mono font-medium transition-all shrink-0 border",
                  isActive
                    ? "bg-foreground text-background border-foreground shadow-xs"
                    : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border-transparent hover:border-border"
                )}
              >
                <Icon className={cn("size-3.5 shrink-0", isActive ? "text-background" : "text-muted-foreground")} />
                <span>{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default LegalNav;

