"use client";

import { convertToURL } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";

const tags = [
  "Web Dev",
  "Frontend",
  "Backend",
  "Full-Stack",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Database",
  "MongoDB",
  "SQL",
  "Cybersecurity",
  "DSA",
  "AI",
  "Machine Learning",
  "Cloud",
  "DevOps",
  "UI/UX",
];

export default function Tags() {
  const tagsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function handleScrollRight() {
    if (tagsRef.current) {
      tagsRef.current.scrollBy({
        left: tagsRef.current.offsetWidth / 4,
        behavior: "smooth",
      });
    }
  }

  function handleScrollLeft() {
    if (tagsRef.current) {
      tagsRef.current.scrollBy({
        left: -tagsRef.current.offsetWidth / 4,
        behavior: "smooth",
      });
    }
  }

  function updateScrollStates() {
    if (tagsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tagsRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  }

  useEffect(() => {
    updateScrollStates(); // Initial check
    const onScroll = () => updateScrollStates();

    const currentTagsRef = tagsRef.current;
    currentTagsRef?.addEventListener("scroll", onScroll);

    return () => {
      currentTagsRef?.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={handleScrollLeft}
        disabled={!canScrollLeft}
        className={`p-1 pr-0 sm:p-2 sm:pr-0 ${!canScrollLeft ? "cursor-not-allowed opacity-50" : "text-accent-gray-200 hover:text-foreground"}`}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      <div
        ref={tagsRef}
        className="no-scrollbar flex w-full items-center gap-2 overflow-x-auto whitespace-nowrap"
      >
        {tags.map((tag) => (
          <Link
            href={`/search?query=${convertToURL(tag)}`}
            key={tag}
            className="bg-background text-accent-gray-200 hover:text-foreground inline-block rounded-full p-1 px-2 text-[.9rem] duration-200"
          >
            {tag}
          </Link>
        ))}
      </div>

      <button
        onClick={handleScrollRight}
        disabled={!canScrollRight}
        className={`p-1 pl-0 sm:p-2 sm:pl-0 ${!canScrollRight ? "cursor-not-allowed opacity-50" : "text-accent-gray-200 hover:text-foreground"}`}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
