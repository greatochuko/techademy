"use client";

import React, { PropsWithChildren } from "react";
import Sidebar from "./header/Sidebar";
import MobileSidebar from "./header/MobileSidebar";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex flex-1 w-screen bg-background-gray">
      <Sidebar />
      <MobileSidebar />
      <section className="w-full flex-1 overflow-hidden px-[5%] py-4 sm:px-6">
        {children}
      </section>
    </main>
  );
}
