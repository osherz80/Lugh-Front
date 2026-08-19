"use client";

import React, { useState } from "react";
import { PostJobHeader } from "./components/PostJobHeader";
import { AutoPostJob } from "./components/AutoPostJob";
import { ManualPostJob } from "./components/ManualPostJob";

export default function PostJob() {
    const [formMode, setFormMode] = useState<"Manual" | "Auto">("Manual");

    return (
        <main className="ml-[16.25rem] flex-1 flex flex-col min-h-screen bg-canvas relative">
            <PostJobHeader formMode={formMode} onFormModeChange={setFormMode} />

            <div className="flex-1 p-8 pb-24 flex justify-center">
                {formMode === "Auto" ? <AutoPostJob /> : <ManualPostJob />}
            </div>
        </main>
    );
}
