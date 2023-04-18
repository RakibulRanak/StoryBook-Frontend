import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  SignInPayload,
  SignUpPayload,
  RefreshToken,
  AccessToken,
  SignInResponse,
} from "../models/userModel";
import baseQueryWithReauth from "../rtk/baseQueryWithReauth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    newAccessToken: builder.query<AccessToken, RefreshToken>({
      query: () => "/token",
    }),
    signIn: builder.mutation<SignInResponse, SignInPayload>({
      query: (body) => ({
        url: "/users/login",
        method: "POST",
        body,
      }),
    }),
    signUp: builder.mutation<void, SignUpPayload>({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({
        url: "/users/logout",
        method: "POST",
        body: { refresh_token: localStorage.getItem("refresh_token") || null },
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useSignOutMutation } =
  authApi;
