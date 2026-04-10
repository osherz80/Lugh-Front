import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  inputText: string;
}

const initialState: AppState = {
  inputText: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInputText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
    },
  },
});

export const { setInputText } = appSlice.actions;
export default appSlice.reducer;
