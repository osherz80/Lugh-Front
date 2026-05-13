import { motion } from "framer-motion";
import { StepData } from "../../SmartProfileScreen";
import { QuoteBox } from "@/components/shared/QuoteBox/QuoteBox";

type stepProps = {
    step: StepData,
    onAction?: () => void,
    totalSteps: number,
    isLocked?: boolean
}

export const StepCard = ({ step, onAction, totalSteps, isLocked }: stepProps) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: isLocked ? 0.8 : 1, x: 0 }}
        viewport={{ once: true }}
        className={`relative bg-white rounded-[40px] p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100/50 flex flex-col items-center text-center w-[440px] h-[580px] transition-opacity ${isLocked ? "opacity-80 pointer-events-none" : ""}`}
    >
        {/* Lock Icon */}
        {isLocked && (
            <div className="absolute top-8 right-8 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                <span className="material-symbols-outlined text-slate-400 text-[24px]">lock</span>
            </div>
        )}

        {/* Step Badge */}
        <div className={`absolute -top-5 left-1/2 -translate-x-1/2 text-white text-[14px] font-bold px-6 py-2 rounded-full tracking-wider uppercase shadow-lg ${isLocked ? "bg-slate-400 shadow-slate-400/20" : "bg-[#008f7a] shadow-[#008f7a]/20"}`}>
            Step {step.stepNumber}/{totalSteps}
        </div>

        {/* Icon Container */}
        <div className="h-28 flex items-center justify-center mb-8">
            {step.isEmoji ? (
                <span className="text-7xl drop-shadow-sm">{step.icon}</span>
            ) : (
                <img
                    src={step.icon}
                    alt={step.title}
                    className="w-24 h-24 object-contain drop-shadow-sm"
                />
            )}
        </div>

        {/* Title & Description */}
        <div className="flex-grow flex flex-col items-center">
            <h2 className="text-[28px] font-[900] text-[#1e293b] mb-6 tracking-tight leading-tight">
                {step.title}
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed px-6 mb-10 text-[17px]">
                {step.description}
            </p>

            <QuoteBox quote={step.quote} />
        </div>

        {/* Action Button */}
        <button
            onClick={onAction}
            disabled={isLocked}
            className={`w-full font-bold py-5 px-8 rounded-[24px] transition-all shadow-xl mt-10 text-[19px] ${isLocked ? "bg-slate-200 text-slate-400 shadow-none cursor-not-allowed" : "bg-[#00a18a] hover:bg-[#008f7a] text-white shadow-[#00a18a]/20 active:scale-[0.98]"}`}
        >
            {isLocked ? "Locked" : "Lets Go"}
        </button>
    </motion.div>
);