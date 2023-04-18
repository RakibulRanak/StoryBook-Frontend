import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  SignInPayload,
  SignUpPayload,
  RefreshToken,
  AccessToken,
  SignInResponse,
} from "../models/userModel";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    newAccessToken: builder.query<AccessToken, RefreshToken>({
      query: () => "/token",
      providesTags: ["User"],
    }),
    signIn: builder.mutation<SignInResponse, SignInPayload>({
      query: (body) => ({
        url: "/users/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    signUp: builder.mutation<void, SignUpPayload>({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
    }),
    //req body te refres_token nite hobe
    signOut: builder.mutation<void, RefreshToken>({
      query: (body) => ({
        url: "/users/logout",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useSignOutMutation,
  useNewAccessTokenQuery,
} = authApi;
