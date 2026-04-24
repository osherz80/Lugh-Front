import React from "react";

interface LikeJobProps {
  isFavorited?: boolean;
  onClick?: () => void;
}

export function LikeJob({ isFavorited, onClick }: LikeJobProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 transition-colors ${isFavorited ? 'text-rose-500' : 'text-zinc-400 hover:text-rose-500'} active:scale-90 transition-all`}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontVariationSettings: isFavorited ? "'FILL' 1" : "'FILL' 0" }}
      >
        favorite
      </span>
    </button>
  );
}
