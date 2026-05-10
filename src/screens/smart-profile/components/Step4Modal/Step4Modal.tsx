"use client";

import React from 'react';
import { Button } from 'react-aria-components';
import { Plus, Trash2, Lightbulb } from 'lucide-react';
import { StepModal } from '../StepModal/StepModal';
import { StepModalHeader } from '../StepModalHeader/StepModalHeader';
import { EducationStation } from '../EducationStation/EducationStation';

interface Step4ModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const Step4Modal = ({ isOpen, onOpenChange }: Step4ModalProps) => {
  const [educations, setEducations] = React.useState([0]);

  const addEducation = () => {
    setEducations(prev => [...prev, Math.max(...prev, -1) + 1]);
  };

  const removeEducation = (id: number) => {
    setEducations(prev => prev.filter(e => e !== id));
  };

  return (
    <StepModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      stepNumber={4}
    >
      {({ close }) => (
        <>
          <StepModalHeader
            icon="👋"
            title="Where did you gain your expertise?"
            subTitle="Academic degrees, certifications, or even self-taught paths—it all counts."
          />

          <div className="space-y-12 mb-10">
            {educations.map((id, index) => (
              <div key={id} className={`relative ${index > 0 ? "pt-12 border-t-2 border-dashed border-slate-100 mt-12" : ""}`}>
                {index > 0 && (
                  <Button
                    onPress={() => removeEducation(id)}
                    className="absolute top-8 right-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all outline-none cursor-pointer border border-slate-100 hover:border-red-100 shadow-sm z-10 group"
                    aria-label="Delete education"
                  >
                    <Trash2 size={18} className="group-hover:scale-110 transition-transform" />
                  </Button>
                )}
                <EducationStation index={index} />
              </div>
            ))}

            {/* Add Another Education */}
            <Button
              onPress={addEducation}
              className="w-full py-6 mt-6 rounded-[24px] border-2 border-dashed border-[#00a18a]/30 text-[#00a18a] font-[800] text-[16px] hover:bg-[#00a18a]/5 hover:border-[#00a18a] transition-all flex items-center justify-center gap-3 group outline-none cursor-pointer"
            >
              <div className="bg-[#00a18a] text-white p-1 rounded-lg group-hover:scale-110 transition-transform">
                <Plus size={18} strokeWidth={3} />
              </div>
              Add Another Education
            </Button>
          </div>

          {/* Did you know? Tip Box */}
          <div className="bg-[#eefcf9] border-l-[6px] border-[#00a18a] p-6 rounded-2xl flex gap-5 items-start mb-10 relative overflow-hidden group">
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 opacity-[0.03] rotate-12 group-hover:rotate-6 transition-transform duration-700 pointer-events-none">
              <Lightbulb size={120} className="text-[#00a18a]" />
            </div>
            <div className="bg-[#00a18a] p-2.5 rounded-xl shrink-0 mt-1 shadow-lg shadow-[#00a18a]/20">
              <span className="material-symbols-outlined text-white text-[20px] fill-white/20">lightbulb</span>
            </div>
            <div className="flex-1">
              <p className="text-[#1e293b] text-[15px] leading-relaxed">
                <span className="font-[900] text-[#00a18a]">Did you know?</span> Profiles that include specific courses or impactful student projects are viewed for <span className="font-black text-[#00a18a]">30% longer</span> by technical hiring managers.
              </p>
            </div>
            <div className="text-slate-300 self-center">
              <span className="material-symbols-outlined text-[24px] rotate-[-15deg]">auto_fix_high</span>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
            <Button
              onPress={close}
              className="text-[#008f7a] font-bold text-[17px] hover:text-[#005c4d] transition-colors outline-none cursor-pointer"
            >
              Skip for now
            </Button>
            <Button
              className="bg-[#005c4d] hover:bg-[#004d40] text-white font-bold py-4.5 px-10 rounded-[20px] transition-all shadow-xl shadow-[#005c4d]/20 active:scale-[0.98] text-[17px] cursor-pointer"
            >
              Save & Continue to Work Persona
            </Button>
          </div>
        </>
      )}
    </StepModal>
  );
};

export default Step4Modal;
