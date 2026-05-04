"use client";

import React from "react";
import { motion } from "framer-motion";
import { ResumeAnalysisSidebar } from "@/components/candidate/ResumeAnalysisSidebar/ResumeAnalysisSidebar";
import { OriginCard } from "@/components/candidate/ResumeLab/OriginCard";
import { AdaptationCard } from "@/components/candidate/ResumeLab/AdaptationCard";
import { CVList } from "@/components/candidate/ResumeLab/CVList";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useResumeLab } from "./useResumeLab";


/**
 * ResumeLabScreen - The dedicated space for resume experimentation and optimization.
 */
export const ResumeLabScreen = () => {
  const dispatch = useAppDispatch();
  const cvs = useAppSelector((state) => state.cv.cvs);
  const { currentCv, handleCvClick } = useResumeLab();

  return (
    <main className="ml-[16.25rem] pt-20 flex h-screen overflow-hidden bg-canvas">
      {/* Main Content Area */}
      <section className="flex-grow overflow-y-auto px-8 py-12 space-y-8 no-scrollbar">
        <div className="max-w-5xl mx-auto">
          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-16 px-20">
            <OriginCard />
            <AdaptationCard />
          </div>

          <CVList
            cvs={cvs}
            onCvClick={handleCvClick}
            currentCvId={currentCv?.id}
          />
        </div>
      </section>

      {/* Right Sidebar - Analysis & Insights */}
      <ResumeAnalysisSidebar cv={currentCv} />
    </main>
  );
};
