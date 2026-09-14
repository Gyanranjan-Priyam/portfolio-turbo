"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import { useState, type ReactNode } from "react";
import { SPRING_PRESS } from "@/lib/ease";
import { cn } from "@/lib/utils";

export type ActionSwapAnimation = "blur" | "roll" | "pop" | "fade" | "cascade";
export type ActionSwapButtonVariant = "default" | "secondary" | "outline" | "ghost";
export type ActionSwapButtonSize = "sm" | "md" | "lg" | "icon";

type CoreAnimation = Exclude<ActionSwapAnimation, "cascade">;

export interface ActionSwapItem {
  id: string;
  label?: ReactNode;
  icon?: ReactNode;
  ariaLabel?: string;
}

export interface ActionSwapTextProps {
  value: string;
  children: ReactNode;
  animation?: ActionSwapAnimation;
  className?: string;
}

export interface ActionSwapIconProps {
  value: string;
  children: ReactNode;
  animation?: ActionSwapAnimation;
  className?: string;
}

export interface ActionSwapButtonProps
  extends Omit<HTMLMotionProps<"button">, "children" | "defaultValue" | "value"> {
  items: ActionSwapItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (id: string, item: ActionSwapItem) => void;
  variant?: ActionSwapButtonVariant;
  size?: ActionSwapButtonSize;
  animation?: ActionSwapAnimation;
  iconOnly?: boolean;
  cycle?: boolean;
}

const TEXT_VARIANTS: Record<CoreAnimation, Variants> = {
  blur: {
    initial: { opacity: 0, filter: "blur(4px)", y: 4 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    exit: { opacity: 0, filter: "blur(4px)", y: -4 },
  },
  roll: {
    initial: { opacity: 0, y: "100%" },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "-100%" },
  },
  pop: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
};

const ICON_VARIANTS: Record<CoreAnimation, Variants> = {
  blur: {
    initial: { opacity: 0, filter: "blur(4px)", scale: 0.8 },
    animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
    exit: { opacity: 0, filter: "blur(4px)", scale: 0.8 },
  },
  roll: {
    initial: { opacity: 0, y: 8, rotate: -20 },
    animate: { opacity: 1, y: 0, rotate: 0 },
    exit: { opacity: 0, y: -8, rotate: 20 },
  },
  pop: {
    initial: { opacity: 0, scale: 0.6 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.6 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
};

const CASCADE_STAGGER = 0.02;

const CASCADE_LETTER_VARIANTS: Variants = {
  initial: { opacity: 0, y: 8, filter: "blur(3px)" },
  animate: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay, duration: 0.2 },
  }),
  exit: { opacity: 0, y: -8, filter: "blur(3px)" },
};

const VARIANT_CLASS: Record<ActionSwapButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

const SIZE_CLASS: Record<ActionSwapButtonSize, string> = {
  sm: "h-8 gap-1.5 rounded-full px-3 text-xs",
  md: "h-10 gap-2 rounded-full px-4 text-sm",
  lg: "h-12 gap-2.5 rounded-full px-5 text-base",
  icon: "h-10 w-10 rounded-full",
};

export function ActionSwapText({
  value,
  children,
  animation = "blur",
  className,
}: ActionSwapTextProps) {
  const reduce = useReducedMotion();
  const label = typeof children === "string" ? children : null;
  const cascade = animation === "cascade" && label !== null && !reduce;
  const coreAnimation: CoreAnimation =
    animation === "cascade" ? "roll" : animation;

  return (
    <span
      className={cn(
        "relative -my-[0.08em] inline-block max-w-full whitespace-nowrap py-[0.08em] align-bottom",
        className,
      )}
      style={{
        clipPath: "inset(0 -999px)",
        WebkitClipPath: "inset(0 -999px)",
      }}
    >
      <span
        aria-hidden
        className="invisible inline-block whitespace-nowrap"
      >
        {cascade
          ? label.split("").map((char, index) => (
              <span
                key={index}
                className="inline-block whitespace-pre"
              >
                {char}
              </span>
            ))
          : children}
      </span>
      {cascade ? (
        <>
          <span className="sr-only">{label}</span>
          <AnimatePresence initial={false}>
            <motion.span
              key={`cascade-${value}`}
              aria-hidden
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute left-0 top-[0.08em] inline-block whitespace-pre"
            >
              {label.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i * CASCADE_STAGGER}
                  variants={CASCADE_LETTER_VARIANTS}
                  className="inline-block whitespace-pre will-change-[opacity,filter,transform]"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </AnimatePresence>
        </>
      ) : (
        <AnimatePresence initial={false}>
          <motion.span
            key={`${animation}-${value}`}
            variants={TEXT_VARIANTS[coreAnimation]}
            initial={reduce ? false : "initial"}
            animate={reduce ? { opacity: 1, filter: "blur(0px)", scale: 1, y: 0 } : "animate"}
            exit={reduce ? undefined : "exit"}
            className="absolute left-0 top-[0.08em] inline-block max-w-full truncate will-change-[opacity,filter,transform]"
          >
            {children}
          </motion.span>
        </AnimatePresence>
      )}
    </span>
  );
}

export function ActionSwapIcon({
  value,
  children,
  animation = "blur",
  className,
}: ActionSwapIconProps) {
  const reduce = useReducedMotion();
  const coreAnimation: CoreAnimation =
    animation === "cascade" ? "roll" : animation;

  return (
    <span className={cn("relative inline-grid shrink-0 place-items-center overflow-hidden", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={`${animation}-${value}`}
          aria-hidden
          variants={ICON_VARIANTS[coreAnimation]}
          initial={reduce ? false : "initial"}
          animate={reduce ? { opacity: 1, filter: "blur(0px)", scale: 1, y: 0 } : "animate"}
          exit={reduce ? undefined : "exit"}
          className="col-start-1 row-start-1 inline-flex items-center justify-center will-change-[opacity,filter,transform]"
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function ActionSwapButton({
  items,
  value,
  defaultValue,
  onValueChange,
  variant = "secondary",
  size = "md",
  animation = "blur",
  iconOnly = size === "icon",
  cycle = true,
  className,
  disabled,
  onClick,
  ...rest
}: ActionSwapButtonProps) {
  const reduce = useReducedMotion();
  const [internalValue, setInternalValue] = useState(defaultValue ?? items[0]?.id);
  const currentValue = value ?? internalValue;
  const activeIndex = Math.max(0, items.findIndex((item) => item.id === currentValue));
  const activeItem = items[activeIndex] ?? items[0];
  const hasIcon = items.some((item) => item.icon);
  const nextItem = cycle && items.length > 0 ? items[(activeIndex + 1) % items.length] : undefined;

  if (!activeItem) return null;

  const accessibleLabel = activeItem.ariaLabel ?? (iconOnly && typeof activeItem.label === "string" ? activeItem.label : undefined);

  return (
    <motion.button
      type="button"
      disabled={disabled}
      whileTap={reduce || disabled ? undefined : { scale: 0.97 }}
      transition={SPRING_PRESS}
      className={cn(
        "inline-flex items-center justify-center overflow-hidden font-medium transition-colors",
        "disabled:pointer-events-none disabled:opacity-50",
        VARIANT_CLASS[variant],
        SIZE_CLASS[size],
        className,
      )}
      aria-label={accessibleLabel}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || disabled || !cycle || !nextItem) return;
        if (value === undefined) setInternalValue(nextItem.id);
        onValueChange?.(nextItem.id, nextItem);
      }}
      {...rest}
    >
      {hasIcon ? (
        <ActionSwapIcon value={activeItem.id} animation={animation} className="h-4 w-4">
          {activeItem.icon ?? null}
        </ActionSwapIcon>
      ) : null}
      {!iconOnly ? (
        <ActionSwapText value={activeItem.id} animation={animation}>
          {activeItem.label}
        </ActionSwapText>
      ) : null}
    </motion.button>
  );
}
