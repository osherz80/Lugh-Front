import { CV } from "@/store/services/types/types";
import { DonutChart } from "@/components/shared/DonutChart/DonutChart";
import { CVSkeleton } from "./CVCard/CVSkeleton";

import { Tag } from "@/components/shared/Tag/Tag";

interface AssetCardProps extends CV {
  onClick?: () => void;
  isActive?: boolean;
}

export function AssetCard({
  overallScore,
  roleTag,
  fileName,
  isMaster,
  updatedAt,
  onClick,
  isActive
}: AssetCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative bg-white rounded-[2rem] p-6 border transition-all duration-300 flex flex-col hover:-translate-y-1.5 cursor-pointer ${isMaster
        ? "shadow-[0_20px_40px_rgba(3,143,123,0.12)] border-teal-50/50"
        : "shadow-[0_20px_40px_rgba(0,0,0,0.04)] border-slate-50"
        } ${isActive
          ? "border-brand ring-2 ring-brand/10"
          : "hover:shadow-2xl"
        }`}
    >
      {/* Master Badge */}
      {isMaster && (
        <div className="absolute -top-3 left-6 bg-[#026b5d] text-white text-[0.625rem] font-black px-4 py-1.5 uppercase tracking-widest rounded-xl shadow-md z-10">
          Master
        </div>
      )}

      {/* Document Skeleton Placeholder */}
      <CVSkeleton />

      {/* Header: Title & Score */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight line-clamp-1">
            {fileName.split(".")[0]}
          </h3>
          <div className="flex gap-2 mt-2.5 flex-wrap">
            <Tag
              label={roleTag}
              onClick={() => { }}
              size="sm"
              shape="box"
              className="uppercase"
            />
          </div>
        </div>

        {/* Match Score Chart */}
        <DonutChart score={overallScore} size={14} label="Match Score" />
      </div>

      {/* Spacer to push footer to bottom if needed */}
      <div className="flex-grow"></div>

      {/* Footer Section */}
      <div className="mt-auto pt-4 flex flex-col gap-2">
        {isMaster && (
          <div className="flex items-center gap-1.5 text-brand mb-1">
            <span className="material-symbols-outlined text-[1rem]">corporate_fare</span>
            <span className="text-xs font-bold">Tailored for: {roleTag}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span className="material-symbols-outlined text-[1rem]">
              history
            </span>
            <span className="text-xs font-medium">
              {isMaster
                ? (updatedAt ? new Date(updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A')
                : `Modified ${updatedAt ? 'recently' : 'N/A'}`}
            </span>
          </div>
          <span className="bg-surface-low text-zinc-500 font-bold text-[0.625rem] px-2 py-1 rounded uppercase tracking-wider">
            {fileName.split(".")[1] || 'PDF'}
          </span>
        </div>
      </div>
    </div>
  );
}
