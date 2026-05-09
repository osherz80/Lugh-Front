"use client";

import React from 'react';
import { 
  Modal, 
  Dialog, 
  Heading, 
  TextField, 
  Label, 
  Input, 
  Button, 
  RadioGroup, 
  Radio, 
  ModalOverlay,
  NumberField
} from 'react-aria-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

interface Step1ModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const Step1Modal = ({ isOpen, onOpenChange }: Step1ModalProps) => {
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
                  {/* Header Badge - Positioned absolute to pop out slightly */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#005c4d] text-white text-[12px] font-bold px-6 py-2 rounded-full tracking-wider uppercase shadow-lg shadow-[#005c4d]/20 border-2 border-white">
                      Step 01
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

                      {/* General Location */}
                      <TextField className="flex flex-col gap-2.5">
                        <Label className="text-[#1e293b] font-bold text-[15px] ml-1">General Location</Label>
                        <Input 
                          placeholder="City, Country (e.g., Tel Aviv, Israel)" 
                          className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
                        />
                      </TextField>

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
