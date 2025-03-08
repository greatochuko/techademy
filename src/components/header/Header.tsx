import React from "react";
import SearchForm from "./SearchForm";
import Link from "next/link";
import { PlusIcon, SearchIcon, UserIcon } from "lucide-react";
import { UserType } from "@/lib/types";
import UserDropdown from "./UserDropdown";
import ToggleSidebarButton from "./ToggleSidebarButton";
import Logo from "./Logo";

type HeaderProps = {
  user?: UserType | null;
};

export default function Header({ user }: HeaderProps) {
  return (
    <header className="bg-background sticky top-0 z-10 flex items-center gap-2 px-4 py-2 shadow-xs min-[480px]:gap-4">
      <ToggleSidebarButton />
      <Logo />
      <SearchForm className="mx-auto max-[480px]:hidden" />
      <button className="hover:bg-background-gray ml-auto rounded-full p-2.5 duration-200 min-[480px]:hidden">
        <SearchIcon className="h-4 w-4" />
      </button>
      {user ? (
        <>
          <button className="hover:bg-background-gray flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-[9px] duration-200 md:mr-4">
            <PlusIcon className="h-4 w-4" />
            Contribute
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
