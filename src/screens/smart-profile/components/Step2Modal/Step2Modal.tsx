"use client";

import React from 'react';
import { 
  Modal, 
  Dialog, 
  Heading, 
  TextField, 
  Input, 
  Button, 
  ModalOverlay,
  TextArea
} from 'react-aria-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Search } from 'lucide-react';

interface Step2ModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const Step2Modal = ({ isOpen, onOpenChange }: Step2ModalProps) => {
  const initialSkills = [
    'Project Management',
    'Marketing Strategy',
    'Figma',
    'Data Analysis',
    'AWS',
    'React',
  ];

  const [selectedSkills, setSelectedSkills] = React.useState<string[]>(['AWS', 'React']);
  const [skillDescriptions, setSkillDescriptions] = React.useState<Record<string, string>>({});

  const toggleSkill = (skillName: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillName) 
        ? prev.filter(s => s !== skillName) 
        : [...prev, skillName]
    );
  };

  const handleDescriptionChange = (skillName: string, value: string) => {
    if (value.length <= 600) {
      setSkillDescriptions(prev => ({ ...prev, [skillName]: value }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          isDismissable
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4"
        >
          <Modal className="w-full max-w-2xl outline-none">
            <Dialog className="outline-none">
              {({ close }) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 relative max-h-[90vh] flex flex-col"
                >
                  {/* Header Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#005c4d] text-white text-[12px] font-bold px-6 py-2 rounded-full tracking-wider uppercase shadow-lg shadow-[#005c4d]/20 border-2 border-white">
                      Step 02
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={close}
                    className="absolute top-8 right-8 text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-50 rounded-full z-20"
                  >
                    <X size={24} />
                  </button>

                  {/* Scrollable Content Area */}
                  <div className="overflow-y-auto no-scrollbar p-12 pt-14 rounded-[40px]">
                    {/* Icon & Title */}
                    <div className="text-center mb-10">
                      <div className="text-6xl mb-6 select-none">👋</div>
                      <Heading slot="title" className="text-[32px] font-[900] text-[#1e293b] mb-2 tracking-tight">
                        Let's uncover your Professional DNA.
                      </Heading>
                      <p className="text-slate-500 font-medium text-[17px]">
                        This data powers our AI to match you with top-tier opportunities.
                      </p>
                    </div>

                    {/* Skill Search */}
                    <div className="relative mb-8">
                      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <Search size={20} />
                      </div>
                      <Input 
                        placeholder="Search and add your core technical skills or professional..." 
                        className="w-full bg-[#f1f5f9] border-none rounded-2xl p-5 pl-14 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
                      />
                    </div>

                    {/* Skills Chips */}
                    <div className="flex flex-wrap gap-3 mb-12">
                      {initialSkills.map((skillName) => {
                        const isSelected = selectedSkills.includes(skillName);
                        return (
                          <div 
                            key={skillName}
                            onClick={() => toggleSkill(skillName)}
                            className={`
                              px-5 py-2.5 rounded-2xl text-[14px] font-bold transition-all cursor-pointer border-2
                              ${isSelected 
                                ? 'bg-[#005c4d] border-[#005c4d] text-white shadow-lg shadow-[#005c4d]/20' 
                                : 'bg-[#f1f5f9] border-transparent text-slate-500 hover:bg-[#e2e8f0]'
                              }
                            `}
                          >
                            [ {skillName} ]
                          </div>
                        );
                      })}
                    </div>

                    {/* Adaptive Input Fields */}
                    <AnimatePresence mode="popLayout">
                      {selectedSkills.length > 0 && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="space-y-8 mb-10"
                        >
                          <Heading className="text-[#1e293b] font-[900] text-[20px] tracking-tight">Adaptive Input Fields</Heading>
                          
                          <div className="space-y-8">
                            {selectedSkills.map((skillName) => {
                              const currentLength = skillDescriptions[skillName]?.length || 0;
                              return (
                                <motion.div 
                                  layout
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  key={skillName} 
                                  className="space-y-3"
                                >
                                  <p className="text-[#1e293b] font-bold text-[16px] ml-1">
                                    "Tell us a bit about your work with <span className="text-[#00a18a]">{skillName}</span>."
                                  </p>
                                  <TextField className="w-full relative">
                                    <TextArea 
                                      value={skillDescriptions[skillName] || ''}
                                      onChange={(e) => handleDescriptionChange(skillName, e.target.value)}
                                      maxLength={600}
                                      placeholder={`Feel free to write naturally. e.g., working with ${skillName} in...`} 
                                      className="w-full bg-white border-2 border-[#00a18a]/20 rounded-2xl p-5 pb-10 text-[16px] placeholder:text-slate-300 focus:border-[#00a18a] outline-none transition-all font-medium text-slate-700 shadow-sm min-h-[120px] resize-none"
                                    />
                                    <div className={`absolute bottom-4 right-5 text-[12px] font-bold transition-colors ${currentLength >= 550 ? 'text-red-400' : 'text-slate-300'}`}>
                                      {currentLength}/600
                                    </div>
                                  </TextField>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>


                    {/* Pro Tip */}
                    <div className="bg-[#eefcf9] border-l-[6px] border-[#00a18a] p-5 rounded-2xl flex gap-4 items-start mb-8">
                      <div className="bg-[#00a18a] p-2.5 rounded-xl shrink-0 mt-1">
                        <Sparkles size={20} className="text-white fill-white/20" />
                      </div>
                      <p className="text-[#1e293b] text-[14px] leading-relaxed">
                        <span className="font-bold">Pro Tip:</span> Sharing details about performance gains (like 'reduced battery drain by 40%') helps our AI prioritize your key achievements.
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
                        Save & Continue to Arsenal
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </Dialog>
          </Modal>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};
