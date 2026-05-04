import { api } from '@/store/services/api/api'

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
        getCandidateCVs: builder.query<any, string>({
            query: (userId) => ({
                url: `/cv/${userId}`,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useUploadCVMutation,
    useGetCandidateCVsQuery
} = cvApi;