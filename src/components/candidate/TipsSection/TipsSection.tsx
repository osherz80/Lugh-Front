import { useState } from 'react';
import { CVTip } from '@/store/types/cv';
import { TipCard } from './TipCard';

interface TipsSectionProps {
    tips: CVTip[];
}

export function TipsSection({ tips }: TipsSectionProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    if (!tips || tips.length === 0) return null;

    return (
        <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Insights & Fixes</h3>
            <div className="space-y-3">
                {tips.map((fix, index) => (
                    <TipCard
                        key={`${fix.category}-${index}`}
                        tip={fix}
                        isExpanded={expandedIndex === index}
                        onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    />
                ))}
            </div>
        </section>
    );
}
