import React from "react";

interface JobTitleProps {
  title: string;
  location: string;
}

export function JobTitle({ title, location }: JobTitleProps) {
  return (
    <div>
      <h3 className="text-xl font-bold text-zinc-900 mb-1">{title}</h3>
      <p className="text-zinc-500 font-medium">{location}</p>
    </div>
  );
}
