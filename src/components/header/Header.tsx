"use client";

import React from "react";
import SearchForm from "./SearchForm";
import Link from "next/link";
import { MenuIcon, PlusIcon, SearchIcon, UserIcon } from "lucide-react";
import { UserType } from "@/lib/types";
import UserDropdown from "./UserDropdown";
import { useSidebarContext } from "@/context/sidebarContext";

type HeaderProps = {
  user?: UserType | null;
  className: string;
};

export default function Header({ user, className }: HeaderProps) {
  const { toggleSidebar } = useSidebarContext();

  return (
    <header className="bg-background sticky top-0 z-10 flex items-center gap-2 px-4 py-2 shadow-xs min-[480px]:gap-4">
      <button onClick={toggleSidebar}>
        <MenuIcon className="h-5 w-5" />
      </button>
      <h1 className={`text-base font-medium uppercase ${className}`}>
        Techademy
      </h1>
      <SearchForm className="mx-auto max-[480px]:hidden" />
      <button className="hover:bg-background-gray ml-auto rounded-full p-2 duration-200 min-[480px]:hidden">
        <SearchIcon className="h-4 w-4" />
      </button>
      {user ? (
        <>
          <button className="hover:bg-background-gray flex items-center gap-2 rounded-full border border-zinc-200 p-2 px-4 duration-200 min-[480px]:mr-4">
            <PlusIcon className="h-4 w-4" />
            Create
          </button>
          <UserDropdown user={user} />
        </>
      ) : (
        <Link
          href={"/login"}
          className="hover:bg-background-gray flex items-center gap-2 rounded-full border border-zinc-200 p-2 px-4 duration-200"
        >
          <UserIcon className="h-4 w-4" />
          Sign in
        </Link>
      )}
    </header>
  );
}
