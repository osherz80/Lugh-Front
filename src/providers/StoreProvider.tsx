"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { setSmartProfile } from "@/store/features/smartProfileSlice";
import { localStorageKeys } from "@/common/consts";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedProfile = localStorage.getItem(localStorageKeys.SMART_PROFILE);
      if (savedProfile) {
        try {
          const parsed = JSON.parse(savedProfile);
          store.dispatch(setSmartProfile(parsed));
        } catch (e) {
          console.error("Failed to parse saved smart profile state:", e);
        }
      }
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
