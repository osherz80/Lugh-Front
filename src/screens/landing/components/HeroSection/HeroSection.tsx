"use client";

import { HeroLeft } from "@/screens/landing/components/HeroLeft/HeroLeft";
import { RegistrationCard } from "@/screens/landing/components/RegistrationCard/RegistrationCard";
import { useHeroSection } from "./useHeroSection";

export const HeroSection = () => {
  const { } = useHeroSection();
  return (
    <section className="w-full relative overflow-hidden bg-canvas">
      <div className="max-w-7xl mx-auto px-8 pt-44 pb-38 flex items-center justify-between">
        <div className="flex-1 max-w-163 mr-50">
          <HeroLeft />
        </div>

        <div className="flex-1 flex justify-end">
          <RegistrationCard />
        </div>
      </div>
    </section>
  );
};
