import { configureStore, Middleware } from "@reduxjs/toolkit";
import appReducer from "@/store/features/appSlice";
import authReducer from "@/store/features/authSlice";
import cvReducer from "@/store/features/cvSlice";
import smartProfileReducer from "@/store/features/smartProfileSlice";
import { api } from "@/store/services/api/api";
import { localStorageKeys } from "@/common/consts";

const persistStateSlicesMiddleware: Middleware = (storeApi) => (next) => (action: any) => {
  const result = next(action);
  if (action.type?.startsWith(localStorageKeys.SMART_PROFILE + '/')) {
    const state = storeApi.getState() as any;
    if (typeof window !== "undefined") {
      localStorage.setItem(localStorageKeys.SMART_PROFILE, JSON.stringify(state.smartProfile));
    }
  }
  if (action.type?.startsWith('auth/')) {
    const state = storeApi.getState() as any;
    if (typeof window !== "undefined") {
      localStorage.setItem(localStorageKeys.USER_STORAGE, JSON.stringify(state.auth.user));
    }
  }
  return result;
};

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    cv: cvReducer,
    smartProfile: smartProfileReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .concat(persistStateSlicesMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
