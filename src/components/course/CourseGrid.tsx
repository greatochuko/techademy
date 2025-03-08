import { CourseType } from "@/lib/types";
import React from "react";
import Course from "./Course";

export default function CourseGrid({ courses }: { courses: CourseType[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))]">
      {courses.map((course) => (
        <Course key={course._id} course={course} />
      ))}
    </div>
  );
}
