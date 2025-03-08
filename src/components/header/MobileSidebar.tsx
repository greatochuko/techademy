import { useSidebarContext } from "@/context/sidebarContext";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./Logo";
import { navLinks } from "@/lib/data";

export default function MobileSidebar() {
  const { open, toggleSidebar } = useSidebarContext();

  const pathname = usePathname();

  const isCurrentPath = (href: string) => {
    return href === "/" ? pathname === href : pathname.startsWith(href);
  };

  return (
    <div
      onClick={toggleSidebar}
      className={`fixed top-0 left-0 z-20 h-full w-full duration-200 md:hidden ${open ? "bg-black/50" : "invisible"}`}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className={`bg-background flex h-full w-52 flex-col gap-8 px-2 py-4 duration-200 ${open ? "translate-x-0" : "-translate-x-[100%]"}`}
      >
        <div className="flex items-center justify-between gap-4 px-2">
          <Logo />
          <button
            onClick={toggleSidebar}
            className="hover:bg-background-gray rounded-full p-2 duration-200"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <nav>
          <ul className="flex flex-col gap-2">
            {navLinks.map((navLink) => (
              <li key={navLink.text} className="flex duration-200">
                <Link
                  className={`hover:bg-background-gray flex w-full items-center rounded-full px-4 py-3 duration-200 ${isCurrentPath(navLink.href) ? "bg-background-gray" : ""}`}
                  href={navLink.href}
                >
                  <navLink.Icon className="my-0.5 h-4 w-4" />
                  <span className={`ml-2 flex-1 overflow-hidden duration-200`}>
                    {navLink.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </div>
  );
}
