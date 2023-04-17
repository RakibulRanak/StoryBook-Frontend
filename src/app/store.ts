import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/authSlice'
import { storiesApi } from "../services/storyApi";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        [storiesApi.reducerPath]: storiesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(storiesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
