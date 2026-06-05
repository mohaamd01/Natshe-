"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/types/product";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div className="flex flex-col gap-3">
      {/* Main image — aspect 4/5 but capped at 60 vh on mobile so info stays in view */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-ivory-dark"
        style={{ aspectRatio: "4/5", maxHeight: "clamp(320px, 60vh, 600px)" }}
      >
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          priority
          className="object-cover object-center transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Lens badge */}
        <div className="absolute top-4 right-4 bg-brown/60 backdrop-blur-sm text-ivory text-[10px] font-sans tracking-wide px-2.5 py-1 rounded-full">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail strip — only show if more than 1 image */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === activeIndex
                  ? "border-gold shadow-md"
                  : "border-transparent opacity-60 hover:opacity-90"
              }`}
              aria-label={`View image ${i + 1}: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
