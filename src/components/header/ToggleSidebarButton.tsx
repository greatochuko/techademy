"use client";

import { useSidebarContext } from "@/context/sidebarContext";
import { MenuIcon } from "lucide-react";
import React from "react";

export default function ToggleSidebarButton() {
  const { toggleSidebar } = useSidebarContext();

  return (
    <button
      onClick={toggleSidebar}
      className="hover:bg-background-gray rounded-full p-2 duration-200"
    >
      <MenuIcon className="h-5 w-5" />
    </button>
  );
}
