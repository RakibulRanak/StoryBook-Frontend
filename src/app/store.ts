import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/authSlice'
import { storiesApi } from "../services/storyApi";
import { authApi } from "../services/authApi";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        [storiesApi.reducerPath]: storiesApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(storiesApi.middleware,authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
