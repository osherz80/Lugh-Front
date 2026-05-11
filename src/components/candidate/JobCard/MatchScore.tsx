import React from "react";

interface MatchScoreProps {
  score: number;
  size?: number;
}

export function MatchScore({ score, size = 20 }: MatchScoreProps) {
  const radius = 15.915;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className={`relative w-${size} h-${size} flex items-center justify-center shrink-0`}>
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
        <circle
          className="stroke-brand-tint"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="18"
          cy="18"
        />
        <circle
          className="stroke-brand transition-all duration-1000 ease-out"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="18"
          cy="18"
        />
      </svg>
      <span
        style={{ fontSize: `${size * 0.9}px` }}
        className={`absolute font-extrabold text-brand`}
      >{score}%</span>
    </div>
  );
}
