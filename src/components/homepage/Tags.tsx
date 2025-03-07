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
  const [canScrollRight, setCanScrollRight] = useState(true); // Initially set to true, as it can scroll to the right.

  // Handle scrolling to the right
  function handleScrollRight() {
    if (tagsRef.current) {
      tagsRef.current.scrollBy({
        left: tagsRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }

  // Handle scrolling to the left
  function handleScrollLeft() {
    if (tagsRef.current) {
      tagsRef.current.scrollBy({
        left: -tagsRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }

  // Update scrollable state on scroll
  function updateScrollStates() {
    if (tagsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tagsRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  }

  // Attach event listener to detect scroll changes
  useEffect(() => {
    updateScrollStates(); // Initial check
    const onScroll = () => updateScrollStates();

    const currentTagsRef = tagsRef.current;
    currentTagsRef?.addEventListener("scroll", onScroll);

    // Cleanup the event listener on unmount
    return () => {
      currentTagsRef?.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={handleScrollLeft}
        disabled={!canScrollLeft}
        className={`p-2 ${!canScrollLeft ? "cursor-not-allowed opacity-50" : "text-accent-gray-200 hover:text-foreground"}`}
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
            className="bg-background text-accent-gray-200 hover:text-foreground inline-block rounded-full p-1 px-2 duration-200"
          >
            {tag}
          </Link>
        ))}
      </div>

      <button
        onClick={handleScrollRight}
        disabled={!canScrollRight}
        className={`p-2 ${!canScrollRight ? "cursor-not-allowed opacity-50" : "text-accent-gray-200 hover:text-foreground"}`}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
