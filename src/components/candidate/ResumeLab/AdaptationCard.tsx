"use client";

import React, { useState } from "react";
import { FileTrigger, Button, DropZone, Text } from "react-aria-components";
import { motion, AnimatePresence } from "framer-motion";
import { useUploadCVMutation, useLazyGetCandidateCVsQuery } from "@/store/services/api/cv";
import { useAppSelector } from "@/store/hooks";

export function AdaptationCard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadCV, { isLoading }] = useUploadCVMutation();
  const [refetchCvs] = useLazyGetCandidateCVsQuery();
  const user = useAppSelector((state) => state.auth.user);

  const handleFileSelect = (files: File[] | FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];

    // Basic validation
    const allowedExtensions = [".pdf", ".docx"];
    const isAllowed = allowedExtensions.some(ext => file.name.toLowerCase().endsWith(ext));

    if (!isAllowed) {
      alert("Please upload only PDF or DOCX files.");
      return;
    }

    setSelectedFile(file);
  };

  const handleSend = async () => {
    if (!selectedFile || !user?.id) return;

    try {
      await uploadCV({ file: selectedFile }).unwrap();
      // Refetch CVs to update the list in ResumeLabScreen
      refetchCvs();
      // Reset state on success
      setSelectedFile(null);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload CV. Please try again.");
    }
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
  };

  return (
    <DropZone
      onDrop={async (e) => {
        const files = e.items.filter((item) => item.kind === "file");
        if (files.length > 0) {
          const fileList = await Promise.all(
            files.map((file) => (file as any).getFile())
          );
          handleFileSelect(fileList);
        }
      }}
      className="h-full outline-none group"
    >
      {({ isDropTarget }) => (
        <div
          className={`relative rounded-3xl p-10 border-2 border-dashed transition-all duration-300 flex flex-col items-center text-center h-full min-h-[420px] outline-none focus-visible:ring-2 focus-visible:ring-brand/50 ${isDropTarget
              ? "border-brand bg-brand/10 shadow-2xl ring-4 ring-brand/10"
              : selectedFile
                ? "border-brand/40 bg-white shadow-md"
                : "border-zinc-200/80 bg-surface-low hover:border-brand/40"
            }`}
        >
          {/* Animated Background Pulse for Dragging */}
          <AnimatePresence>
            {isDropTarget && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="absolute inset-0 bg-brand/5 rounded-3xl pointer-events-none"
                style={{ zIndex: 0 }}
              />
            )}
          </AnimatePresence>

          {/* Icon with animation */}
          <div className="h-24 flex items-center justify-center mb-2">
            <motion.div
              animate={{
                scale: isDropTarget || selectedFile ? 1.25 : 1,
                rotate: isDropTarget ? [0, -5, 5, -5, 5, 0] : 0
              }}
              transition={{
                rotate: isDropTarget ? { repeat: Infinity, duration: 0.5 } : { duration: 0.3 }
              }}
              className={`w-16 h-16 rounded-full flex items-center justify-center shadow-sm transition-colors relative z-10 ${isDropTarget || selectedFile ? "bg-brand text-white shadow-brand/20" : "bg-white text-brand"
                }`}
            >
              <span
                className="material-symbols-outlined text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {isLoading ? "sync" : isDropTarget ? "download" : selectedFile ? "description" : "upload_file"}
              </span>
            </motion.div>
          </div>

          {/* Content Area with fixed/min height for stability */}
          <div className="flex-grow flex flex-col items-center justify-start relative z-10 w-full min-h-[140px]">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
              {isDropTarget ? "Drop it here!" : selectedFile ? "Ready to Adapt" : "The Adaptation"}
            </h2>

            <div className="h-20 flex items-start justify-center w-full">
              <AnimatePresence mode="wait">
                {selectedFile && !isDropTarget ? (
                  <motion.div
                    key="file-info"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex flex-col items-center w-full"
                  >
                    <div className="flex items-center bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 max-w-full overflow-hidden shadow-sm">
                      <span className="text-sm font-medium text-slate-700 truncate max-w-[180px]">
                        {selectedFile.name}
                      </span>
                      <button
                        onClick={clearSelection}
                        className="ml-2 text-slate-400 hover:text-red-500 transition-colors cursor-pointer p-0.5"
                      >
                        <span className="material-symbols-outlined text-sm">close</span>
                      </button>
                    </div>
                    <p className="text-slate-400 text-xs mt-3 font-medium">Click send to upload and analyze</p>
                  </motion.div>
                ) : (
                  <motion.p
                    key="default-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-slate-500 leading-relaxed text-[0.95rem] max-w-sm"
                  >
                    {isDropTarget
                      ? "Release to stage your resume"
                      : "Drop your existing resume here or paste a job link to tailor perfectly to the role requirements."}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Action Button Area */}
          <div className="mt-auto w-full relative z-10 pt-4">
            <div className="h-[72px] flex flex-col justify-end">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center py-4 text-brand font-bold"
                  >
                    <span className="material-symbols-outlined animate-spin mr-2">sync</span>
                    Uploading...
                  </motion.div>
                ) : selectedFile && !isDropTarget ? (
                  <motion.div
                    key="send-button"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <Button
                      onClick={handleSend}
                      className="w-full bg-brand text-white font-bold py-4 px-6 rounded-xl transition-all hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/20 active:scale-[0.98] shadow-md cursor-pointer flex items-center justify-center"
                    >
                      <span className="material-symbols-outlined mr-2">send</span>
                      Send Resume
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="select-button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <FileTrigger
                      acceptedFileTypes={[".pdf", ".docx"]}
                      onSelect={(e) => {
                        if (e) {
                          handleFileSelect(Array.from(e));
                        }
                      }}
                    >
                      <Button className="w-full bg-white border border-slate-200 text-slate-700 font-bold py-4 px-6 rounded-xl transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-brand/50 cursor-pointer">
                        Select File
                      </Button>
                    </FileTrigger>
                    <p className="text-center text-xs text-slate-400 mt-3 font-medium">
                      PDF, DOCx up to 10MB
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </DropZone>
  );
}
