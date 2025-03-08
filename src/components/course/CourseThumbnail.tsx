import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

type CourseThumbnailProps = ImageProps & {
  courseId: string;
  containerClassName?: string;
};

export default function CourseThumbnail({
  courseId = "",
  containerClassName = "",
  src,
  alt,
  children,
  ...props
}: PropsWithChildren<CourseThumbnailProps>) {
  return (
    <Link
      href={`/course/${courseId}`}
      className={`bg-background-gray relative overflow-hidden ${containerClassName}`}
    >
      <Image src={src} alt={alt} {...props} fill />
      {children}
    </Link>
  );
}
