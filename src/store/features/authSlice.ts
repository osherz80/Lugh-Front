import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  user: any | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthSuccess: (
      state,
      action: PayloadAction<{ user: any; isAuth: boolean }>
    ) => {
      state.user = action.payload.user;
      state.isAuth = action.payload.isAuth;
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
    },
  },
});

export const { setAuthSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
