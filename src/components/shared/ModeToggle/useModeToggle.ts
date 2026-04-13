import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMode, AppMode } from "@/store/features/appSlice";

/**
 * useModeToggle Hook
 * Connects the ModeToggle component to the Redux global state.
 */
export const useModeToggle = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.app.mode);

  const handleModeChange = (newMode: AppMode) => {
    dispatch(setMode(newMode));
  };

  return {
    mode,
    handleModeChange,
  };
};
