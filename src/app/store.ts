import { configureStore } from '@reduxjs/toolkit'
import storySlice from '../features/storySlice'

export const store = configureStore({
    reducer: {
        product: storySlice
    }
})

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch