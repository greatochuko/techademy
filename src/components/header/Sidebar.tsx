import { useSidebarContext } from "@/context/sidebarContext";
import { HouseIcon, LayersIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { text: "Home", href: "/", Icon: HouseIcon },
  { text: "Explore", href: "/explore", Icon: SearchIcon },
  { text: "Categories", href: "/categories", Icon: LayersIcon },
];

export default function Sidebar() {
  const { open } = useSidebarContext();

  const pathname = usePathname();

  const isCurrentPath = (href: string) => {
    return href === "/" ? pathname === href : pathname.startsWith(href);
  };

  return (
    <section
      className={`bg-background sticky top-14 h-[calc(100dvh-_56px)] px-2 py-4 duration-200 ${open ? "w-16 md:w-52" : "w-16"}`}
    >
      <nav>
        <ul className="flex flex-col gap-2">
          {navLinks.map((navLink) => (
            <li key={navLink.text} className="flex duration-200">
              <Link
                className={`hover:bg-background-gray flex w-full items-center rounded-full px-4 py-3 duration-200 ${isCurrentPath(navLink.href) ? "bg-background-gray" : ""}`}
                href={navLink.href}
              >
                <navLink.Icon className="my-0.5 h-4 w-4" />
                <span
                  className={`flex-1 overflow-hidden duration-200 ${open ? "md:ml-2" : "ml-0"}`}
                >
                  {navLink.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
