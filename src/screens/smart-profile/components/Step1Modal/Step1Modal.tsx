import React from 'react';
import {
  Heading,
  TextField,
  Label,
  Input,
  NumberField,
  Button
} from 'react-aria-components';
import { Sparkles } from 'lucide-react';
import { StepModal } from '../StepModal/StepModal';

interface Step1ModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const Step1Modal = ({ isOpen, onOpenChange }: Step1ModalProps) => {
  return (
    <StepModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      stepNumber={1}
    >
      {({ close }) => (
        <>
          {/* Icon & Title */}
          <div className="text-center mb-10">
            <div className="text-6xl mb-6 select-none">👋</div>
            <Heading slot="title" className="text-[32px] font-[900] text-[#1e293b] mb-2 tracking-tight">
              First, let's build your foundation.
            </Heading>
            <p className="text-slate-500 font-medium text-[17px]">
              This info will form the header of your smart resume.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-8">
            {/* Full Name */}
            <TextField className="flex flex-col gap-2.5">
              <Label className="text-[#1e293b] font-bold text-[15px] ml-1">Full Name</Label>
              <Input
                placeholder="e.g., Alex Rivera"
                className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
              />
            </TextField>

            {/* Target Role */}
            <TextField className="flex flex-col gap-2.5">
              <Label className="text-[#1e293b] font-bold text-[15px] ml-1">Target Role</Label>
              <Input
                placeholder="What's the job you're chasing? (e.g., Senior Fullstack Engine"
                className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
              />
            </TextField>

            {/* Years of Experience */}
            <NumberField className="flex flex-col gap-2.5">
              <Label className="text-[#1e293b] font-bold text-[15px] ml-1">Years of Experience</Label>
              <Input
                placeholder="e.g., 5"
                className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
              />
            </NumberField>

            {/* Location (Country & City) */}
            <div className="grid grid-cols-2 gap-6">
              {/* Country */}
              <TextField className="flex flex-col gap-2.5">
                <Label className="text-[#1e293b] font-bold text-[15px] ml-1">Country</Label>
                <Input
                  placeholder="e.g., Israel"
                  className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700 w-full"
                />
              </TextField>

              {/* City */}
              <TextField className="flex flex-col gap-2.5">
                <Label className="text-[#1e293b] font-bold text-[15px] ml-1">City</Label>
                <Input
                  placeholder="e.g., Tel Aviv"
                  className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700 w-full"
                />
              </TextField>
            </div>

            {/* Pro Tip */}
            <div className="bg-[#eefcf9] border-l-[6px] border-[#00a18a] p-5 rounded-2xl flex gap-4 items-center">
              <div className="bg-[#00a18a] p-2.5 rounded-xl shrink-0">
                <Sparkles size={20} className="text-white fill-white/20" />
              </div>
              <p className="text-[#1e293b] text-[14px] leading-relaxed">
                <span className="font-bold">Pro Tip:</span> Adding a specific target role helps our AI prioritize the right keywords for recruiter search engines (ATS).
              </p>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="mt-12 flex items-center justify-between">
            <Button
              onPress={close}
              className="text-[#008f7a] font-bold text-[17px] hover:text-[#005c4d] transition-colors outline-none cursor-pointer"
            >
              Skip for now
            </Button>
            <Button
              className="bg-[#005c4d] hover:bg-[#004d40] text-white font-bold py-4.5 px-10 rounded-[20px] transition-all shadow-xl shadow-[#005c4d]/20 active:scale-[0.98] text-[17px] cursor-pointer"
            >
              Save & Continue to Arsenal
            </Button>
          </div>
        </>
      )}
    </StepModal>
  );
};

export default Step1Modal;
