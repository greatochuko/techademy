import React from "react";
import Avatar from "./Avatar";
import { UserType } from "@/lib/types";
import { ChevronDownIcon } from "lucide-react";

export default function UserDropdown({ user }: { user: UserType }) {
  return (
    <button className="flex items-center gap-2">
      <Avatar
        src={user.profilePicture}
        alt={`${user.firstName}'s profile picture`}
        fallback={user.firstName[0] + user.lastName[0]}
      />
      Hi, {user.firstName}
      <ChevronDownIcon className="h-4 w-4" />
    </button>
  );
}
