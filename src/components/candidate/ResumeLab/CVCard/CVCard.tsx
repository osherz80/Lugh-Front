import React from "react";
import { CV } from "@/store/types/cv";
import { DonutChart } from "@/components/shared/DonutChart/DonutChart";
import { CVSkeleton } from "@/components/candidate/ResumeLab/CVCard/CVSkeleton";
import { Tag } from "@/components/shared/Tag/Tag";
import { MasterTag } from "./MasterTag";
import { CVCardFooter } from "./CVCardFooter";
import { Eye } from "lucide-react";

interface CVCardProps extends CV {
    onClick?: () => void;
    isActive?: boolean;
    onPreviewClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function CVCard({
    overallScore,
    roleTag,
    fileName,
    fileUrl,
    isMaster,
    updatedAt,
    onClick,
    isActive,
    onPreviewClick
}: CVCardProps) {

    const shadow = (isMaster || isActive)
        ? "shadow-[0_20px_40px_rgba(3,143,123,0.12)] border-teal-50/50"
        : "shadow-[0_20px_40px_rgba(0,0,0,0.04)] border-slate-50"

    const activeStyles = isActive
        ? "border-brand ring-2 ring-brand/10 shadow-[0_20px_40px_rgba(3,143,123,0.2)]"
        : "hover:shadow-2xl"

    return (
        <div
            onClick={onClick}
            className={`relative bg-white rounded-[2rem] p-6 border transition-all duration-300 flex flex-col hover:-translate-y-1.5 cursor-pointer ${shadow} ${activeStyles}`}
        >
            {isMaster && <MasterTag />}

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    if (onPreviewClick) {
                        onPreviewClick(e);
                    } else if (fileUrl) {
                        window.open(fileUrl, "_blank");
                    }
                }}
                className="absolute top-8 right-8 p-3 rounded-full bg-white/80 backdrop-blur-md text-slate-500 hover:text-brand hover:scale-110 active:scale-95 border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                aria-label="Preview CV"
            >
                <Eye className="w-4.5 h-4.5" />
            </button>

            <CVSkeleton />

            <div className="flex justify-between items-start gap-4">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight line-clamp-1">
                        {fileName.split(".")[0]}
                    </h3>
                    <div className="flex gap-2 mt-2.5">
                        <Tag
                            label={roleTag.toUpperCase()}
                            onClick={() => { }}
                            size="md"
                            shape="box"
                        />
                    </div>
                </div>

                <DonutChart score={overallScore} size={16} label="Match Score" />
            </div>

            <div className="flex-grow"></div>

            <CVCardFooter
                updatedAt={updatedAt}
                fileName={fileName}
            />
        </div>
    );
}
