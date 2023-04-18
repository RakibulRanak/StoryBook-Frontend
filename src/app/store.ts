import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import { storyApi } from "../services/storyApi";
import { authApi } from "../services/authApi";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [storyApi.reducerPath]: storyApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storyApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
