"use client";

import React from 'react';
import {
  TextField,
  Label,
  Input,
  TextArea,
  Checkbox
} from 'react-aria-components';

interface CareerStationProps {
  index?: number;
}

export const CareerStation = ({ index }: CareerStationProps) => {
  const [description, setDescription] = React.useState('');
  const [isCurrentRole, setIsCurrentRole] = React.useState(false);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
    </div>
  );
};
