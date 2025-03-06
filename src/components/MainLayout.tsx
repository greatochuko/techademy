"use client";

import { useSidebarContext } from "@/context/sidebarContext";
import React, { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  const { open } = useSidebarContext();

  return (
    <div className="bg-background-gray flex flex-1">
      <section
        className={`bg-background sticky top-14 h-[calc(100dvh-_56px)] p-2 duration-200 ${open ? "w-52" : "w-20"}`}
      ></section>
      <section className="h-[120rem] flex-1">{children}</section>
    </div>
  );
}
