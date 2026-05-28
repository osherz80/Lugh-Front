"use client";

import React from 'react';
import { Heading } from 'react-aria-components';

interface StepModalHeaderProps {
  icon: string | React.ReactNode;
  title: string;
  subTitle: string;
}

export const StepModalHeader = ({ icon, title, subTitle }: StepModalHeaderProps) => {
  return (
    <div className="text-center mb-10">
      <div className="flex justify-center mb-6 select-none">
        {typeof icon === 'string' && icon.startsWith('/') ? (
          <img src={icon} alt="" className="w-20 h-20 object-contain" />
        ) : (
          <div className="text-6xl">{icon}</div>
        )}
      </div>
      <Heading slot="title" className="text-[32px] font-[900] text-[#1e293b] mb-2 tracking-tight leading-tight">
        {title}
      </Heading>
      <p className="text-slate-500 font-medium text-[17px] max-w-[440px] mx-auto">
        {subTitle}
      </p>
    </div>
  );
};
