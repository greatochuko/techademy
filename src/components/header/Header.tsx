"use client";

import React from "react";
import SearchForm from "./SearchForm";
import Link from "next/link";
import { MenuIcon, PlusIcon, UserIcon } from "lucide-react";
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
    <header className="bg-background sticky top-0 z-10 flex items-center gap-4 px-4 py-2 shadow-xs">
      <button onClick={toggleSidebar}>
        <MenuIcon className="h-5 w-5" />
      </button>
      <h1 className={`text-base font-medium uppercase ${className}`}>
        Techademy
      </h1>
      <SearchForm className="mx-auto" />
      {user ? (
        <>
          <button className="hover:bg-background-gray mr-4 flex items-center gap-2 rounded-full border border-zinc-200 p-2 px-4 duration-200">
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
