import { useAppSelector } from "@/store/hooks";
import { useLazyGetCandidateCVsQuery } from "@/store/services/api/cv";
import { useGetMasterSmartProfileQuery, useGetOtherSmartProfilesQuery } from "@/store/services/api/smartProfile";
import { useEffect } from "react";

export const useCandidateHome = () => {

    const user = useAppSelector((state) => state.auth.user);
    const stateCvs = useAppSelector((state) => state.cv);
    const stateProfile = useAppSelector((state) => state.smartProfile);
    const [getCandidateCVs, { data: cvs, error, isLoading }] = useLazyGetCandidateCVsQuery();
    const {
        data: smartProfile,
        isLoading: isSmartProfileLoading,
        isSuccess: isMasterSuccess
    } = useGetMasterSmartProfileQuery(undefined, { skip: !!stateProfile.profileId });
    const {
        data: otherProfiles,
        isLoading: isOtherProfilesLoading,
        isSuccess: isOtherSuccess
    } = useGetOtherSmartProfilesQuery(undefined, { skip: !!stateProfile.profileId && isMasterSuccess });

    useEffect(() => {
        if (user?.hasCv && user?.id && !(stateCvs.cvs.length > 0)) {
            getCandidateCVs();
        }

    }, [user?.id]);

    return {
        cvs,
        error,
        isLoading,
    };
};
