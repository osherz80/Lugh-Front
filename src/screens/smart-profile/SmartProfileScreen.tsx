"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Trail } from "@/components/shared/Trail/Trail";
import { StartNode } from "./components/StartNode/StartNode";
import { StepCard } from "./components/StepCard/StepCard";
import { useSmartProfile } from "./useSmartProfile";

export interface StepData {
  id: number;
  stepNumber: number;
  totalSteps: number;
  title: string;
  description: string;
  quote: string;
  icon: string;
  isEmoji?: boolean;
}

const steps: StepData[] = [
  {
    id: 1,
    stepNumber: 1,
    icon: "👋",
    title: "HI! Nice to meet",
    description: "in this step we will get to know you for the first time!",
    quote: "Some sentence about how exiting is to meet new people",
    totalSteps: 6,
    isEmoji: true,
  },
  {
    id: 2,
    stepNumber: 2,
    totalSteps: 6,
    title: "Lets go to work",
    description: "in this step we will meet you at your workspace",
    quote: "Some sentence about how exiting is to meet new people",
    icon: "engineering", // Material icon name
    isEmoji: false,
  },
  {
    id: 3,
    stepNumber: 3,
    totalSteps: 6,
    title: "Your Expertise",
    description: "Tell us about the skills that make you a pro",
    quote: "Expertise is built one step at a time",
    icon: "psychology",
    isEmoji: false,
  },
  // Add more steps as needed or just these for now
];



import { Step1Modal } from "./components/Step1Modal/Step1Modal";

export const SmartProfileScreen = () => {
  const { 
    scrollRef, 
    handleWheel, 
    isStep1ModalOpen, 
    openStep1Modal, 
    closeStep1Modal 
  } = useSmartProfile();

  return (
    <main className="ml-[16.25rem] pt-20 flex h-screen overflow-hidden bg-[#F8FAFC]">
      <section
        ref={scrollRef}
        onWheel={handleWheel}
        className="flex-grow overflow-x-auto no-scrollbar py-12 px-20 flex items-center"
      >
        <div className="flex items-center min-w-max pr-40 h-full">
          {/* Start Node */}
          <StartNode />

          <Trail />

          {/* Steps Flow */}
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <StepCard 
                step={step} 
                onAction={step.id === 1 ? openStep1Modal : undefined} 
              />
              {index < steps.length - 1 && <Trail />}
            </React.Fragment>
          ))}

          {/* Future Steps Indicator */}
          <Trail />
          <div className="w-[400px] h-[520px] rounded-[40px] border-2 border-dashed border-slate-200 flex items-center justify-center bg-slate-50/50">
            <span className="text-slate-300 font-bold text-xl uppercase tracking-widest">Upcoming Steps</span>
          </div>
        </div>
      </section>

      <Step1Modal 
        isOpen={isStep1ModalOpen} 
        onOpenChange={closeStep1Modal} 
      />
    </main>
  );
};

