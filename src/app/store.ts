import { configureStore,PreloadedState, combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import { storyApi } from "../services/storyApi";
import { authApi } from "../services/authApi";

const rootReducer : any = combineReducers({
  auth: authSlice,
  [storyApi.reducerPath]: storyApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>)=> configureStore({
  reducer: rootReducer,
  preloadedState,   
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storyApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof rootReducer.dispatch;
