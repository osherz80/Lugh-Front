import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5050",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
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
  }),
});

export const { useParseTextMutation, useCreateJobPostMutation, useSearchJobsMutation } = api;
