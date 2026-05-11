import { useState } from "react";
import { CV } from "@/store/services/types/types.d";

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
