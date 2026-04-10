"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface BrandIconProps {
  icon: IconDefinition;
  className?: string;
  size?: number;
}

export const BrandIcon = ({ icon, className = "", size = 20 }: BrandIconProps) => {
  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <FontAwesomeIcon 
        icon={icon} 
        style={{ fontSize: size }}
      />
    </div>
  );
};
