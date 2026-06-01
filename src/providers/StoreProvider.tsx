"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { setSmartProfile } from "@/store/features/smartProfileSlice";
import { localStorageKeys } from "@/common/consts";
import { setAuthSuccess } from "@/store/features/authSlice";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedProfile = localStorage.getItem(localStorageKeys.SMART_PROFILE);
      const savedUser = localStorage.getItem(localStorageKeys.USER_STORAGE);
      if (savedProfile) {
        try {
          const parsedProfile = JSON.parse(savedProfile);
          store.dispatch(setSmartProfile(parsedProfile));
        } catch (e) {
          console.error("Failed to parse saved smart profile state:", e);
        }
      }
      if (savedUser) {
        try {
          const parsedUser = JSON.parse(savedUser);
          store.dispatch(setAuthSuccess({ user: parsedUser }));
        } catch (e) {
          console.error("Failed to parse saved user state:", e);
        }
      }
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
