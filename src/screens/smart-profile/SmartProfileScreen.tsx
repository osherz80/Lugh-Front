"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Trail } from "@/components/shared/Trail/Trail";
import { StartNode } from "./components/StartNode/StartNode";
import { StepCard } from "./components/StepCard/StepCard";
import { useSmartProfile } from "./useSmartProfile";
import dynamic from "next/dynamic";

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
    title: "Professional Story",
    description: "Tell us about your career milestones and achievements",
    quote: "Every great career started with a single story",
    icon: "history_edu",
    isEmoji: false,
  },
  {
    id: 4,
    stepNumber: 4,
    totalSteps: 6,
    title: "Academic Expertise",
    description: "Showcase your degrees, certifications and self-taught paths",
    quote: "Knowledge is the only asset that grows when shared",
    icon: "school",
    isEmoji: false,
  },
  {
    id: 5,
    stepNumber: 5,
    totalSteps: 6,
    title: "Work Persona",
    description: "Define your professional style and strongest attributes",
    quote: "Your persona is your unique professional footprint",
    icon: "psychology_alt",
    isEmoji: false,
  },
  {
    id: 6,
    stepNumber: 6,
    totalSteps: 6,
    title: "Global Impact",
    description: "Finalize your contact details and highlight your unique value",
    quote: "Your story is global, let's make sure it resonates everywhere",
    icon: "public",
    isEmoji: false,
  },
];



const Step1Modal = dynamic(() => import("./components/Step1Modal/Step1Modal"), { ssr: false });
const Step2Modal = dynamic(() => import("./components/Step2Modal/Step2Modal"), { ssr: false });
const Step3Modal = dynamic(() => import("./components/Step3Modal/Step3Modal"), { ssr: false });
const Step4Modal = dynamic(() => import("./components/Step4Modal/Step4Modal"), { ssr: false });
const Step5Modal = dynamic(() => import("./components/Step5Modal/Step5Modal"), { ssr: false });
const Step6Modal = dynamic(() => import("./components/Step6Modal/Step6Modal"), { ssr: false });

export const SmartProfileScreen = () => {
  const {
    scrollRef,
    handleWheel,
    isStep1ModalOpen,
    openStep1Modal,
    closeStep1Modal,
    isStep2ModalOpen,
    openStep2Modal,
    closeStep2Modal,
    isStep3ModalOpen,
    openStep3Modal,
    closeStep3Modal,
    isStep4ModalOpen,
    openStep4Modal,
    closeStep4Modal,
    isStep5ModalOpen,
    openStep5Modal,
    closeStep5Modal,
    isStep6ModalOpen,
    openStep6Modal,
    closeStep6Modal
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
                onAction={
                  step.id === 1 ? openStep1Modal :
                    step.id === 2 ? openStep2Modal :
                      step.id === 3 ? openStep3Modal :
                        step.id === 4 ? openStep4Modal :
                          step.id === 5 ? openStep5Modal :
                            step.id === 6 ? openStep6Modal :
                              undefined
                }
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

      <Step2Modal
        isOpen={isStep2ModalOpen}
        onOpenChange={closeStep2Modal}
      />

      <Step3Modal
        isOpen={isStep3ModalOpen}
        onOpenChange={closeStep3Modal}
      />

      <Step4Modal
        isOpen={isStep4ModalOpen}
        onOpenChange={closeStep4Modal}
      />

      <Step5Modal
        isOpen={isStep5ModalOpen}
        onOpenChange={closeStep5Modal}
      />

      <Step6Modal
        isOpen={isStep6ModalOpen}
        onOpenChange={closeStep6Modal}
      />
    </main>
  );
};



