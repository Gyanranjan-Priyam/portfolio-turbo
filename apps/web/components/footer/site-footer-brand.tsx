"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

const VIEWBOX_WIDTH = 1058;

export function SiteFooterInteractiveLogotype({
  className,
}: {
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const gradientX1Raw = useMotionValue(0.5);
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    },
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;

    const containerRect = event.currentTarget.getBoundingClientRect();
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width,
    );
  };

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return;
    gradientX1Raw.set(0.5);
  };

  return (
    <div
      className={cn(
        "w-full relative border-b border-border overflow-hidden",
        className,
      )}
    >
      <div
        className="w-full overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="w-full h-auto max-w-screen px-4"
            viewBox="0 0 1058 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Solid fill animated by gradient */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 1H33V257H1V1ZM33 1H129V33H33V1ZM129 1H161V129H129V1ZM33 97H129V129H33V97ZM193 65H225V225H193V65ZM225 65H289V97H225V65ZM289 97H321V129H289V97ZM353 1H385V33H353V1ZM353 65H385V225H353V65ZM417 1H449V97H417V1ZM449 97H545V129H449V97ZM545 1H577V257H545V1ZM481 225H545V257H481V225ZM449 193H481V225H449V193ZM609 97H641V225H609V97ZM641 65H737V97H641V65ZM641 129H737V161H641V129ZM641 193H737V225H641V193ZM737 65H769V225H737V65ZM801 65H833V225H801V65ZM833 65H913V97H833V65ZM913 97H945V225H913V97ZM945 65H1025V97H945V65ZM1025 97H1057V225H1025V97Z"
              fill="url(#paint0_linear_footer_brand)"
            />
            {/* Wireframe outlines */}
            <path
              className="stroke-foreground/10"
              d="M1 1H33V257H1V1ZM33 1H129V33H33V1ZM129 1H161V129H129V1ZM33 97H129V129H33V97ZM193 65H225V225H193V65ZM225 65H289V97H225V65ZM289 97H321V129H289V97ZM353 1H385V33H353V1ZM353 65H385V225H353V65ZM417 1H449V97H417V1ZM449 97H545V129H449V97ZM545 1H577V257H545V1ZM481 225H545V257H481V225ZM449 193H481V225H449V193ZM609 97H641V225H609V97ZM641 65H737V97H641V65ZM641 129H737V161H641V129ZM641 193H737V225H641V193ZM737 65H769V225H737V65ZM801 65H833V225H801V65ZM833 65H913V97H833V65ZM913 97H945V225H913V97ZM945 65H1025V97H945V65ZM1025 97H1057V225H1025V97Z"
              strokeWidth="2"
            />
            <defs>
              <motion.linearGradient
                id="paint0_linear_footer_brand"
                x1={gradientX1}
                y1="1"
                x2="529"
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  );
}
