import { PostJob, PostMethod, ManualJobPost, AutoJobPost } from "@/store/types/job";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PostJobState {
    method: PostMethod;
    manual: ManualJobPost | null;
    auto: AutoJobPost | null;
}

const initialState: PostJobState = {
    method: "manual",
    manual: null,
    auto: null,
};

export const postJobSlice = createSlice({
    name: "postJob",
    initialState,
    reducers: {
        setManualJobPost: (
            state,
            action: PayloadAction<{ manual: ManualJobPost }>
        ) => {
            state.method = "manual";
            state.manual = action.payload.manual;
        },
        setAutoJobPost: (
            state,
            action: PayloadAction<{ auto: AutoJobPost }>
        ) => {
            state.method = "auto";
            state.auto = action.payload.auto;
        },
        logout: (state) => {
            state = initialState;
        },
    },
});

export const { setAutoJobPost, setManualJobPost, logout } = postJobSlice.actions;
export default postJobSlice.reducer;
