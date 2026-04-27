import { FullUser, User, UserRes } from "@/app/common/types/general";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5050",
    credentials: "include",
    prepareHeaders: (headers, { endpoint }) => {
      // For file uploads (FormData), we must not set Content-Type manually
      // so the browser can set it with the correct boundary.
      if (endpoint === "uploadCV") {
        return headers;
      }

      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    googleLogin: builder.mutation<any, { token: string }>({
      query: (body) => ({
        url: "/auth/google",
        method: "POST",
        body,
      }),
    }),
    parseText: builder.mutation<{ result: any }, { prompt: string }>({
      query: (body) => ({
        url: "/parser",
        method: "POST",
        body,
      }),
    }),
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
    uploadCV: builder.mutation<any, Blob | File>({
      query: (file) => {
        const formData = new FormData();
        formData.append("file", file);
        return {
          url: "/cv/upload",
          method: "POST",
          body: formData,
        };
      },
    }),
    register: builder.mutation<UserRes, any>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<UserRes, any>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    getCandidateCVs: builder.query<any, string>({
      query: (userId) => ({
        url: `/cvs/${userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useParseTextMutation,
  useCreateJobPostMutation,
  useSearchJobsMutation,
  useUploadCVMutation,
  useGoogleLoginMutation,
  useRegisterMutation,
  useLoginMutation,
  useGetCandidateCVsQuery,
  useLazyGetCandidateCVsQuery,
} = api;
