import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://video-website-server.onrender.com"
  }),
  tagTypes: ["allVideos", "relatedVideos", "singleVideo"],
  endpoints: builder => ({
    getAllVideos: builder.query({
      query: () => `/videos`,
      providesTags: ["allVideos"]
    }),

    getSingleVideo: builder.query({
      query: id => `/videos/${id}`,
      providesTags: ["singleVideo"]
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
      invalidatesTags: ["allVideos", "relatedVideos"]
    }),
    deleteVideo: builder.mutation({
      query: id => ({
        url: `/videos/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["allVideos", "relatedVideos"]
    }),
    editVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/videos/${id}`,
        method: "PATCH",
        body: data
      }),
      invalidatesTags: ["allVideos", "relatedVideos", "singleVideo"]
    })
  })
});

export const {
  useGetAllVideosQuery,
  useAddVideoMutation,
  useGetSingleVideoQuery,
  useGetRelatedVideosQuery,
  useDeleteVideoMutation,
  useEditVideoMutation
} = apiSlice;
