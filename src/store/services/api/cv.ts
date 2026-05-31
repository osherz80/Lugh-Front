import { api } from '@/store/services/api/api'
import { saveCvs } from '@/store/services/handlers/cvHandler'
import { FullSmartProfile } from '@/store/types/smartProfile'
import { CV } from '@/store/types/cv'

export const cvApi = api.injectEndpoints({
    endpoints: (builder) => ({
        uploadCV: builder.mutation<any, { file: Blob | File }>({
            query: ({ file }) => {
                const formData = new FormData();
                formData.append("file", file);
                return {
                    url: "/cv/upload",
                    method: "POST",
                    body: formData,
                };
            },
        }),
        getCandidateCVs: builder.query<CV[], void>({
            query: () => ({
                url: `/cv`,
                method: "GET",
            }),
            onQueryStarted: saveCvs,
        }),
        createSmartProfile: builder.mutation<any, FullSmartProfile>({
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
    useCreateSmartProfileMutation,
} = cvApi;