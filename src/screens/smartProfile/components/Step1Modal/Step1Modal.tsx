import React from 'react';
import {
  TextField,
  Label,
  Input,
  NumberField,
  Button,
  FieldError
} from 'react-aria-components';
import { Loader2, Sparkles } from 'lucide-react';
import { StepModal } from '../StepModal/StepModal';
import { StepModalHeader } from '../StepModalHeader/StepModalHeader';
import { Controller } from 'react-hook-form';
import { useStep1Modal } from './useStep1Modal';

interface Step1ModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  icon: string;
}

const Step1Modal = ({ isOpen, onOpenChange, icon }: Step1ModalProps) => {
  const { control, handleSubmit, errors, onSubmit, isUpserting } = useStep1Modal(isOpen);

  return (
    <StepModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      stepNumber={1}
    >
      {({ close }) => (
        <form onSubmit={handleSubmit((data) => onSubmit(data, close))} className="flex flex-col h-full">
          <StepModalHeader
            icon={icon}
            title="First, let's build your foundation."
            subTitle="This info will form the header of your smart resume."
          />

          {/* Form Fields */}
          <div className="space-y-8">
            {/* Full Name */}
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <TextField
                  className="flex flex-col gap-2.5"
                  value={field.value}
                  onChange={field.onChange}
                  isInvalid={!!errors.fullName}
                >
                  <Label className="text-[#1e293b] font-bold text-[15px] ml-1">Full Name</Label>
                  <Input
                    placeholder="e.g., Alex Rivera"
                    className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
                  />
                  {errors.fullName && <FieldError className="text-red-500 text-sm ml-1">{errors.fullName.message}</FieldError>}
                </TextField>
              )}
            />

            {/* Target Role */}
            <Controller
              name="targetRole"
              control={control}
              render={({ field }) => (
                <TextField
                  className="flex flex-col gap-2.5"
                  value={field.value}
                  onChange={field.onChange}
                  isInvalid={!!errors.targetRole}
                >
                  <Label className="text-[#1e293b] font-bold text-[15px] ml-1">Target Role</Label>
                  <Input
                    placeholder="What's the job you're chasing? (e.g., Senior Fullstack Engine)"
                    className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
                  />
                  {errors.targetRole && <FieldError className="text-red-500 text-sm ml-1">{errors.targetRole.message}</FieldError>}
                </TextField>
              )}
            />

            {/* Years of Experience */}
            <Controller
              name="yearsOfExperience"
              control={control}
              render={({ field }) => (
                <NumberField
                  className="flex flex-col gap-2.5"
                  value={field.value}
                  onChange={field.onChange}
                  isInvalid={!!errors.yearsOfExperience}
                >
                  <Label className="text-[#1e293b] font-bold text-[15px] ml-1">Years of Experience</Label>
                  <Input
                    placeholder="e.g., 5"
                    className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
                  />
                  {errors.yearsOfExperience && <FieldError className="text-red-500 text-sm ml-1">{errors.yearsOfExperience.message}</FieldError>}
                </NumberField>
              )}
            />

            {/* Location (Country & City) */}
            <div className="grid grid-cols-2 gap-6">
              {/* Country */}
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <TextField
                    className="flex flex-col gap-2.5"
                    value={field.value}
                    onChange={field.onChange}
                    isInvalid={!!errors.country}
                  >
                    <Label className="text-[#1e293b] font-bold text-[15px] ml-1">Country</Label>
                    <Input
                      placeholder="e.g., Israel"
                      className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700 w-full"
                    />
                    {errors.country && <FieldError className="text-red-500 text-sm ml-1">{errors.country.message}</FieldError>}
                  </TextField>
                )}
              />

              {/* City */}
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <TextField
                    className="flex flex-col gap-2.5"
                    value={field.value}
                    onChange={field.onChange}
                    isInvalid={!!errors.city}
                  >
                    <Label className="text-[#1e293b] font-bold text-[15px] ml-1">City</Label>
                    <Input
                      placeholder="e.g., Tel Aviv"
                      className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700 w-full"
                    />
                    {errors.city && <FieldError className="text-red-500 text-sm ml-1">{errors.city.message}</FieldError>}
                  </TextField>
                )}
              />
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
              type="submit"
              className="flex items-center gap-2 bg-[#005c4d] hover:bg-[#004d40] text-white font-bold py-4.5 px-10 rounded-[20px] transition-all shadow-xl shadow-[#005c4d]/20 active:scale-[0.98] text-[17px] cursor-pointer"
            >
              Save & Continue to Arsenal
              {isUpserting && <Loader2 size={18} className="animate-spin text-green-500" />}
            </Button>
          </div>
        </form>
      )}
    </StepModal>
  );
};

export default Step1Modal;
