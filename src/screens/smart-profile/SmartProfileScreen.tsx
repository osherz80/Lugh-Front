"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

interface StepData {
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
    totalSteps: 6,
    title: "HI! Nice to meet",
    description: "in this step we will get to know you for the first time!",
    quote: "Some sentence about how exiting is to meet new people",
    icon: "👋",
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

const Connector = () => (
  <div className="flex items-center space-x-2 px-8 opacity-40">
    <div className="w-6 h-1.5 bg-slate-300 rounded-full" />
    <div className="w-6 h-1.5 bg-slate-300 rounded-full" />
    <div className="w-6 h-1.5 bg-slate-300 rounded-full" />
  </div>
);

const StartNode = () => (
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 rounded-full border-[5px] border-brand flex items-center justify-center bg-white shadow-xl mb-4">
      <span className="material-symbols-outlined text-brand text-4xl font-bold">flag</span>
    </div>
    <span className="text-slate-400 font-bold tracking-widest text-sm">START</span>
  </div>
);

const StepCard = ({ step }: { step: StepData }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative bg-white rounded-[40px] p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100/50 flex flex-col items-center text-center w-[440px] h-[580px]"
  >
    {/* Step Badge */}
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#008f7a] text-white text-[11px] font-bold px-8 py-2 rounded-full tracking-wider uppercase shadow-lg shadow-[#008f7a]/20">
      Step {step.stepNumber}/{step.totalSteps}
    </div>

    {/* Icon Container */}
    <div className="h-28 flex items-center justify-center mb-8">
      {step.isEmoji ? (
        <span className="text-7xl drop-shadow-sm">{step.icon}</span>
      ) : (
        <span className="material-symbols-outlined text-7xl text-slate-700 drop-shadow-sm">
          {step.icon}
        </span>
      )}
    </div>

    {/* Title & Description */}
    <div className="flex-grow flex flex-col items-center">
      <h2 className="text-[28px] font-[900] text-[#1e293b] mb-6 tracking-tight leading-tight">
        {step.title}
      </h2>
      <p className="text-slate-500 font-medium leading-relaxed px-6 mb-10 text-[17px]">
        {step.description}
      </p>

      {/* Quote Box */}
      <div className="bg-[#f0f9f8] border-l-[6px] border-brand p-6 rounded-2xl w-full text-left">
        <p className="text-slate-500 italic text-[15px] leading-relaxed">
          "{step.quote}"
        </p>
      </div>
    </div>

    {/* Action Button */}
    <button className="w-full bg-[#00a18a] hover:bg-[#008f7a] text-white font-bold py-6 px-8 rounded-[24px] transition-all shadow-xl shadow-[#00a18a]/20 active:scale-[0.98] mt-10 text-[19px]">
      Lets Go
    </button>
  </motion.div>
);

export const SmartProfileScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="ml-[16.25rem] pt-20 flex h-screen overflow-hidden bg-[#F8FAFC]">
      <section className="flex-grow overflow-x-auto no-scrollbar py-12 px-20 flex items-center">
        <div className="flex items-center min-w-max pr-40 h-full">
          {/* Start Node */}
          <StartNode />
          
          <Connector />

          {/* Steps Flow */}
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <StepCard step={step} />
              {index < steps.length - 1 && <Connector />}
            </React.Fragment>
          ))}

          {/* Future Steps Indicator */}
          <Connector />
          <div className="w-[400px] h-[520px] rounded-[40px] border-2 border-dashed border-slate-200 flex items-center justify-center bg-slate-50/50">
            <span className="text-slate-300 font-bold text-xl uppercase tracking-widest">Upcoming Steps</span>
          </div>
        </div>
      </section>

      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-2 text-slate-400 font-medium animate-pulse">
        <span className="material-symbols-outlined">east</span>
        <span className="text-sm">Scroll to explore the journey</span>
      </div>
    </main>
  );
};
