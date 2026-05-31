import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppMode = "candidate" | "recruiter";

interface AppState {
  mode: AppMode;
  shouldFetchProfile: boolean;
}

const initialState: AppState = {
  mode: "candidate",
  shouldFetchProfile: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<AppMode>) => {
      state.mode = action.payload;
    },
    setShouldFetchProfile: (state, action: PayloadAction<boolean>) => {
      state.shouldFetchProfile = action.payload;
    }
  },
});

export const {
  setMode,
  setShouldFetchProfile
} = appSlice.actions;
export default appSlice.reducer;
