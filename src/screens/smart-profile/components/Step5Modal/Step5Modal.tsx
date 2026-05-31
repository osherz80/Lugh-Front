import { Button, TextArea, TextField, Label, FieldError } from 'react-aria-components';
import { Lightbulb, Check, Loader2 } from 'lucide-react';
import { Controller } from 'react-hook-form';
import { StepModal } from '../StepModal/StepModal';
import { StepModalHeader } from '../StepModalHeader/StepModalHeader';
import { useStep5Modal } from './useStep5Modal';

interface Strength {
  id: string;
  label: string;
  icon: string;
}

const STRENGTHS: Strength[] = [
  { id: 'integrity', label: 'Integrity', icon: '🛡️' },
  { id: 'initiative', label: 'Initiative', icon: '⭐' },
  { id: 'team-player', label: 'Team Player', icon: '🚀' },
  { id: 'adaptive', label: 'Adaptive', icon: '🧭' },
  { id: 'results-oriented', label: 'Results-Oriented', icon: '🏆' },
  { id: 'innovative', label: 'Innovative', icon: '💡' },
];

const WORK_STYLES = [
  'Collaborator',
  'Problem Solver',
  'Individual Contributor',
  'Strategic Thinker',
  'Process-Oriented',
];

interface Step5ModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  icon: string;
}

const Step5Modal = ({ isOpen, onOpenChange, icon }: Step5ModalProps) => {
  const {
    control,
    handleSubmit,
    errors,
    onSubmit,
    selectedStyles,
    selectedStrengths,
    toggleStyle,
    toggleStrength,
    isUpserting,
  } = useStep5Modal(isOpen);

  return (
    <StepModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      stepNumber={5}
    >
      {({ close }) => (
        <form onSubmit={handleSubmit((data) => onSubmit(data, close))} className="flex flex-col h-full">
          <StepModalHeader
            icon={icon}
            title="Let's capture your Workplace Persona."
            subTitle="Define your style to show how you operate, collaborate, and lead."
          />

          <div className="space-y-10 mb-10">
            {/* Work Style Selection */}
            <div className="space-y-4">
              <div>
                <Label className="text-[#1e293b] font-[800] text-[18px] ml-1">Work Style Selection</Label>
                <p className="text-slate-500 font-bold text-[14px] ml-1 mt-1">What best describes your work style?</p>
              </div>
              <div className="flex flex-wrap gap-3 p-1">
                {WORK_STYLES.map((style) => {
                  const isSelected = selectedStyles.includes(style);
                  return (
                    <button
                      key={style}
                      type="button"
                      onClick={() => toggleStyle(style)}
                      className={`
                        px-5 py-2.5 rounded-2xl text-[14px] font-bold transition-all border-2
                        ${isSelected
                          ? 'bg-[#005c4d] border-[#005c4d] text-white shadow-lg shadow-[#005c4d]/20'
                          : 'bg-[#f1f5f9] border-transparent text-slate-500 hover:bg-[#e2e8f0]'
                        }
                      `}
                    >
                      [ {style} ]
                    </button>
                  );
                })}
              </div>
              {errors.style && <p className="text-red-500 text-sm ml-1">{errors.style.message}</p>}
            </div>

            {/* Personality Strengths Selection */}
            <div className="space-y-4">
              <div>
                <Label className="text-[#1e293b] font-[800] text-[18px] ml-1">Personality Strengths Selection</Label>
                <p className="text-slate-500 font-bold text-[14px] ml-1 mt-1">Which of these are your strongest attributes? (Select up to 3)</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {STRENGTHS.map((strength) => {
                  const isSelected = selectedStrengths.includes(strength.id);
                  return (
                    <button
                      key={strength.id}
                      type="button"
                      onClick={() => toggleStrength(strength.id)}
                      className={`
                        relative group p-6 rounded-[24px] border-2 transition-all flex flex-col items-center gap-3
                        ${isSelected
                          ? 'bg-[#eefcf9] border-[#00a18a] shadow-md'
                          : 'bg-[#f1f5f9] border-transparent hover:bg-[#e2e8f0] opacity-80 hover:opacity-100'
                        }
                      `}
                    >
                      {isSelected && (
                        <div className="absolute top-3 right-3 bg-[#00a18a] text-white p-0.5 rounded-md">
                          <Check size={14} strokeWidth={4} />
                        </div>
                      )}
                      <div className="text-3xl select-none group-hover:scale-110 transition-transform duration-300">
                        {strength.icon}
                      </div>
                      <span className={`text-[14px] font-[900] ${isSelected ? 'text-[#005c4d]' : 'text-slate-500'}`}>
                        [ {strength.label} ]
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.strengths && <p className="text-red-500 text-sm ml-1">{errors.strengths.message}</p>}
            </div>

            {/* Workplace Persona Stories */}
            <div className="space-y-3">
              <div>
                <Label className="text-[#1e293b] font-[800] text-[18px] ml-1">Workplace Persona Stories</Label>
                <p className="text-slate-500 font-bold text-[13px] mt-1 ml-1">Share a brief story about how you work or lead.</p>
              </div>
              <Controller
                name="story"
                control={control}
                render={({ field }) => (
                  <TextField
                    className="relative"
                    isInvalid={!!errors.story}
                  >
                    <TextArea
                      {...field}
                      placeholder="Write naturally. For example, 'I thrive in fast-paced environments and love to bring structure to ambiguity,' or 'My leadership style focuses on empowering team members to own their roles.' (up to 600 chars)"
                      className="w-full bg-white border-2 border-[#00a18a]/20 rounded-2xl p-6 pb-12 text-[16px] placeholder:text-slate-300 focus:border-[#00a18a] outline-none transition-all font-medium text-slate-700 shadow-sm min-h-[140px] resize-none leading-relaxed"
                    />
                    <div className={`absolute bottom-5 right-6 text-[12px] font-bold transition-colors ${(field.value?.length || 0) >= 550 ? 'text-red-400' : 'text-slate-300'}`}>
                      {field.value?.length || 0}/600
                    </div>
                    {errors.story && <FieldError className="text-red-500 text-sm mt-1">{errors.story.message}</FieldError>}
                  </TextField>
                )}
              />
            </div>
          </div>

          {/* Did you know? Tip Box */}
          <div className="bg-[#eefcf9] border-l-[6px] border-[#00a18a] p-6 rounded-2xl flex gap-5 items-start mb-10 relative overflow-hidden group">
            <div className="bg-[#00a18a] p-2.5 rounded-xl shrink-0 mt-1 shadow-lg shadow-[#00a18a]/20">
              <span className="material-symbols-outlined text-white text-[20px] fill-white/20">lightbulb</span>
            </div>
            <div className="flex-1">
              <p className="text-[#1e293b] text-[15px] leading-relaxed">
                <span className="font-[900] text-[#00a18a]">Did you know?</span> Over 70% of modern job descriptions emphasize 'Soft Skills' or 'Culture Fit'. Your Persona helps our AI highlight these critical attributes for recruiters.
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
              className="flex items-center gap-2 bg-[#005c4d] hover:bg-[#004d40] text-white font-bold py-4.5 px-10 rounded-[20px] transition-all shadow-xl shadow-[#005c4d]/20 active:scale-[0.98] text-[17px] cursor-pointer"
            >
              Save & Continue to Reach
              {isUpserting && <Loader2 size={18} className="animate-spin text-green-500" />}
            </Button>
          </div>
        </form>
      )}
    </StepModal>
  );
};

export default Step5Modal;
