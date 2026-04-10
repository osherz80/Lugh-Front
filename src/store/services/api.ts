import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
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
  }),
});

export const { useParseTextMutation } = api;
