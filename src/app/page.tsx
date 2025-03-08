import CourseGrid from "@/components/course/CourseGrid";
import Tags from "@/components/homepage/Tags";
import { CourseType } from "@/lib/types";

const courses: CourseType[] = [
  {
    _id: "1",
    category: "frontend",
    title:
      "Learn React JS - Full Beginner's Tutorial (2024) & Practice Projects",
    creator: { _id: "1", name: "freecodecamp.org" },
    dateCreated: new Date("01 01 2025"),
    durationInSeconds: 56452,
    reviews: [],
    thumbnail:
      "https://i.ytimg.com/vi/x4rFhThSX04/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB8ywiWjXs1uoHV3NN4zyPeRGRsew",
    youtubeURL: "https://youtu.be/x4rFhThSX04?si=BHXdPLtWs84sG5r3",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Tags />
      <CourseGrid courses={courses} />
    </div>
  );
}
