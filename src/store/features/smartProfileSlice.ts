import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
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
        switchActiveProfile: (state, action: PayloadAction<string>) => {
            const targetId = action.payload;
            const chosenProfile = state.otherProfiles.find(p => p.profileId === targetId);
            if (!chosenProfile) return;

            const currentState = current(state);
            const { otherProfiles, ...currentProfileWithoutOthers } = currentState;
            const shouldAdd = currentProfileWithoutOthers.profileId !== null;

            const remainingOthers = otherProfiles.filter(p => p.profileId !== targetId);
            const newOtherProfiles = shouldAdd
                ? [currentProfileWithoutOthers, ...remainingOthers]
                : remainingOthers;

            return {
                ...chosenProfile,
                otherProfiles: newOtherProfiles
            } as FullSmartProfile;
        },
        addActiveProfileToOthers: (state) => {
            const currentState = current(state);
            const { otherProfiles, ...currentProfileWithoutOthers } = currentState;
            const newOtherProfiles = [
                currentProfileWithoutOthers,
                ...otherProfiles,
            ];

            return {
                ...initialState,
                otherProfiles: newOtherProfiles,
                currentStep: 1,
            } as FullSmartProfile;
        },
        resetCurrentProfile: (state) => {
            return {
                ...initialState,
                otherProfiles: state.otherProfiles,
            };
        },
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addMatcher(smartProfileApi.endpoints.getOtherSmartProfiles.matchFulfilled, (state, action) => {
            console.log("action-others", action.payload);
            state.otherProfiles = action.payload;
        });
        builder.addMatcher(smartProfileApi.endpoints.upsertSmartProfile.matchFulfilled, (state, action) => {
            console.log("action", action.payload);
            return action.payload;
        });
    }
});

export const {
    setSmartProfile,
    setSmartProfileSectionKey,
    setOtherProfiles,
    setprofileId,
    setSmartProfileStep,
    setSmartProfileMaster,
    switchActiveProfile,
    addActiveProfileToOthers,
    resetCurrentProfile,
    reset
} = smartProfileSlice.actions;

export default smartProfileSlice.reducer;
