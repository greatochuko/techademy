import { SearchIcon } from "lucide-react";
import React from "react";

export default function SearchForm({ className }: { className: string }) {
  return (
    <form className={`relative max-w-md flex-1 ${className}`}>
      <input
        type="text"
        placeholder="Search for courses, tutors, categories and more"
        className="bg-background-gray w-full rounded-full p-2.5 px-4 pl-8"
      />
      <SearchIcon className="absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 stroke-zinc-500" />
    </form>
  );
}
