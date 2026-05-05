import { api } from '@/store/services/api/api'

export const jobApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createJobPost: builder.mutation<any, { jobDescription: string; jobTitle: string }>({
            query: (jobData) => ({
                url: "/jobs/create",
                method: "POST",
                body: jobData,
            }),
        }),
        searchJobs: builder.mutation<any, { jobSearch: string }>({
            query: (data) => ({
                url: "/jobs/search",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const {
    useCreateJobPostMutation,
    useSearchJobsMutation
} = jobApi;