import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://video-website-server.onrender.com"
  }),
  endpoints: builder => ({
    getAllVideos: builder.query({
      query: () => `/videos`
    })
  })
});

export const { useGetAllVideosQuery } = apiSlice;
