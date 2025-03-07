"use client";

import React, { PropsWithChildren } from "react";
import Sidebar from "./header/Sidebar";
import MobileSidebar from "./header/MobileSidebar";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className="bg-background-gray flex w-screen flex-1">
      <Sidebar />
      <MobileSidebar />
      <section className="w-full flex-1 overflow-hidden p-4">
        {children}
      </section>
    </main>
  );
}
