import { api } from '@/store/services/api/api'
import { SmartProfileSection, SmartProfileState } from '@/store/types/smartProfile'
import { RootState } from '@/store/store'


export const smartProfileApi = api.injectEndpoints({
    endpoints: (builder) => ({
        upsertSmartProfile: builder.mutation<any, Partial<SmartProfileState & { section: SmartProfileSection }>>({
            async queryFn(profileData, { getState }, _extraOptions, baseQuery) {
                const state = getState() as RootState;
                const smartProfileId = state.smartProfile.smartProfileId;

                const result = await baseQuery({
                    url: "/smartProfile",
                    method: "PATCH",
                    body: {
                        ...profileData,
                        smartProfileId,
                    },
                });

                return result.data ? { data: result.data } : { error: result.error };
            }
        }),
    }),
});

export const {
    useUpsertSmartProfileMutation
} = smartProfileApi;


