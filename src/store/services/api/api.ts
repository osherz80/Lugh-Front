import { FullUser, User, UserRes } from "@/common/types";
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
  endpoints: (builder) => ({}),
});
