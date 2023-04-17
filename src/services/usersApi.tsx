// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { SignUpPayload } from "../models/userModel";

// export const usersApi = createApi({
//   reducerPath: "usersApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/" }),
//   tagTypes: ["User"],
//   endpoints: (builder) => ({
//     stories: builder.query<Story[], void>({
//       query: () => "/stories",
//       providesTags: ["Story"],
//     }),
//     story: builder.query<Story, string>({
//       query: (id) => `/stories/${id}`,
//       providesTags: ["Story"],
//     }),
//     addStory: builder.mutation<{}, Story>({
//       query: (contact) => ({
//         url: "/stories",
//         method: "POST",
//         body: contact,
//       }),
//       invalidatesTags: ["Story"],
//     }),
//     updateStory: builder.mutation<void, Story>({
//       query: ({ id, ...rest }) => ({
//         url: `/stories/${id}`,
//         method: "PUT",
//         body: rest,
//       }),
//       invalidatesTags: ["Story"],
//     }),
//     deleteStory: builder.mutation<void, string>({
//       query: (id) => ({
//         url: `/stories/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Story"],
//     }),
//   }),
// });

// export const {
//   useStoriesQuery,
//   useStoryQuery,
//   useAddStoryMutation,
//   useUpdateStoryMutation,
//   useDeleteStoryMutation,
// } = storiesApi;
export {};
