
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

export const TAGS = ["LOTTERY"];

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://testing-luckito-backend.rnssol.com/api',
  prepareHeaders: (headers) => {

    return headers;
  },
});

// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const baseAPI = createApi({
  reducerPath: "api",
  // baseQuery: baseQueryWithRetry,
  baseQuery: baseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});
