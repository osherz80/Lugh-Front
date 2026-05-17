import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FullSmartProfile, SmartProfilePayload, OtherProfile } from "@/store/types/smartProfile";
import { smartProfileApi } from "../services/api/smartProfile";


const initialState: FullSmartProfile = {
    profileId: null,
    currentStep: 1,
    isMaster: false,
    otherProfiles: [],
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
        portfolio: "",
        anythingElse: "",
    },
};

export const smartProfileSlice = createSlice({
    name: "smartProfile",
    initialState,
    reducers: {
        setSmartProfile: (state, action: PayloadAction<FullSmartProfile>) => {
            return action.payload;
        },
        setSmartProfileSectionKey: (state, action: PayloadAction<SmartProfilePayload>) => {
            (state as any)[action.payload.key] = action.payload.value;
        },
        setOtherProfiles: (state, action: PayloadAction<OtherProfile[]>) => {
            state.otherProfiles = action.payload;
        },
        setprofileId: (state, action: PayloadAction<string>) => {
            state.profileId = action.payload;
        },
        setSmartProfileStep: (state, action: PayloadAction<number>) => {
            state.currentStep = action.payload;
        },
        setSmartProfileMaster: (state, action: PayloadAction<boolean>) => {
            state.isMaster = action.payload;
        },

        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addMatcher(smartProfileApi.endpoints.upsertSmartProfile.matchFulfilled, (state, action) => {
            console.log("action", action.payload);
            return action.payload;
        });
    }
});

export const {
    setSmartProfile,
    setSmartProfileSectionKey,
    setSmartProfileStep,
    setprofileId,
    setSmartProfileMaster,
    reset
} = smartProfileSlice.actions;

export default smartProfileSlice.reducer;
