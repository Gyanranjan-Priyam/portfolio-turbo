"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export type ImageFrameThickness =
  | "none"
  | "thin"
  | "default"
  | "medium"
  | "thick"
  | number;

export type ImageFrameAspectRatio =
  | "auto"
  | "square"
  | "video"
  | "wide"
  | "banner"
  | "4/3"
  | "3/2"
  | string;

export type ImageFrameRadius =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export type ImageFrameTexture =
  | "crosshatch"
  | "crosshatch-subtle"
  | "stripes"
  | "dots"
  | "none";

export interface ImageFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Border / Bezel thickness around the media.
   * Can be a preset ('none', 'thin', 'default', 'medium', 'thick') or an exact number of pixels.
   * @default 'default' (14px - 20px)
   */
  thickness?: ImageFrameThickness;

  /**
   * Corner radius preset for the outer frame.
   * Inner media automatically scales proportionally to maintain smooth nested geometry.
   * @default '3xl'
   */
  radius?: ImageFrameRadius;

  /**
   * Texture applied to the outer border frame.
   * @default 'crosshatch' (exact diagonal diamond wireframe grid)
   */
  texture?: ImageFrameTexture;

  /**
   * Preset or custom aspect ratio for the frame container.
   * @default 'auto'
   */
  aspectRatio?: ImageFrameAspectRatio;

  /**
   * Optional direct Next.js Image source if not passing children.
   */
  src?: ImageProps["src"];

  /**
   * Image alt text when using direct `src`.
   */
  alt?: string;

  /**
   * Next.js Image fill mode.
   */
  fill?: boolean;

  /**
   * Additional Next.js Image props when using `src`.
   */
  imageProps?: Partial<Omit<ImageProps, "src" | "alt">>;

  /**
   * Additional classes for the inner media container.
   */
  innerClassName?: string;

  /**
   * Optional variant for the outer frame surface.
   */
  variant?: "default" | "glass" | "dark" | "subtle";
}

const THICKNESS_PRESETS: Record<string, string> = {
  none: "p-0",
  thin: "p-2", // 8px
  default: "p-3 sm:p-4 md:p-5", // 12px - 20px (matches the crosshatch reference frame)
  medium: "p-4 sm:p-5 md:p-6", // 16px - 24px
  thick: "p-6 sm:p-7 md:p-8", // 24px - 32px
};

const RADIUS_OUTER_PRESETS: Record<ImageFrameRadius, string> = {
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-2xl",
  xl: "rounded-[22px]",
  "2xl": "rounded-[26px]",
  "3xl": "rounded-[30px]",
  full: "rounded-full",
};

const RADIUS_INNER_PRESETS: Record<ImageFrameRadius, string> = {
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-xl",
  "2xl": "rounded-[18px]",
  "3xl": "rounded-2xl",
  full: "rounded-full",
};

const ASPECT_PRESETS: Record<string, string> = {
  auto: "",
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[21/9]",
  banner: "aspect-[3/1] sm:aspect-[4/1]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
};

const TEXTURE_CLASSES: Record<ImageFrameTexture, string> = {
  crosshatch: "pattern-crosshatch",
  "crosshatch-subtle": "pattern-crosshatch-subtle",
  stripes: "pattern-diagonal-stripes",
  dots: "bg-[radial-gradient(rgba(0,0,0,0.12)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:10px_10px]",
  none: "",
};

export const ImageFrame = React.forwardRef<HTMLDivElement, ImageFrameProps>(
  (
    {
      className,
      innerClassName,
      thickness = "default",
      radius = "3xl",
      texture = "crosshatch",
      aspectRatio = "auto",
      variant = "default",
      src,
      alt = "",
      fill,
      imageProps,
      children,
      style,
      ...props
    },
    ref
  ) => {
    // Resolve padding from thickness
    const isCustomNumber = typeof thickness === "number";
    const paddingClass = isCustomNumber
      ? undefined
      : THICKNESS_PRESETS[thickness] || THICKNESS_PRESETS.default;
    const paddingStyle = isCustomNumber
      ? { padding: `${thickness}px` }
      : undefined;

    const outerRadius =
      RADIUS_OUTER_PRESETS[radius] || RADIUS_OUTER_PRESETS["3xl"];
    const innerRadius =
      RADIUS_INNER_PRESETS[radius] || RADIUS_INNER_PRESETS["3xl"];
    const aspectClass = ASPECT_PRESETS[aspectRatio] ?? "";
    const textureClass = TEXTURE_CLASSES[texture] ?? TEXTURE_CLASSES.crosshatch;

    const variantBackground =
      variant === "glass"
        ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-300/80 dark:border-neutral-800"
        : variant === "dark"
          ? "bg-[#141416] border border-neutral-800 text-white"
          : variant === "subtle"
            ? "bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800"
            : "bg-white dark:bg-[#0c0c0e] border border-neutral-300 dark:border-neutral-800/90 shadow-sm";

    return (
      <div
        ref={ref}
        data-slot="image-frame"
        className={cn(
          "relative block overflow-hidden transition-all duration-300",
          outerRadius,
          paddingClass,
          variantBackground,
          textureClass,
          aspectClass,
          className
        )}
        style={{
          ...paddingStyle,
          ...style,
        }}
        {...props}
      >
        {/* Inner Card: Floating elevation + border + inner radius */}
        <div
          data-slot="image-frame-inner"
          className={cn(
            "relative h-full w-full overflow-hidden",
            "border border-black/15 dark:border-white/15",
            "shadow-[0_10px_28px_rgba(0,0,0,0.18)] dark:shadow-[0_14px_36px_rgba(0,0,0,0.65)]",
            innerRadius,
            innerClassName
          )}
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill={fill ?? true}
              className={cn("object-cover", fill ? "" : "h-full w-full")}
              {...imageProps}
            />
          ) : (
            children
          )}
        </div>
      </div>
    );
  }
);

ImageFrame.displayName = "ImageFrame";

