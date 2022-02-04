import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IAmiibo } from '../typings/amiibo';
import { AmiiboGameSeries } from '../utils/constants';

const BASE_URL = 'https://www.amiiboapi.com//api/amiibo/';

const gameMap = {
  pokemon: 'Pokemon',
  animalCrossing: 'Animal%20Crossing',
  marioSuperStars: 'Mario%20Sports%20Superstars',
};

export interface IResponse {
  amiibo: IAmiibo[];
}

// Define a service using a base URL and expected endpoints
export const amiiboApi = createApi({
  reducerPath: 'amiiboApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAmiiboByGameSeries: builder.query<IResponse, string>({
      query: (gameseries: AmiiboGameSeries) => `?gameseries=${gameMap[gameseries]}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAmiiboByGameSeriesQuery } = amiiboApi;
