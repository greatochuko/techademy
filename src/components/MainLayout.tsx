"use client";

import React, { PropsWithChildren } from "react";
import Sidebar from "./header/Sidebar";
import MobileSidebar from "./header/MobileSidebar";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className="bg-background-gray flex flex-1">
      <Sidebar />
      <MobileSidebar />
      <section className="flex-1">{children}</section>
    </main>
  );
}
