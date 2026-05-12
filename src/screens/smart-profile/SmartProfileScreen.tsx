"use client";

import React from "react";
import { Trail } from "@/components/shared/Trail/Trail";
import { StartNode } from "./components/StartNode/StartNode";
import { StepCard } from "./components/StepCard/StepCard";
import { useSmartProfile } from "./useSmartProfile";
import dynamic from "next/dynamic";

export interface StepData {
  id: number;
  stepNumber: number;
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
    icon: "/assets/svg/waving-hand.svg",
    title: "Hello!",
    description: "Hi nice to meet you! I am so excited to get to know you!",
    quote: "Every great CV starts with a single, authentic introduction. Let’s build yours.",
    isEmoji: false,
  },
  {
    id: 2,
    stepNumber: 2,
    title: "Skills",
    description: "Let us know what Skills & Tools you good at",
    quote: "Your skills are the tools, but your expertise is the masterpiece.",
    icon: "/assets/svg/radar.svg",
    isEmoji: false,
  },
  {
    id: 3,
    stepNumber: 3,
    title: "Experience",
    description: "Tell us about your career milestones and achievements",
    quote: "Don't just list where you've worked—show us the impact you've made.",
    icon: "/assets/svg/construction-building.svg",
    isEmoji: false,
  },
  {
    id: 4,
    stepNumber: 4,
    title: "Education",
    description: "Showcase your degrees, certifications and self-taught paths",
    quote: "Education is the foundation; lifelong learning is the skyscraper.",
    icon: "/assets/svg/gear-book.svg",
    isEmoji: false,
  },
  {
    id: 5,
    stepNumber: 5,
    title: "Personality",
    description: "Define your professional style and strongest attributes",
    quote: "Hard skills get you the interview, but your persona gets you the job.",
    icon: "/assets/svg/personality.svg",
    isEmoji: false,
  },
  {
    id: 6,
    stepNumber: 6,
    title: "Contact",
    description: "We would like to stay in touch and hear more about you",
    quote: "Your story is global. Let's make sure the world knows how to reach it.",
    icon: "/assets/svg/contact-book.svg",
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
    closeStep6Modal,
    handleSend,
    isSending
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
                totalSteps={steps.length}
              />
              {index < steps.length - 1 && <Trail />}
            </React.Fragment>
          ))}

          {/* Finish & Send Action */}
          <Trail />
          <div className="w-[400px] flex flex-col items-center justify-center gap-10 py-12 px-8 bg-white/40 rounded-[40px] border-2 border-dashed border-[#00a18a]/30 backdrop-blur-sm">
            <div className="relative">
              <div className="w-28 h-28 bg-[#00a18a]/10 rounded-full flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-[#00a18a] text-6xl">rocket_launch</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#005c4d] rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <span className="material-symbols-outlined text-white text-[18px]">check</span>
              </div>
            </div>

            <div className="text-center space-y-3">
              <h3 className="text-[#1e293b] font-[900] text-2xl tracking-tight">Ready to Fly?</h3>
              <p className="text-slate-500 font-bold text-[15px] leading-relaxed max-w-[280px]">
                Your smart profile is complete. Send it to our AI to generate your professional story.
              </p>
            </div>

            <button
              onClick={handleSend}
              disabled={isSending}
              className="w-full bg-[#00a18a] hover:bg-[#008f7a] text-white font-black py-6 px-10 rounded-[28px] transition-all shadow-2xl shadow-[#00a18a]/30 active:scale-[0.98] text-[20px] flex items-center justify-center gap-4 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  Sending Profile...
                  <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                </>
              ) : (
                <>
                  Finish & Send
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      <Step1Modal
        isOpen={isStep1ModalOpen}
        onOpenChange={closeStep1Modal}
        icon={steps[0].icon}
      />

      <Step2Modal
        isOpen={isStep2ModalOpen}
        onOpenChange={closeStep2Modal}
        icon={steps[1].icon}
      />

      <Step3Modal
        isOpen={isStep3ModalOpen}
        onOpenChange={closeStep3Modal}
        icon={steps[2].icon}
      />

      <Step4Modal
        isOpen={isStep4ModalOpen}
        onOpenChange={closeStep4Modal}
        icon={steps[3].icon}
      />

      <Step5Modal
        isOpen={isStep5ModalOpen}
        onOpenChange={closeStep5Modal}
        icon={steps[4].icon}
      />

      <Step6Modal
        isOpen={isStep6ModalOpen}
        onOpenChange={closeStep6Modal}
        icon={steps[5].icon}
      />
    </main>
  );
};



