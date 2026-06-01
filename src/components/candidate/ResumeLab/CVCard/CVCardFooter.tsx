import { Tag } from "@/components/shared/Tag/Tag";
import { DateTag } from "@/components/shared/DateTag/DateTag";

interface CVCardFooterProps {
    updatedAt: Date;
    fileName: string;
}

export function CVCardFooter({ updatedAt, fileName }: CVCardFooterProps) {
    return (
        <div className="flex items-center justify-between pt-5">
            <DateTag date={updatedAt} size="lg" />
            <Tag label={fileName.split(".")[1]?.toUpperCase() || "PDF"} size="lg" shape="box" onClick={() => { }} />
        </div>
    );
}
