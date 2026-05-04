"use client";

import React, { useState } from "react";
import {
  DropZone,
  FileTrigger,
  Button,
  Text,
  composeRenderProps,
} from "react-aria-components";
import { useUploadCVMutation } from "@/store/services/api/api";
import { useAppSelector } from "@/store/hooks";
import { tv } from "tailwind-variants";

const dropZoneStyles = tv({
  base: "flex flex-col items-center justify-center p-12 rounded-[2rem] border-2 border-dashed transition-all duration-200 outline-none",
  variants: {
    isDropTarget: {
      true: "border-brand bg-brand-tint/30 scale-[1.02]",
      false: "border-zinc-200 bg-surface-low hover:border-brand/50 hover:bg-brand-tint/10",
    },
    isFocusVisible: {
      true: "ring-2 ring-brand ring-offset-2",
    },
  },
});

export function CVUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadCV, { isLoading, isSuccess, isError, error }] = useUploadCVMutation();
  const user = useAppSelector((state) => state.auth.user);
  const userId = user?.id;

  const handleUpload = async () => {
    console.log('user', user)
    if (!file || !userId) return;
    try {
      await uploadCV({ file, userId }).unwrap();
      setFile(null); // Clear after success
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <DropZone
        className={composeRenderProps("", (className, renderProps) =>
          dropZoneStyles({ ...renderProps, className })
        )}
        getDropOperation={(types) =>
          types.has("application/pdf") ||
            types.has("application/msword") ||
            types.has("application/vnd.openxmlformats-officedocument.wordprocessingml.document")
            ? "copy"
            : "cancel"
        }
        onDrop={async (e) => {
          const item = e.items.find((item) => item.kind === "file");
          if (item) {
            const droppedFile = await item.getFile();
            setFile(droppedFile);
          }
        }}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-brand">
            <span className="material-symbols-outlined text-3xl">
              {file ? "description" : "cloud_upload"}
            </span>
          </div>

          <div className="space-y-1">
            <Text slot="label" className="text-lg font-bold text-slate-900">
              {file ? file.name : "Drag and drop your CV here"}
            </Text>
            <Text className="text-sm text-slate-500">
              {file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : "Support PDF, DOCX up to 10MB"}
            </Text>
          </div>

          {!file && (
            <FileTrigger
              acceptedFileTypes={[".pdf", ".doc", ".docx"]}
              onSelect={(e) => {
                if (e) {
                  const selectedFile = Array.from(e)[0];
                  setFile(selectedFile);
                }
              }}
            >
              <Button className="mt-4 px-6 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer">
                Browse Files
              </Button>
            </FileTrigger>
          )}
        </div>
      </DropZone>

      <div className="flex flex-col items-center space-y-4">
        <Button
          isDisabled={!file || isLoading}
          onPress={handleUpload}
          className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg 
            ${!file || isLoading
              ? "bg-slate-300 cursor-not-allowed shadow-none"
              : "bg-brand hover:bg-brand/90 active:scale-[0.98] shadow-brand/20"}
          `}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
              Uploading...
            </div>
          ) : (
            "Analyze CV"
          )}
        </Button>

        {isSuccess && (
          <p className="text-sm font-bold text-emerald-600 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            Upload successful! Your CV is being analyzed.
          </p>
        )}

        {isError && (
          <p className="text-sm font-bold text-red-500 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">error</span>
            Upload failed. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
