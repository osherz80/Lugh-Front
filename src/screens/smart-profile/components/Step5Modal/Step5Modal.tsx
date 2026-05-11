"use client";

import React from 'react';
import { Button, TextArea, TextField, Label } from 'react-aria-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Check } from 'lucide-react';
import { StepModal } from '../StepModal/StepModal';
import { StepModalHeader } from '../StepModalHeader/StepModalHeader';

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
}

const Step5Modal = ({ isOpen, onOpenChange }: Step5ModalProps) => {
  const [selectedStyles, setSelectedStyles] = React.useState<string[]>(['Collaborator', 'Problem Solver']);
  const [selectedStrengths, setSelectedStrengths] = React.useState<string[]>(['integrity', 'initiative', 'results-oriented']);
  const [description, setDescription] = React.useState('');
  const [isExpanded, setIsExpanded] = React.useState(true);

  const toggleStyle = (style: string) => {
    setSelectedStyles(prev =>
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    );
  };

  const toggleStrength = (id: string) => {
    setSelectedStrengths(prev => {
      if (prev.includes(id)) return prev.filter(s => s !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  return (
    <StepModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      stepNumber={5}
    >
      {({ close }) => (
        <>
          <StepModalHeader
            icon="👋"
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
            </div>

            {/* The Deep Dive - Workplace Persona Stories */}
            <div className="border-2 border-[#00a18a]/10 rounded-[28px] overflow-hidden bg-[#f1fcfb]/50">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between p-6 hover:bg-[#00a18a]/5 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#00a18a]/10 p-2 rounded-xl">
                    <span className="material-symbols-outlined text-[#00a18a] text-[24px]">edit_note</span>
                  </div>
                  <div>
                    <p className="text-[#1e293b] font-[900] text-[16px]">The Deep Dive - Workplace Persona Stories</p>
                    <p className="text-slate-500 font-bold text-[13px]">Describe how you work best.</p>
                  </div>
                </div>
                <div className={`text-[#00a18a] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                  <span className="material-symbols-outlined font-bold text-[24px]">expand_more</span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="p-6 pt-0">
                      <p className="text-slate-500 font-bold text-[13px] mb-3 ml-1">Share a brief story about how you work or lead.</p>
                      <TextField className="relative">
                        <TextArea
                          value={description}
                          onChange={(e) => setDescription(e.target.value.slice(0, 600))}
                          placeholder="Write naturally. For example, 'I thrive in fast-paced environments and love to bring structure to ambiguity,' or 'My leadership style focuses on empowering team members to own their roles.' (up to 600 chars)"
                          className="w-full bg-white border-2 border-[#00a18a]/20 rounded-2xl p-6 pb-12 text-[16px] placeholder:text-slate-300 focus:border-[#00a18a] outline-none transition-all font-medium text-slate-700 shadow-sm min-h-[140px] resize-none leading-relaxed"
                        />
                        <div className={`absolute bottom-5 right-6 text-[12px] font-bold transition-colors ${description.length >= 550 ? 'text-red-400' : 'text-slate-300'}`}>
                          {description.length}/600
                        </div>
                      </TextField>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
              className="bg-[#005c4d] hover:bg-[#004d40] text-white font-bold py-4.5 px-10 rounded-[20px] transition-all shadow-xl shadow-[#005c4d]/20 active:scale-[0.98] text-[17px] cursor-pointer"
            >
              Save & Continue to Reach
            </Button>
          </div>
        </>
      )}
    </StepModal>
  );
};

export default Step5Modal;
