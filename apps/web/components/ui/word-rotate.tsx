"use client"

import { useEffect, useState, type ComponentProps } from "react"
import { AnimatePresence, motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"
import ShinyText from "@/components/ShinyText"
import { useThemeToggle } from "@/components/motion/theme-toggle"

interface WordRotateProps {
  words: string[]
  duration?: number
  motionProps?: MotionProps
  className?: string
  containerClassName?: string
  shiny?: boolean
  shinyProps?: Partial<ComponentProps<typeof ShinyText>>
}

export function WordRotate({
  words,
  duration = 2800,
  motionProps = {
    initial: { opacity: 0, y: 12, filter: "blur(3px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -12, filter: "blur(3px)" },
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 24,
      mass: 0.6,
    },
  },
  className,
  containerClassName,
  shiny = true,
  shinyProps,
}: WordRotateProps) {
  const [index, setIndex] = useState(0)
  const { isDark } = useThemeToggle()

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [words, duration])

  const defaultColor = isDark ? "#a1a1aa" : "#4b5563"
  const defaultShineColor = isDark ? "#ffffff" : "#09090b"

  return (
    <span className={cn("relative inline-flex overflow-hidden align-baseline", containerClassName)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          className={cn("inline-block text-foreground will-change-transform", className)}
          {...motionProps}
        >
          {shiny ? (
            <ShinyText
              text={words[index]}
              speed={2}
              delay={0}
              color={defaultColor}
              shineColor={defaultShineColor}
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              {...shinyProps}
            />
          ) : (
            words[index]
          )}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
