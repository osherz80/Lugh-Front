import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppMode = "seeker" | "recruiter";

interface AppState {
  mode: AppMode;
}

const initialState: AppState = {
  mode: "seeker",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<AppMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = appSlice.actions;
export default appSlice.reducer;
