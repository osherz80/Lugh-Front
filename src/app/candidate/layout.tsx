import React from "react";
import { Sidebar } from "@/components/candidate/Sidebar/CandidateSidebar";

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-canvas">
      <Sidebar />
      {children}
    </div>
  );
}
