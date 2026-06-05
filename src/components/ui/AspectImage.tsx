"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type AspectRatio = "1/1" | "4/5" | "3/4" | "16/9" | "3/2" | "2/3";

const aspectClasses: Record<AspectRatio, string> = {
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-video",
  "3/2": "aspect-[3/2]",
  "2/3": "aspect-[2/3]",
};

interface AspectImageProps {
  src: string;
  alt: string;
  ratio?: AspectRatio;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  quality?: number;
  /** Show shimmer skeleton while loading */
  skeleton?: boolean;
  /** Zoom on hover */
  zoomOnHover?: boolean;
}

export function AspectImage({
  src,
  alt,
  ratio = "4/5",
  className,
  imgClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
  quality = 85,
  skeleton = true,
  zoomOnHover = false,
}: AspectImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-ivory-dark",
        aspectClasses[ratio],
        className
      )}
    >
      {/* Skeleton shimmer */}
      {skeleton && !loaded && !error && (
        <div className="absolute inset-0 skeleton" aria-hidden />
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-ivory-dark">
          <span className="font-label text-stone text-[10px] tracking-luxury">
            IMAGE UNAVAILABLE
          </span>
        </div>
      )}

      {/* Image */}
      {!error && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          className={cn(
            "object-cover transition-all duration-700 ease-luxury",
            loaded ? "opacity-100" : "opacity-0",
            zoomOnHover && "group-hover:scale-[1.04]",
            imgClassName
          )}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
