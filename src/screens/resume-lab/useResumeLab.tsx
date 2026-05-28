import { useState } from "react";
import { CV } from "@/store/types/cv";

export const useResumeLab = () => {
  const [currentCv, setCurrentCv] = useState<CV | null>(null);

  const handleCvClick = (cv: CV) => {
    setCurrentCv(cv);
  };

  return {
    currentCv,
    handleCvClick,
  };
};
