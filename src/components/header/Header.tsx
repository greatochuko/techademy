"use client";

import React, { useState } from "react";
import SearchForm from "./SearchForm";
import Link from "next/link";
import { ChevronDownIcon, MenuIcon, PlusIcon, UserIcon } from "lucide-react";
import { UserType } from "@/lib/types";
import Avatar from "./Avatar";
import UserDropdown from "./UserDropdown";

type HeaderProps = {
  user?: UserType | null;
  className: string;
};

export default function Header({ user, className }: HeaderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="flex items-center gap-4 px-4 py-2">
      <button onClick={() => setSidebarOpen((curr) => !curr)}>
        <MenuIcon className="h-5 w-5" />
      </button>
      <h1 className={`text-base font-medium uppercase ${className}`}>
        Techademy
      </h1>
      <SearchForm className="mx-auto" />
      {user ? (
        <>
          <button className="mr-4 flex items-center gap-2 rounded-full border border-zinc-200 p-2 px-4 duration-200 hover:bg-zinc-100">
            <PlusIcon className="h-4 w-4" />
            Create
          </button>
          <UserDropdown user={user} />
        </>
      ) : (
        <Link
          href={"/login"}
          className="flex items-center gap-2 rounded-full border border-zinc-200 p-2 px-4 duration-200 hover:bg-zinc-100"
        >
          <UserIcon className="h-4 w-4" />
          Sign in
        </Link>
      )}
    </header>
  );
}
