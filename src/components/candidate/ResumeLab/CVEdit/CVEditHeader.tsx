"use client";

import React from "react";
import { FileText, Save, Loader2, X } from "lucide-react";
import { CV } from "@/store/types/cv";

interface CVEditHeaderProps {
  cv: CV;
  onSave: () => void;
  isSaving: boolean;
  onClose: () => void;
}

export function CVEditHeader({ cv, onSave, isSaving, onClose }: CVEditHeaderProps) {
  return (
    <header className="px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-teal-50 rounded-xl text-[#026b5d]">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-extrabold text-slate-900 leading-tight">
            Edit CV: {cv.fileName.split(".")[0]}
          </h2>
          <p className="text-xs font-semibold text-slate-500 mt-0.5 uppercase tracking-wider">
            Editing Mode • {cv.roleTag}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#026b5d] hover:bg-[#026b5d]/90 text-white font-bold text-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
        >
          {isSaving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          <span>{isSaving ? "Saving..." : "Save Changes"}</span>
        </button>

        <button
          onClick={onClose}
          className="p-2.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
