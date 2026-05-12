import { Button, TextField, Label, Input, TextArea, FieldError } from 'react-aria-components';
import { Mail, Phone, Globe, Link as LinkIcon, Sparkles } from 'lucide-react';
import { Controller } from 'react-hook-form';
import { BrandIcon } from "@/components/shared/Icon/BrandIcon";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { StepModal } from '../StepModal/StepModal';
import { StepModalHeader } from '../StepModalHeader/StepModalHeader';
import { useStep6Modal } from './useStep6Modal';

interface Step6ModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  icon: string;
}

const Step6Modal = ({ isOpen, onOpenChange, icon }: Step6ModalProps) => {
  const {
    control,
    handleSubmit,
    errors,
    onSubmit,
  } = useStep6Modal();

  return (
    <StepModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      stepNumber={6}
    >
      {({ close }) => (
        <form onSubmit={handleSubmit((data) => onSubmit(data, close))} className="flex flex-col h-full">
          <StepModalHeader
            icon={icon}
            title="Your Complete Story & Global Impact."
            subTitle="Let's wrap up. Add your final contact details and anything else that makes your profile uniquely you."
          />

          <div className="space-y-8 mb-10">
            {/* Contact Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Email */}
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField className="flex flex-col gap-2.5" isInvalid={!!errors.email}>
                    <div className="flex items-center gap-2 ml-1">
                      <Label className="text-[#1e293b] font-[800] text-[16px]">Email Address</Label>
                      <Mail size={16} className="text-slate-400" />
                    </div>
                    <Input
                      {...field}
                      placeholder="e.g., example@lugh.ai"
                      className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
                    />
                    {errors.email && <FieldError className="text-red-500 text-sm ml-1">{errors.email.message}</FieldError>}
                  </TextField>
                )}
              />

              {/* Phone */}
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField className="flex flex-col gap-2.5" isInvalid={!!errors.phone}>
                    <div className="flex items-center gap-2 ml-1">
                      <Label className="text-[#1e293b] font-[800] text-[16px]">Phone Number</Label>
                      <Phone size={16} className="text-slate-400" />
                    </div>
                    <Input
                      {...field}
                      placeholder="e.g., +972..."
                      className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
                    />
                    {errors.phone && <FieldError className="text-red-500 text-sm ml-1">{errors.phone.message}</FieldError>}
                  </TextField>
                )}
              />

              {/* LinkedIn */}
              <Controller
                name="linkedin"
                control={control}
                render={({ field }) => (
                  <TextField className="flex flex-col gap-2.5" isInvalid={!!errors.linkedin}>
                    <div className="flex items-center gap-2 ml-1">
                      <Label className="text-[#1e293b] font-[800] text-[16px]">LinkedIn Profile URL</Label>
                      <div className="flex items-center gap-1">
                        <BrandIcon icon={faLinkedinIn} className="text-[#0077b5] text-[14px]" />
                        <Globe size={14} className="text-slate-400" />
                      </div>
                    </div>
                    <Input
                      {...field}
                      placeholder="linkedin.com/in/username"
                      className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
                    />
                    {errors.linkedin && <FieldError className="text-red-500 text-sm ml-1">{errors.linkedin.message}</FieldError>}
                  </TextField>
                )}
              />

              {/* Portfolio */}
              <Controller
                name="portfolio"
                control={control}
                render={({ field }) => (
                  <TextField className="flex flex-col gap-2.5" isInvalid={!!errors.portfolio}>
                    <div className="flex items-center gap-2 ml-1">
                      <Label className="text-[#1e293b] font-[800] text-[16px]">Portfolio / GitHub</Label>
                      <LinkIcon size={16} className="text-slate-400" />
                    </div>
                    <Input
                      {...field}
                      placeholder="e.g., github.com/username"
                      className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
                    />
                    {errors.portfolio && <FieldError className="text-red-500 text-sm ml-1">{errors.portfolio.message}</FieldError>}
                  </TextField>
                )}
              />
            </div>

            {/* Anything Else? Section */}
            <div className="space-y-3">
              <div>
                <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">Anything Else? ✨</Label>
                <p className="text-slate-500 font-bold text-[13px] mt-1 ml-1 leading-relaxed">
                  Is there any final detail we missed? A unique skill, an international project, a key quantifiable impact, or even a personal passion that makes you stand out?
                </p>
              </div>
              <Controller
                name="anythingElse"
                control={control}
                render={({ field }) => (
                  <TextField className="relative" isInvalid={!!errors.anythingElse}>
                    <TextArea
                      {...field}
                      placeholder="Tell us anything else you'd like to include..."
                      className="w-full bg-white border-2 border-[#00a18a]/20 rounded-2xl p-6 pb-12 text-[16px] placeholder:text-slate-300 focus:border-[#00a18a] outline-none transition-all font-medium text-slate-700 shadow-sm min-h-[120px] resize-none leading-relaxed"
                    />
                    <div className={`absolute bottom-5 right-6 text-[12px] font-bold transition-colors ${(field.value?.length || 0) >= 550 ? 'text-red-400' : 'text-slate-300'}`}>
                      {field.value?.length || 0}/600
                    </div>
                    {errors.anythingElse && <FieldError className="text-red-500 text-sm mt-1">{errors.anythingElse.message}</FieldError>}
                  </TextField>
                )}
              />
            </div>
          </div>

          {/* Did you know? Tip Box */}
          <div className="bg-[#eefcf9] border-l-[6px] border-[#00a18a] p-6 rounded-2xl flex gap-5 items-start mb-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-full opacity-10 pointer-events-none">
               <Globe size={100} className="translate-x-10 translate-y-2" />
            </div>
            <div className="bg-[#00a18a] p-2.5 rounded-xl shrink-0 mt-1 shadow-lg shadow-[#00a18a]/20">
              <span className="material-symbols-outlined text-white text-[20px] fill-white/20">lightbulb</span>
            </div>
            <div className="flex-1">
              <p className="text-[#1e293b] text-[15px] leading-relaxed">
                <span className="font-[900] text-[#00a18a]">Did you know?</span> Over 70% of companies look for global experience. Quantifying your impact for international teams increases engagement by <span className="font-black text-[#00a18a]">40%</span>.
              </p>
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
              type="submit"
              className="bg-[#005c4d] hover:bg-[#004d40] text-white font-bold py-4.5 px-10 rounded-[20px] transition-all shadow-xl shadow-[#005c4d]/20 active:scale-[0.98] text-[17px] cursor-pointer flex items-center gap-3"
            >
              Complete Profile & View Final CV
              <Sparkles size={18} className="animate-pulse" />
            </Button>
          </div>
        </form>
      )}
    </StepModal>
  );
};

export default Step6Modal;
