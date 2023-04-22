import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './articleService';
import { imageApi } from './imageService';
import { translationApi } from './translationService';

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    [translationApi.reducerPath]: translationApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware, translationApi.middleware, imageApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
