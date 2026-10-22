"use client";

import * as React from "react";
import { TextMorph as BaseTextMorph, useTextMorph, type TextMorphProps } from "torph/react";
import { cn } from "@/lib/utils";

export { useTextMorph, type TextMorphProps };

export interface TextMorphComponentProps extends TextMorphProps {
  className?: string;
}

/**
 * TextMorph - Physics-based animated character text-morphing component powered by torph
 */
export function TextMorph({
  className,
  as = "span",
  ease = { stiffness: 240, damping: 24 },
  ...props
}: TextMorphComponentProps) {
  return (
    <BaseTextMorph
      as={as}
      ease={ease}
      className={cn("inline-block will-change-transform", className)}
      {...props}
    />
  );
}

export default TextMorph;
