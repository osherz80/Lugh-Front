interface QuoteBoxProps {
    quote: string;
    className?: string;
    isLocked?: boolean;
}

export const QuoteBox = ({ quote, className = "", isLocked }: QuoteBoxProps) => {
    return (
        <div className={`border-l-[6px] p-6 rounded-2xl w-full text-left transition-all duration-500 ${isLocked ? "bg-slate-50 border-slate-200" : "bg-[#f0f9f8] border-brand"} ${className}`}>
            <p className={`italic text-[15px] leading-relaxed transition-colors duration-500 ${isLocked ? "text-slate-400" : "text-slate-500"}`}>
                "{quote}"
            </p>
        </div>
    );
};

