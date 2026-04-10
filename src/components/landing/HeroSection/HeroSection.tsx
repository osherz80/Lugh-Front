"use client";

import { HeroLeft } from "../HeroLeft/HeroLeft";
import { RegistrationCard } from "../RegistrationCard/RegistrationCard";

export const HeroSection = () => {
  return (
    <div className="relative w-full max-w-[1280px] flex items-center justify-between mx-auto pt-[200px] pb-[150px] px-8">
      <div className="flex-1 max-w-[652px]">
        <HeroLeft />
      </div>
      
      <div className="flex-1 flex justify-end">
        <RegistrationCard />
      </div>
    </div>
  );
};
