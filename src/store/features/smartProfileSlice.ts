import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SmartProfileState, SmartProfilePayload } from "@/store/types/smartProfile";


const initialState: SmartProfileState = {
    smartProfileId: null,
    currentStep: 1,
    isMaster: false,
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
        anythingElse: "",
    },
};

export const smartProfileSlice = createSlice({
    name: "smartProfile",
    initialState,
    reducers: {
        setSmartProfileData: (state, action: PayloadAction<SmartProfilePayload>) => {
            (state as any)[action.payload.key] = action.payload.value;
        },
        setSmartProfileId: (state, action: PayloadAction<string>) => {
            state.smartProfileId = action.payload;
        },
        setSmartProfileStep: (state, action: PayloadAction<number>) => {
            state.currentStep = action.payload;
        },
        setSmartProfileMaster: (state, action: PayloadAction<boolean>) => {
            state.isMaster = action.payload;
        },

        reset: () => initialState,
    }
});

export const {
    setSmartProfileData,
    setSmartProfileStep,
    setSmartProfileId,
    setSmartProfileMaster,
    reset
} = smartProfileSlice.actions;

export default smartProfileSlice.reducer;
