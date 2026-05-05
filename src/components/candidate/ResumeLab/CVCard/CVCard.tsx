import { CV } from "@/store/services/types/types";
import { DonutChart } from "@/components/shared/DonutChart/DonutChart";
import { CVSkeleton } from "@/components/candidate/ResumeLab/CVCard/CVSkeleton";
import { Tag } from "@/components/shared/Tag/Tag";
import { MasterTag } from "./MasterTag";
import { CVCardFooter } from "./CVCardFooter";


interface CVCardProps extends CV {
    onClick?: () => void;
    isActive?: boolean;
}

export function CVCard({
    overallScore,
    roleTag,
    fileName,
    isMaster,
    updatedAt,
    onClick,
    isActive
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
