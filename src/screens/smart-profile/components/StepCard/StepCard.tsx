import { motion } from "framer-motion";
import { StepData } from "../../SmartProfileScreen";
import { QuoteBox } from "@/components/shared/QuoteBox/QuoteBox";

type stepProps = {
    step: StepData,
    onAction?: () => void,
    totalSteps: number,
    isLocked?: boolean,
    isCompleted?: boolean,
    id?: string
}

export const StepCard = ({ step, onAction, totalSteps, isLocked, isCompleted, id }: stepProps) => (
    <motion.div
        id={id}
        initial={{ opacity: 0, x: 20 }}

        whileInView={{ opacity: isLocked ? 0.6 : 1, x: 0 }}
        viewport={{ once: true }}
        className={`relative bg-white rounded-[28px] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100/50 flex flex-col items-center text-center w-[308px] h-[80%] transition-opacity ${isLocked ? "opacity-80 pointer-events-none" : ""}`}
    >
        {/* Status Icon (Lock or Check) */}
        {(isLocked || isCompleted) && (
            <div className={`absolute top-5 right-5 w-8 h-8 rounded-[11px] flex items-center justify-center border transition-all duration-500 ${isLocked ? "bg-slate-50 border-slate-100" : "bg-[#00a18a]/10 border-[#00a18a]/20"}`}>
                <span className={`material-symbols-outlined text-[16px] ${isLocked ? "text-slate-400" : "text-[#00a18a] font-bold"}`}>
                    {isLocked ? "lock" : "check"}
                </span>
            </div>
        )}


        {/* Step Badge */}
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-4 py-1.5 rounded-full tracking-wider uppercase shadow-lg transition-colors ${isLocked ? "bg-slate-200 text-slate-400 shadow-none" : "bg-[#008f7a] text-white shadow-[#008f7a]/20"}`}>
            Step {step.stepNumber}/{totalSteps}
        </div>


        {/* Icon Container */}
        <div className={`h-20 flex items-center justify-center mb-5 transition-all duration-500 ${isLocked ? "grayscale opacity-40" : ""}`}>
            {step.isEmoji ? (
                <span className="text-5xl drop-shadow-sm">{step.icon}</span>
            ) : (
                <img
                    src={step.icon}
                    alt={step.title}
                    className="w-16 h-16 object-contain drop-shadow-sm"
                />
            )}
        </div>


        {/* Title & Description */}
        <div className="flex-grow flex flex-col items-center">
            <h2 className="text-[20px] font-[900] text-[#1e293b] mb-4 tracking-tight leading-tight">
                {step.title}
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed px-4 mb-6 text-[12px]">
                {step.description}
            </p>

            <QuoteBox quote={step.quote} isLocked={isLocked} />

        </div>

        {/* Action Button */}
        <button
            onClick={onAction}
            disabled={isLocked}
            className={`w-full font-bold py-3.5 px-5 rounded-[16px] transition-all shadow-xl mt-7 text-[13px] ${isLocked ? "bg-slate-200 text-slate-400 shadow-none cursor-not-allowed" : "bg-[#00a18a] hover:bg-[#008f7a] text-white shadow-[#00a18a]/20 active:scale-[0.98]"}`}
        >
            {isLocked ? "Locked" : isCompleted ? "Completed" : "Lets Go"}
        </button>

    </motion.div>
);
