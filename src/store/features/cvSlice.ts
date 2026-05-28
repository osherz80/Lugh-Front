import { CV } from "@/store/types/cv";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CVState {
  cvs: CV[];
}

const initialState: CVState = {
  cvs: [],
};

export const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    setCvs: (state, action: PayloadAction<CV[]>) => {
      state.cvs = action.payload;
    },
    addCv: (state, action: PayloadAction<CV>) => {
      state.cvs.push(action.payload);
    },
    clearCvs: (state) => {
      state.cvs = [];
    },
  },
});

export const { setCvs, addCv, clearCvs } = cvSlice.actions;
export default cvSlice.reducer;
