import { CourseType } from "@/lib/types";
import React from "react";
import CourseThumbnail from "./CourseThumbnail";
import Link from "next/link";
import { format } from "date-fns";

export default function Course({ course }: { course: CourseType }) {
  return (
    <div className="bg-background flex flex-col gap-2 rounded-md p-2 shadow">
      <CourseThumbnail
        src={course.thumbnail}
        alt={course.title}
        containerClassName="w-full aspect-video rounded-sm peer"
        courseId={course._id}
      >
        <span className="absolute right-1 bottom-1 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
          {format(new Date(course.durationInSeconds * 1000), "HH:mm:ss")}
        </span>
      </CourseThumbnail>
      <span className="bg-background-gray w-fit rounded-full p-1 px-2 text-xs font-medium">
        {course.category}
      </span>
      <Link
        href={`/course/${course._id}`}
        className="font-medium peer-hover:underline hover:underline"
      >
        {course.title}
      </Link>
      <div>
        <span className="text-accent-gray-200">By</span>{" "}
        <Link
          href={`/creators/${course.creator._id}`}
          className="hover:underline"
        >
          {" "}
          {course.creator.name}
        </Link>
      </div>
    </div>
  );
}
