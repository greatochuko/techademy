"use client";

import { ImageProps } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useState } from "react";

type AvatarProps = ImageProps & {
  containerClassName?: string;
  fallback: string;
};

export default function Avatar({
  src,
  alt,
  containerClassName,
  fallback,
  ...props
}: AvatarProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`bg-background-gray relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full text-sm ${containerClassName}`}
    >
      <Image
        src={src}
        alt={alt}
        {...props}
        fill
        onLoad={() => setImageLoaded(true)}
        className={`${imageLoaded ? "visible opacity-100" : "invisible opacity-0"} ${props.className}`}
      />
      <span>{fallback}</span>
    </div>
  );
}
