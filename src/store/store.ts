import { configureStore } from "@reduxjs/toolkit";
import appReducer from "@/store/features/appSlice";
import authReducer from "@/store/features/authSlice";
import { api } from "@/store/services/api";

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
