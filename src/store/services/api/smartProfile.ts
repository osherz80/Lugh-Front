import { api } from '@/store/services/api/api'
import { SmartProfileSectionKey, FullSmartProfile, BackendSmartProfile, SmartProfileSection, UpsertSmartProfilePayload } from '@/store/types/smartProfile'
import { RootState } from '@/store/store'
import { mapBackendToFrontendSmartProfile } from '@/lib/mappers'
import { setOtherProfiles, setSmartProfile } from '@/store/features/smartProfileSlice'


export const smartProfileApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getMasterSmartProfile: builder.query<FullSmartProfile | null, void>({
            query: () => ({
                url: "/smartProfile",
                method: "GET",
            }),
            transformResponse: (response: BackendSmartProfile | null) => mapBackendToFrontendSmartProfile(response),
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log("action.payload from onQueryStarted:", data);
                    if (data) {
                        dispatch(setSmartProfile(data));
                    }
                } catch (error) {
                    console.error("Error fetching master smart profile", error);
                }
            }
        }),
        getOtherSmartProfiles: builder.query<FullSmartProfile[], void>({
            query: () => ({
                url: "/smartProfile/other",
                method: "GET",
            }),
            transformResponse: (response: BackendSmartProfile[] | null): FullSmartProfile[] => {
                if (!response) return [];
                return response
                    .map(mapBackendToFrontendSmartProfile)
                    .filter((p): p is FullSmartProfile => p !== null);
            }
        }),
        upsertSmartProfile: builder.mutation<any, UpsertSmartProfilePayload>({
            async queryFn(profileData, { getState }, _extraOptions, baseQuery) {
                const { stepData, section } = profileData;
                const state = getState() as RootState;
                const profileId = state.smartProfile.profileId;

                const result = await baseQuery({
                    url: "/smartProfile",
                    method: "PATCH",
                    body: {
                        stepData,
                        section,
                        profileId,
                    },
                });

                return result.data ? { data: result.data } : { error: result.error };
            }
        }),
        setMaster: builder.mutation<any, { profileId: string }>({
            query: ({ profileId }) => ({
                url: "/smartProfile/setMaster",
                method: "PATCH",
                body: { profileId },
            }),
        }),
    }),
});

export const {
    useUpsertSmartProfileMutation,
    useGetMasterSmartProfileQuery,
    useGetOtherSmartProfilesQuery,
    useSetMasterMutation
} = smartProfileApi;