"use client";

import React from 'react';
import {
  Button,
} from 'react-aria-components';
import { Sparkles, Plus, Trash2 } from 'lucide-react';
import { StepModal } from '../StepModal/StepModal';
import { StepModalHeader } from '../StepModalHeader/StepModalHeader';
import { CareerStation } from '../CareerStation/CareerStation';
import { useStep3Modal } from './useStep3Modal';

interface Step3ModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  icon: string;
}

const Step3Modal = ({ isOpen, onOpenChange, icon }: Step3ModalProps) => {
  const {
    control,
    handleSubmit,
    errors,
    onSubmit,
    fields,
    addExperience,
    removeExperience,
  } = useStep3Modal(isOpen);

  return (
    <StepModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      stepNumber={3}
    >
      {({ close }) => (
        <form onSubmit={handleSubmit((data) => onSubmit(data, close))} className="flex flex-col h-full">
          <StepModalHeader
            icon={icon}
            title="Let's build your professional story, step-by-step."
            subTitle="Add your previous work experience. We'll use this to create your resume."
          />

          {/* Form Fields */}
          <div className="space-y-12 mb-10">
            {fields.map((field, index) => (
              <div key={field.id} className={`relative ${index > 0 ? "pt-12 border-t-2 border-dashed border-slate-100 mt-12" : ""}`}>
                {index > 0 && (
                  <>
                    <Button
                      onPress={() => removeExperience(index)}
                      className="absolute top-8 right-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all outline-none cursor-pointer border border-slate-100 hover:border-red-100 shadow-sm z-10 group"
                      aria-label="Delete station"
                    >
                      <Trash2 size={18} className="group-hover:scale-110 transition-transform" />
                    </Button>
                  </>
                )}
                <CareerStation index={index} control={control} errors={errors} />
              </div>
            ))}

            {/* Add Another Station */}
            <Button
              onPress={addExperience}
              className="w-full py-6 mt-6 rounded-[24px] border-2 border-dashed border-[#00a18a]/30 text-[#00a18a] font-[800] text-[16px] hover:bg-[#00a18a]/5 hover:border-[#00a18a] transition-all flex items-center justify-center gap-3 group outline-none cursor-pointer"
            >
              <div className="bg-[#00a18a] text-white p-1 rounded-lg group-hover:scale-110 transition-transform">
                <Plus size={18} strokeWidth={3} />
              </div>
              Add Another Station
            </Button>
          </div>

          {/* Pro Tip */}
          <div className="bg-[#eefcf9] border-l-[6px] border-[#00a18a] p-6 rounded-2xl flex gap-5 items-start mb-10">
            <div className="bg-[#00a18a] p-2.5 rounded-xl shrink-0 mt-1">
              <Sparkles size={20} className="text-white fill-white/20" />
            </div>
            <p className="text-[#1e293b] text-[14px] leading-relaxed">
              <span className="font-bold">Pro Tip:</span> In Step 7, our AI will help you quantify these achievements (like 'leading a team of 5'). For now, just focus on capturing the essence of what you did.
            </p>
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center justify-between">
            <Button
              onPress={close}
              className="text-[#008f7a] font-bold text-[17px] hover:text-[#005c4d] transition-colors outline-none cursor-pointer"
            >
              Skip for now
            </Button>
            <Button
              type="submit"
              className="bg-[#005c4d] hover:bg-[#004d40] text-white font-bold py-4.5 px-10 rounded-[20px] transition-all shadow-xl shadow-[#005c4d]/20 active:scale-[0.98] text-[17px] cursor-pointer"
            >
              Save & Continue to Education
            </Button>
          </div>
        </form>
      )}
    </StepModal>
  );
};

export default Step3Modal;
