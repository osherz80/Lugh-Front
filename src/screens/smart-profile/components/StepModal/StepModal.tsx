"use client";

import React from 'react';
import { 
  Modal, 
  Dialog, 
  ModalOverlay
} from 'react-aria-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface StepModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  stepNumber: string | number;
  children: React.ReactNode | ((props: { close: () => void }) => React.ReactNode);
}

export const StepModal = ({ isOpen, onOpenChange, stepNumber, children }: StepModalProps) => {
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
                      Step {typeof stepNumber === 'number' ? stepNumber.toString().padStart(2, '0') : stepNumber}
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
                    {typeof children === 'function' ? children({ close }) : children}
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
