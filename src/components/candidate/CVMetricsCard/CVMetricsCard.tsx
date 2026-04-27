import React from "react";
import { ProgressBar } from "@/components/shared/ProgressBar/ProgressBar";
import { ProgressLabel } from "@/components/shared/ProgressBar/ProgressLabel";

interface CVMetricsCardProps {
  metrics?: Record<string, number>;
}

export function CVMetricsCard({ metrics }: CVMetricsCardProps) {
  const data = metrics || {
    atsReadability: 62,
    keywords: 93,
    verbImpact: 41,
    contactDensity: 100,
  };

  const barCards = [];

  for (const [key, value] of Object.entries(data)) {
    barCards.push(
      <ProgressBar
        label={<ProgressLabel labelText={key} />}
        value={value}
      />
    )
  }

  return (
    <section className="space-y-4">
      {barCards}
    </section>
  );
}
