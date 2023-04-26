import { createApi } from "@reduxjs/toolkit/query/react";
import {
  SignInPayload,
  SignUpPayload,
  RefreshToken,
  AccessToken,
  SignInResponse,
} from "../models/authModel";
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
    signOut: builder.mutation<void, RefreshToken>({
      query: (body) => ({
        url: "/users/logout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useSignOutMutation } =
  authApi;
