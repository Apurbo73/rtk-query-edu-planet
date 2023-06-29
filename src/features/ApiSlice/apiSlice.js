import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://video-website-server.onrender.com"
  }),
  endpoints: builder => ({
    getAllVideos: builder.query({
      query: () => `/videos`
    }),

    getSingleVideo: builder.query({
      query: id => `/videos/${id}`
    }),

    addVideo: builder.mutation({
      query: data => ({
        url: `/videos`,
        method: "POST",
        body: data
      })
    })
  })
});

export const {
  useGetAllVideosQuery,
  useAddVideoMutation,
  useGetSingleVideoQuery
} = apiSlice;
