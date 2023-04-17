import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Story,
  StoriesResponse,
  StoryResponse,
  AddStory,
  UpdateStory,
} from "../models/storyModel";

export const storiesApi = createApi({
  reducerPath: "storyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/" }),
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
      invalidatesTags: ["Story"],
    }),
    updateStory: builder.mutation<void, UpdateStory>({
      query: ({ id, ...rest }) => ({
        url: `/stories/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Story"],
    }),
    deleteStory: builder.mutation<void, number>({
      query: (id) => ({
        url: `/stories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Story"],
    }),
  }),
});

export const {
  useStoriesQuery,
  useStoryQuery,
  useAddStoryMutation,
  useUpdateStoryMutation,
  useDeleteStoryMutation,
} = storiesApi;
