import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  user: any | null;
  isAuth: boolean;
  accessToken: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
  accessToken: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAuthSuccess: (
      state,
      action: PayloadAction<{ user: any; isAuth: boolean; accessToken: string }>
    ) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.isAuth = action.payload.isAuth;
      state.accessToken = action.payload.accessToken;
      state.error = null;
    },
    setAuthFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuth = false;
      state.user = null;
      state.accessToken = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
      state.accessToken = null;
    },
  },
});

export const { setLoading, setAuthSuccess, setAuthFailure, logout } = authSlice.actions;
export default authSlice.reducer;
