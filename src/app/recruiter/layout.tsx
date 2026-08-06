"use client";

import React, { useEffect } from "react";
import { Sidebar } from "@/components/recruiter/Sidebar/RecruiterSidebar";
import { useAppDispatch } from "@/store/hooks";
import { setMode } from "@/store/features/appSlice";

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Switch to recruiter mode globally
    dispatch(setMode("recruiter"));
  }, [dispatch]);

  return (
    <div className="theme-recruiter relative min-h-screen bg-canvas">
      <Sidebar />
      {children}
    </div>
  );
}
