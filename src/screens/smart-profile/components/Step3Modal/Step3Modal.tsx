"use client";

import React from 'react';
import {
  Heading,
  TextField,
  Label,
  Input,
  Button,
  TextArea,
  Checkbox
} from 'react-aria-components';
import { Sparkles, Plus } from 'lucide-react';
import { StepModal } from '../StepModal/StepModal';

interface Step3ModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const Step3Modal = ({ isOpen, onOpenChange }: Step3ModalProps) => {
  const [description, setDescription] = React.useState('');
  const [isCurrentRole, setIsCurrentRole] = React.useState(false);

  return (
    <StepModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      stepNumber={3}
    >
      {({ close }) => (
        <>
          {/* Icon & Title */}
          <div className="text-center mb-10">
            <div className="text-6xl mb-6 select-none">👋</div>
            <Heading slot="title" className="text-[32px] font-[900] text-[#1e293b] mb-2 tracking-tight leading-tight">
              Let's build your professional story, step-by-step.
            </Heading>
            <p className="text-slate-500 font-medium text-[17px] max-w-[440px] mx-auto">
              Add your previous work experience. We'll use this to create your resume.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-8 mb-10">
            {/* Organization */}
            <TextField className="flex flex-col gap-2.5">
              <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">Organization/Company</Label>
              <Input
                placeholder="e.g., IDF / Google / Tel Aviv University"
                className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
              />
            </TextField>

            {/* Title */}
            <TextField className="flex flex-col gap-2.5">
              <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">Your Title</Label>
              <Input
                placeholder="e.g., Full Stack Engineer / Marketing Manager / Nurse"
                className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
              />
            </TextField>

            {/* Timeframe */}
            <div className="space-y-3">
              <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">Timeframe</Label>
              <div className="grid grid-cols-2 gap-6">
                <TextField className="flex flex-col gap-2">
                  <Label className="text-slate-500 font-bold text-[13px] ml-1">Start Date</Label>
                  <div className="relative">
                    <Input
                      placeholder="e.g., Month, Year"
                      className="w-full bg-[#f1f5f9] border-none rounded-2xl p-5 pr-14 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
                    />
                    <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      calendar_today
                    </span>
                  </div>
                </TextField>
                <TextField className="flex flex-col gap-2">
                  <Label className="text-slate-500 font-bold text-[13px] ml-1">End Date</Label>
                  <div className="h-full flex items-center bg-[#f1f5f9] rounded-2xl px-5 py-4">
                    <Checkbox
                      isSelected={isCurrentRole}
                      onChange={setIsCurrentRole}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className={`
                        w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all
                        ${isCurrentRole ? 'bg-[#005c4d] border-[#005c4d]' : 'border-slate-300 group-hover:border-[#00a18a] bg-white'}
                      `}>
                        {isCurrentRole && <span className="material-symbols-outlined text-white text-[18px] font-bold">check</span>}
                      </div>
                      <span className="text-[#1e293b] font-bold text-[15px]">Current Role</span>
                    </Checkbox>
                  </div>
                </TextField>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <div>
                <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">The Mission - Detailed Description</Label>
                <p className="text-slate-500 font-bold text-[14px] ml-1 mt-1">"What was your primary mission here? Tell us your story."</p>
              </div>
              <TextField className="relative">
                <TextArea
                  value={description}
                  onChange={(e) => setDescription(e.target.value.slice(0, 600))}
                  placeholder="Write naturally. Explain your core responsibilities, key achievements, or a problem you solved (e.g., Managed a nationwide transportation system, Ensuring 99.9% uptime...). (up to 600 chars)"
                  className="w-full bg-white border-2 border-[#00a18a]/20 rounded-2xl p-6 pb-12 text-[16px] placeholder:text-slate-300 focus:border-[#00a18a] outline-none transition-all font-medium text-slate-700 shadow-sm min-h-[160px] resize-none leading-relaxed"
                />
                <div className={`absolute bottom-5 right-6 text-[12px] font-bold transition-colors ${description.length >= 550 ? 'text-red-400' : 'text-slate-300'}`}>
                  {description.length}/600
                </div>
              </TextField>
            </div>

            {/* Add Another Station */}
            <Button className="w-full flex items-center justify-center gap-3 bg-[#005c4d] hover:bg-[#004d40] text-white font-bold py-5 rounded-[24px] transition-all shadow-xl shadow-[#005c4d]/20 active:scale-[0.98] text-[17px] cursor-pointer">
              <Plus size={24} />
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
              className="bg-[#005c4d] hover:bg-[#004d40] text-white font-bold py-4.5 px-10 rounded-[20px] transition-all shadow-xl shadow-[#005c4d]/20 active:scale-[0.98] text-[17px] cursor-pointer"
            >
              Save & Continue to Education
            </Button>
          </div>
        </>
      )}
    </StepModal>
  );
};

export default Step3Modal;
