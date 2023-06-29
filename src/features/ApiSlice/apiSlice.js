import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://video-website-server.onrender.com"
  }),
  tagTypes: ["allVideos","relatedVideos"],
  endpoints: builder => ({
    getAllVideos: builder.query({
      query: () => `/videos`,
      providesTags: ["allVideos"]
    }),

    getSingleVideo: builder.query({
      query: id => `/videos/${id}`
    }),
    getRelatedVideos: builder.query({
      query: ({ id, title }) => {
        const tags = title.split(" ");
        const likes = tags.map(tag => `title_like=${tag}`);
        const queryString = `/videos?${likes.join("&")}&_limit=4`;
        return queryString;
      },
      providesTags: ["relatedVideos"]
    }),
    addVideo: builder.mutation({
      query: data => ({
        url: `/videos`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["allVideos","relatedVideos"]
    })
  })
});

export const {
  useGetAllVideosQuery,
  useAddVideoMutation,
  useGetSingleVideoQuery,
  useGetRelatedVideosQuery
} = apiSlice;
