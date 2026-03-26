"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

type FallbackImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
};

export function FallbackImage({
  src,
  alt,
  className,
  fallbackLabel,
}: FallbackImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#ece6de,#ddd4c8)] px-6 text-center text-[#3f3a35]",
          className,
        )}
      >
        <ImageOff className="h-8 w-8" />
        <div className="space-y-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#6a625a]">
            Add Real Photo
          </p>
          <p className="text-sm font-medium">{fallbackLabel ?? alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative h-full w-full", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        onError={() => setFailed(true)}
        unoptimized
      />
    </div>
  );
}
