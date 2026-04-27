"use client"

import React from "react";
import { DonutChart } from "@/components/shared/DonutChart/DonutChart";
import { MatchHighlight } from "./MatchHighlight";
import { JobTag } from "./JobTag";
import { JobTitle } from "./JobTitle";
import { LikeJob } from "./LikeJob";
import { JobApply } from "./JobApply";
import useJobCard from "./useJobCard";

interface JobCardProps {
  title: string;
  location: string;
  matchScore: number;
  matchReason: string;
  tags: string[];
  isFavorited?: boolean;
}

export function JobCard({ title, location, matchScore, matchReason, tags, isFavorited }: JobCardProps) {
  const { onLikeClick, onTagClick, onApplyClick } = useJobCard()
  return (
    <article className="bg-white p-8 rounded-2xl shadow-lugh-blur group hover:translate-y-[-2px] transition-all duration-300 border border-zinc-100/50">
      <div className="flex justify-between items-start mb-6">
        <JobTitle title={title} location={location} />
        <DonutChart score={matchScore} />
      </div>

      <MatchHighlight matchScore={matchScore} matchReason={matchReason} />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LikeJob isFavorited={isFavorited} onClick={onLikeClick} />
          <div className="flex gap-2">
            {tags.map((tag) => (
              <JobTag key={tag} label={tag} onClick={onTagClick} />
            ))}
          </div>
        </div>

        <JobApply onClick={onApplyClick} />
      </div>
    </article>
  );
}
