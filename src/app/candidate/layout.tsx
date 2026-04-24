import React from "react";
import { Sidebar } from "@/components/candidate/Sidebar/Sidebar";
import { Header } from "@/components/candidate/Header/Header";

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-canvas">
      <Sidebar />
      <Header />
      {children}
    </div>
  );
}
