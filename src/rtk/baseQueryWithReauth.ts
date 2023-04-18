import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { RootState } from "../app/store";
import { Mutex } from "async-mutex";
import { removeUser, setNewAccessToken } from "../features/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api/v1/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.access_token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    }
  },
});
const mutex = new Mutex();

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // try to get a new access token if 401 found
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        // new access token generation call with current refresh token from local_storage
        const refreshResult = await baseQuery(
          {
            url: "token",
            method: "POST",
            body: {
              refresh_token: localStorage.getItem("refresh_token") || "",
            },
          },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          // store the new token
          api.dispatch(setNewAccessToken(refreshResult.data));
          // retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          //wrong or expired refresh token, should remove it from storage
          api.dispatch(removeUser());
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export default baseQueryWithReauth;
