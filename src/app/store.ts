import { configureStore } from '@reduxjs/toolkit'
import storySlice from '../features/storySlice'
import authSlice from '../features/authSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        story: storySlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
