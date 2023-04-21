import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const translationApi = createApi({
  reducerPath: 'translationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.edenai.run/v2/',
    prepareHeaders: (headers) => {
      headers.set('content-type', 'application/json');
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_EDEN_API_KEY}`);
    }
  }),
  endpoints: (builder) => ({
    translate: builder.query({
      query: (params: any) => ({
        url: `translation/automatic_translation`,
        method: 'POST',
        body: {
          providers: 'microsoft',
          show_original_response: true,
          text: params.text,
          target_language: params.language
        }
      })
    })
  })
});

export const { useLazyTranslateQuery } = translationApi;
