"use client";

import { HeroSection } from "@/screens/landing/components/HeroSection/HeroSection";
import { useLandingScreen } from "./useLandingScreen";

/**
 * LandingScreen - The root view for the Lugh platform landing page.
 * Strictly follows the "Stretch Strategy" where each section handles its own internal constraints
 * while the screen itself remains a full-width composition.
 */
export const LandingScreen = () => {
  const { } = useLandingScreen();
  return (
    <>
      <HeroSection />
      {/* Additional sections (ValueProp, Features, CTA) can be added here */}
    </>
  );
};
