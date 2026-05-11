import { useAppSelector } from "@/store/hooks";
import { useLazyGetCandidateCVsQuery } from "@/store/services/api/cv";
import { useLayoutEffect } from "react";

export const useCandidateHome = () => {

    const user = useAppSelector((state) => state.auth.user);
    const [getCandidateCVs, { data: cvs, error, isLoading }] = useLazyGetCandidateCVsQuery();


    useLayoutEffect(() => {
        if (user?.hasCv && user?.id) {
            getCandidateCVs(user.id);
        }
    }, [user?.id]);

    return {
        cvs,
        error,
        isLoading,
    };
};
