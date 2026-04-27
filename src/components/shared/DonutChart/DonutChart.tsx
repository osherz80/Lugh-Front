"use client";

import React from "react";
import { ProgressBar } from "react-aria-components";

interface DonutChartProps {
    score: number;
    size?: number;
    label?: string;
    text?: string;
}

export function DonutChart({ score, size = 20, label = "Match Score", text }: DonutChartProps) {
    const radius = 15.915;
    const circumference = 2 * Math.PI * radius;

    return (
        <ProgressBar
            value={score}
            aria-label={label}
            className={`relative w-${size} h-${size} flex items-center justify-center shrink-0`}
        >
            {({ percentage }) => {
                const offset = circumference - (percentage! / 100) * circumference;

                return (
                    <>
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            {/* Track */}
                            <circle
                                className="stroke-brand-tint"
                                strokeWidth="3"
                                fill="transparent"
                                r={radius}
                                cx="18"
                                cy="18"
                            />
                            {/* Fill */}
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
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span
                                style={{ fontSize: `${size * 0.9}px` }}
                                className="font-extrabold text-brand leading-none"
                            >
                                {percentage}%
                            </span>
                            {text && (
                                <span className="text-[10px] font-bold text-zinc-400 uppercase mt-1">
                                    {text}
                                </span>
                            )}
                        </div>
                    </>
                );
            }}
        </ProgressBar>
    );
}
