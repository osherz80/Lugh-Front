import { api } from '@/store/services/api/api'
import { SmartProfileState, SmartProfileSection } from '@/store/types/smartProfile'


export const smartProfileApi = api.injectEndpoints({
    endpoints: (builder) => ({
        upsertSmartProfile: builder.mutation<any, Partial<SmartProfileState & { section: SmartProfileSection }>>({
            query: (profileData) => ({
                url: "/smartProfile",
                method: "PATCH",
                body: profileData,
            })
        }),
    }),
});

export const {
    useUpsertSmartProfileMutation
} = smartProfileApi;

