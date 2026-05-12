import { CV, SmartProfilePayload, SmartProfileState } from "@/store/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: SmartProfileState = {
    currentStep: 1,
    basics: {
        fullName: "",
        targetRole: "",
        yearsOfExperience: 0,
        country: "",
        city: "",
    },
    skills: {},
    experience: [],
    education: [],
    persona: {
        style: [],
        strengths: [],
        story: "",
    },
    contact: {
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        portfolio: "",
    },
    anythingElse: "",
};

export const smartProfileSlice = createSlice({
    name: "smartProfile",
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<SmartProfilePayload>) => {
            (state as any)[action.payload.key] = action.payload.value;
        },
        setProfileStep: (state, action: PayloadAction<number>) => {
            state.currentStep = action.payload;
        },
        reset: () => initialState,
    }
});

export const { setProfileData, setProfileStep, reset } = smartProfileSlice.actions;
export default smartProfileSlice.reducer;
