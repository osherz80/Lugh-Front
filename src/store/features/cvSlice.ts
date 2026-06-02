import { CV } from "@/store/types/cv";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../services/api/api";
import { cvApi } from "../services/api/cv";

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
  extraReducers: (builder) => {
    builder.addMatcher(cvApi.endpoints.cvFromSmartProfile.matchFulfilled, (state, action) => {
      const { cvs } = state
      if (!cvs.some(cv => cv.id === action.payload.id)) {
        cvs.length > 0 ? cvs.push(action.payload) : state.cvs = [action.payload]
      }
    })
  }
});

export const { setCvs, addCv, clearCvs } = cvSlice.actions;
export default cvSlice.reducer;
