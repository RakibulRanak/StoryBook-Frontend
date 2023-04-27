import { createApi } from "@reduxjs/toolkit/query/react";
import {
  StoriesResponse,
  StoryResponse,
  AddStory,
  UpdateStory,
} from "../models/storyModel";
import baseQueryWithReauth from "../rtk/baseQueryWithReauth";

export const storyApi = createApi({
  reducerPath: "storyApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Story"],
  endpoints: (builder) => ({
    stories: builder.query<StoriesResponse, void>({
      query: () => "/stories",
      providesTags: ["Story"],
    }),
    story: builder.query<StoryResponse, number>({
      query: (id) => `/stories/${id}`,
      providesTags: (result, error, id) => [{ type: "Story", id }],
    }),
    addStory: builder.mutation<{}, AddStory>({
      query: (story) => ({
        url: "/stories",
        method: "POST",
        body: story,
      }),
      invalidatesTags: (result, arg) => (result ? [{ type: "Story" }] : []),
    }),
    updateStory: builder.mutation<void, UpdateStory>({
      query: ({ id, ...rest }) => ({
        url: `/stories/${id}`,
        method: "PUT",
        body: rest,
      }),
      // invalidatesTags: ["Story"],
      invalidatesTags: (result, arg) => (result ? [{ type: "Story" }] : []),
    }),
    deleteStory: builder.mutation<void, number>({
      query: (id) => ({
        url: `/stories/${id}`,
        method: "DELETE",
      }),
      // invalidatesTags: ["Story"],
      invalidatesTags: (result, arg) => (result ? [{ type: "Story" }] : []),
    }),
  }),
});

export const {
  useStoriesQuery,
  useStoryQuery,
  useAddStoryMutation,
  useUpdateStoryMutation,
  useDeleteStoryMutation,
} = storyApi;
