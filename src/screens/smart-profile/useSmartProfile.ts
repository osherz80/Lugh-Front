import { useReducer, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useCreateSmartProfileMutation } from "@/store/services/api/cv";

type ModalState = {
    activeStep: number | null;
};

type ModalAction =
    | { type: "OPEN_STEP"; step: number; maxAllowedStep: number }
    | { type: "CLOSE_MODAL" };

const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
    switch (action.type) {
        case "OPEN_STEP":
            if (action.step <= action.maxAllowedStep) {
                return { activeStep: action.step };
            }
            return state;
        case "CLOSE_MODAL":
            return { activeStep: null };
        default:
            return state;
    }
};

const initialState: ModalState = {
    activeStep: null,
};

export const useSmartProfile = () => {
    const profileData = useSelector((state: RootState) => state.smartProfile);
    const [createSmartProfile, { isLoading: isSending }] = useCreateSmartProfileMutation();

    const [state, dispatch] = useReducer(modalReducer, initialState);

    const scrollRef = useRef<HTMLDivElement>(null);

    const handleWheel = (e: React.WheelEvent) => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += e.deltaY * 0.8;
        }
    };

    const openStep = (stepNumber: number) => {
        dispatch({
            type: "OPEN_STEP",
            step: stepNumber,
            maxAllowedStep: profileData.currentStep,
        });
    };

    const closeModal = () => {
        dispatch({ type: "CLOSE_MODAL" });
    };

    const handleSend = async () => {
        try {
            await createSmartProfile(profileData).unwrap();
            alert("Profile sent successfully!");
        } catch (err) {
            console.error("Failed to send profile:", err);
            alert("Failed to send profile. Please try again.");
        }
    };

    return {
        scrollRef,
        handleWheel,
        activeStep: state.activeStep,
        currentStep: profileData.currentStep,
        openStep,
        closeModal,
        handleSend,
        isSending,
    };
};

