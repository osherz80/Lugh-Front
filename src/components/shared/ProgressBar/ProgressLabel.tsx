import React from "react";

interface ProgressLabelProps {
    labelText: string;
}

export function ProgressLabel({ labelText }: ProgressLabelProps) {
    return (
        <span className="flex items-center gap-1 text-[0.85rem]">
            {labelText}
            <span className="material-symbols-outlined">info</span>
        </span>
    );
}
