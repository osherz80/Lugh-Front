"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";

/**
 * AppThemeProvider - Manages global CSS theme classes based on the application mode.
 * Applies .theme-recruiter to the document body when in recruiter mode.
 */
export const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const mode = useAppSelector((state) => state.app.mode);

  useEffect(() => {
    // Sync theme class with document body for global CSS variable overrides
    if (mode === "recruiter") {
      document.body.classList.add("theme-recruiter");
    } else {
      document.body.classList.remove("theme-recruiter");
    }
  }, [mode]);

  return <>{children}</>;
};
