import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  user: any | null;
  isAuth: boolean;
  accessToken: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthSuccess: (
      state,
      action: PayloadAction<{ user: any; isAuth: boolean; accessToken: string }>
    ) => {
      state.user = action.payload.user;
      state.isAuth = action.payload.isAuth;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
      state.accessToken = null;
    },
  },
});

export const { setAuthSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
