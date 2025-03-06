"use client";

import { useSidebarContext } from "@/context/sidebarContext";
import React, { PropsWithChildren } from "react";
import Sidebar from "./header/Sidebar";

export default function MainLayout({ children }: PropsWithChildren) {
  const { open } = useSidebarContext();

  return (
    <main className="bg-background-gray flex flex-1">
      <Sidebar open={open} />
      <section className="flex-1">{children}</section>
    </main>
  );
}
