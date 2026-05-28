import React from "react";
import { ProgressBar } from "@/components/shared/ProgressBar/ProgressBar";
import { ProgressLabel } from "@/components/shared/ProgressBar/ProgressLabel";
import { CV } from '@/store/types/types'

export function CVMetricsCard({ cv }: { cv: CV }) {
  return (
    <section className="space-y-4">
      <ProgressBar
        label={<ProgressLabel labelText={'ATS'} />}
        value={cv.atsScore}
      />
      <ProgressBar
        label={<ProgressLabel labelText={'Layout'} />}
        value={cv.layoutScore}
      />
      <ProgressBar
        label={<ProgressLabel labelText={'Keywords'} />}
        value={cv.keywordsScore}
      />
      <ProgressBar
        label={<ProgressLabel labelText={'Impact'} />}
        value={cv.impactScore}
      />
    </section>
  );
}
