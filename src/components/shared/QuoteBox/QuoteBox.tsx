interface QuoteBoxProps {
    quote: string;
    className?: string;
}

export const QuoteBox = ({ quote, className = "" }: QuoteBoxProps) => {
    return (
        <div className={`bg-[#f0f9f8] border-l-[6px] border-brand p-6 rounded-2xl w-full text-left ${className}`}>
            <p className="text-slate-500 italic text-[15px] leading-relaxed">
                "{quote}"
            </p>
        </div>
    );
};
