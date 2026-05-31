import { useAppSelector } from "@/store/hooks";
import { useLazyGetCandidateCVsQuery } from "@/store/services/api/cv";
import { useGetMasterSmartProfileQuery, useGetOtherSmartProfilesQuery } from "@/store/services/api/smartProfile";
import { useEffect } from "react";

export const useCandidateHome = () => {

    const user = useAppSelector((state) => state.auth.user);
    const [getCandidateCVs, { data: cvs, error, isLoading }] = useLazyGetCandidateCVsQuery();
    const { data: smartProfile, isLoading: isSmartProfileLoading, isSuccess: isMasterSuccess } = useGetMasterSmartProfileQuery();
    const { data: otherProfiles, isLoading: isOtherProfilesLoading, isSuccess: isOtherSuccess } = useGetOtherSmartProfilesQuery(undefined, { skip: !isMasterSuccess || !smartProfile?.profileId });


    useEffect(() => {
        if (user?.hasCv && user?.id) {
            getCandidateCVs();
        }

    }, [user?.id]);

    return {
        cvs,
        error,
        isLoading,
    };
};
