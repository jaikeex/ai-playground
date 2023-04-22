import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const imageApi = createApi({
  reducerPath: 'imageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dezgo.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('content-type', 'application/x-www-form-urlencoded');
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPID_API_KEY);
      headers.set('X-RapidAPI-Host', import.meta.env.VITE_RAPID_API_HOST_IMAGES);
    }
  }),
  endpoints: (builder) => ({
    getImage: builder.query({
      query: (params: any) => {
        const encodedParams = new URLSearchParams();
        encodedParams.append('prompt', params.prompt);
        encodedParams.append('guidance', '7');
        encodedParams.append('steps', '30');
        encodedParams.append('sampler', 'euler_a');
        encodedParams.append('upscale', '1');
        encodedParams.append(
          'negative_prompt',
          'ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, extra limbs, disfigured, deformed, body out of frame, blurry, bad anatomy, blurred, watermark, grainy, signature, cut off, draft'
        );
        encodedParams.append('model', 'epic_diffusion_1_1');

        return {
          url: `/text2image`,
          method: 'POST',
          body: encodedParams,
          responseHandler: async (response) => {
            const blob = await response.blob();
            return URL.createObjectURL(blob);
          }
        };
      }
    })
  })
});

export const { useLazyGetImageQuery } = imageApi;
