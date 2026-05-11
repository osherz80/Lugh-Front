"use client";

import React from 'react';
import {
  TextField,
  Label,
  Input,
  TextArea,
  Checkbox,
  Button
} from 'react-aria-components';
import { motion, AnimatePresence } from 'framer-motion';

interface EducationStationProps {
  index: number;
}

export const EducationStation = ({ index }: EducationStationProps) => {
  const [description, setDescription] = React.useState('');
  const [isOngoing, setIsOngoing] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-2 gap-6">
        {/* Institution */}
        <TextField className="flex flex-col gap-2.5">
          <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">Institution / School</Label>
          <Input
            placeholder="e.g., The College of MAMRAM"
            className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
          />
        </TextField>

        {/* Degree */}
        <TextField className="flex flex-col gap-2.5">
          <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">Degree / Certification</Label>
          <Input
            placeholder="e.g., Marketing Mastercl"
            className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
          />
        </TextField>
      </div>

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
                isSelected={isOngoing}
                onChange={setIsOngoing}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className={`
                  w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all
                  ${isOngoing ? 'bg-[#005c4d] border-[#005c4d]' : 'border-slate-300 group-hover:border-[#00a18a] bg-white'}
                `}>
                  {isOngoing && <span className="material-symbols-outlined text-white text-[18px] font-bold">check</span>}
                </div>
                <span className="text-[#1e293b] font-bold text-[15px]">Ongoing</span>
              </Checkbox>
            </div>
          </TextField>
        </div>
      </div>

      {/* The Deep Dive - Specific Courses & Projects */}
      <div className="border-2 border-[#00a18a]/10 rounded-[28px] overflow-hidden bg-[#f1fcfb]/50">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-6 hover:bg-[#00a18a]/5 transition-colors text-left"
        >
          <div className="flex items-center gap-4">
            <div className="bg-[#00a18a]/10 p-2 rounded-xl">
              <span className="material-symbols-outlined text-[#00a18a] text-[24px]">assignment</span>
            </div>
            <div>
              <p className="text-[#1e293b] font-[900] text-[16px]">The Deep Dive - Specific Courses & Projects</p>
              <p className="text-slate-500 font-bold text-[13px]">Any specific courses or projects you'd like to highlight? Describe their impact.</p>
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
                <TextField className="relative">
                  <TextArea
                    value={description}
                    onChange={(e) => setDescription(e.target.value.slice(0, 600))}
                    placeholder="Write naturally. Mention algorithms, major projects, specializations, or what you built during independent learning. (up to 600 chars)"
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
  );
};
