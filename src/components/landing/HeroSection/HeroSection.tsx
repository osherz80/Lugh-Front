"use client";

import { HeroLeft } from "../HeroLeft/HeroLeft";
import { RegistrationCard } from "../RegistrationCard/RegistrationCard";

export const HeroSection = () => {
  return (
    <div className="relative w-full max-w-7xl flex items-center justify-between mx-auto pt-45 pb-37.5 px-8">
      <div className="flex-1 max-w-163">
        <HeroLeft />
      </div>

      <div className="flex-1 flex justify-end">
        <RegistrationCard />
      </div>
    </div>
  );
};
