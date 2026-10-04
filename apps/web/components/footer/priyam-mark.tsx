import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export type PriyamMarkProps = Partial<ImageProps> & {
  className?: string;
};

export function PriyamMark({
  className,
  alt = "Gyanranjan Priyam",
  width = 162,
  height = 24,
  ...props
}: PriyamMarkProps) {
  return (
    <Image
      src="/mono-logo.png"
      alt={alt}
      width={width}
      height={height}
      className={cn("h-4 w-auto object-contain dark:invert-0", className)}
      priority
      {...props}
    />
  );
}

export const ChanhDaiMark = PriyamMark;
