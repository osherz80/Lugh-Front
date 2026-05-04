import { CV } from "@/store/services/types/types";
import { DonutChart } from "@/components/shared/DonutChart/DonutChart";

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
      className={`relative bg-white rounded-[2rem] p-6 shadow-sm border transition-all duration-300 flex flex-col hover:-translate-y-1 cursor-pointer ${
        isActive 
          ? "border-brand ring-2 ring-brand/10 shadow-md" 
          : "border-slate-100 hover:shadow-md"
      }`}
    >
      {/* Master Badge */}
      {isMaster && (
        <div className="absolute -top-3 left-6 bg-brand text-white text-[0.625rem] font-bold px-3 py-1 uppercase tracking-wider rounded-full shadow-sm">
          Master
        </div>
      )}

      {/* Document Skeleton Placeholder */}
      <div className="bg-surface-low rounded-2xl aspect-[4/3] p-6 mb-6 flex flex-col gap-5 overflow-hidden">
        <div className="space-y-2">
          <div className="h-4 bg-slate-200/70 rounded-full w-1/3"></div>
          <div className="h-3 bg-slate-200/50 rounded-full w-1/4"></div>
        </div>
        <div className="space-y-3 mt-4">
          <div className="h-2 bg-slate-200/50 rounded-full w-full"></div>
          <div className="h-2 bg-slate-200/50 rounded-full w-5/6"></div>
          <div className="h-2 bg-slate-200/50 rounded-full w-4/6"></div>
        </div>
      </div>

      {/* Header: Title & Score */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight line-clamp-1">
            {fileName.split(".")[0]}
          </h3>
          <div className="flex gap-2 mt-2.5 flex-wrap">
            <span
              className="bg-surface-low text-zinc-600 text-[0.625rem] font-bold px-2.5 py-1 rounded border border-zinc-200/50 uppercase"
            >
              {roleTag}
            </span>

          </div>
        </div>

        {/* Match Score Chart */}
        <DonutChart score={overallScore} size={14} label="Match Score" />
      </div>

      {/* Spacer to push footer to bottom if needed */}
      <div className="flex-grow"></div>

      {/* Footer Line */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-slate-400">
          <span className="material-symbols-outlined text-[0.95rem]">
            history
          </span>
          <span className="text-xs font-medium">{updatedAt ? new Date(updatedAt).toISOString().split('T')[0] : 'N/A'}</span>
        </div>
        <span className="bg-surface-low text-zinc-500 font-bold text-[0.625rem] px-2 py-1 rounded uppercase">
          {fileName.split(".")[1]}
        </span>
      </div>
    </div>
  );
}
