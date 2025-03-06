"use client";

import { createContext, useState, ReactNode } from "react";
import { useContext } from "react";

type SidebarContextType = {
  open: boolean;
  toggleSidebar: () => void;
} | null;

export const SidebarContext = createContext<SidebarContextType>(null);

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ open, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
};
