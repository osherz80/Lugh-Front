import { api } from '@/store/services/api/api'
import { CV, SmartProfileState } from '@/store/types/types'
import { saveCvs } from '@/store/services/handlers/cvHandler'

export const cvApi = api.injectEndpoints({
    endpoints: (builder) => ({
        uploadCV: builder.mutation<any, { file: Blob | File; userId: string }>({
            query: ({ file, userId }) => {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("userId", userId);
                return {
                    url: "/cv/upload",
                    method: "POST",
                    body: formData,
                };
            },
        }),
        getCandidateCVs: builder.query<CV[], string>({
            query: (userId) => ({
                url: `/cv/${userId}`,
                method: "GET",
            }),
            onQueryStarted: saveCvs,
        }),
        createSmartProfile: builder.mutation<any, SmartProfileState>({
            query: (profileData) => ({
                url: "/cv/smart-profile",
                method: "POST",
                body: profileData,
            }),
        }),
    }),
});

export const {
    useUploadCVMutation,
    useLazyGetCandidateCVsQuery,
    useCreateSmartProfileMutation
} = cvApi;