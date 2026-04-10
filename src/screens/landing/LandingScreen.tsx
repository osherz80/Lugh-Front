"use client";

import { Header } from "@/components/landing/Header/Header";
import { HeroSection } from "@/components/landing/HeroSection/HeroSection";
import { Footer } from "@/components/landing/Footer/Footer";

export const LandingScreen = () => {
  return (
    <div className="flex flex-col min-h-screen bg-canvas font-sans selection:bg-seeker/20 selection:text-seeker relative overflow-hidden">
      <Header />
      
      <main className="flex-1 flex flex-col items-center w-full">
        <HeroSection />
        {/* Additional sections can be added here */}
      </main>
      
      <Footer />
    </div>
  );
};
