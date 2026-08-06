"use client";

import React, { useEffect, useState } from "react";
import { X, Download, Loader2, FileText } from "lucide-react";
import dynamic from "next/dynamic";
import { useAppSelector } from "@/store/hooks";
import { CV } from "@/store/types/cv";
import { CVDocument } from "./CVDocument";

// Dynamically import PDFViewer to avoid Next.js SSR document/window undefined errors
const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-500 bg-slate-50/50">
        <Loader2 className="w-10 h-10 animate-spin text-[#026b5d]" />
        <p className="text-sm font-semibold tracking-wide">Loading PDF preview document...</p>
      </div>
    ),
  }
);

// Dynamically import PDFDownloadLink to prevent SSR execution
const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

interface CVPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  cv: CV | null;
}

export function CVPreviewModal({ isOpen, onClose, cv }: CVPreviewModalProps) {
  const profile = useAppSelector((state) => state.smartProfile);
  const [isClient, setIsClient] = useState(false);

  // Set client flag to ensure react-pdf code only executes on client browser
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Listen to Escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !cv || !isClient) return null;

  const pdfFileName = `${cv.fileName.split(".")[0] || "CV"}_Preview.pdf`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all duration-300">
      {/* Modal backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Panel Container */}
      <div className="relative bg-white rounded-[2rem] w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl border border-slate-100/50 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <header className="px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-teal-50 rounded-xl text-[#026b5d]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 leading-tight">
                {cv.fileName.split(".")[0]}
              </h2>
              <p className="text-xs font-semibold text-slate-500 mt-0.5 uppercase tracking-wider">
                PDF Preview Mode • {cv.roleTag}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Download Button via react-pdf */}
            <PDFDownloadLink
              document={<CVDocument profile={profile} cv={cv} />}
              fileName={pdfFileName}
            >
              {({ loading }) => (
                <button
                  disabled={loading}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#026b5d] hover:bg-[#026b5d]/90 text-white font-bold text-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Download className="w-4 h-4" />
                  )}
                  <span>{loading ? "Preparing PDF..." : "Download"}</span>
                </button>
              )}
            </PDFDownloadLink>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Modal PDF Viewer Body */}
        <div className="flex-grow bg-slate-100/50 overflow-hidden relative">
          <PDFViewer className="w-full h-full border-none" showToolbar={false}>
            <CVDocument profile={profile} cv={cv} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}
