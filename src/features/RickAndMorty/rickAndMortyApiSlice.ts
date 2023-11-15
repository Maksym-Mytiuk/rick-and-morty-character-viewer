import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/constants/api';
import { CharacterDTO } from '@/interfaces/character';
import { EpisodeDTO } from '@/interfaces/episode';
import { LocationDTO } from '@/interfaces/location';

export interface QueryParams {
  activePageNumber: number;
  searchName?: string;
}

export const rickAndMortyApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL.BASE_PATH,
    prepareHeaders(headers) {
      headers.set('Content-type', 'application/json');
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchCharacters: builder.query<CharacterDTO, QueryParams>({
        query({ activePageNumber, searchName = '' }) {
          return `/${API_URL.CHARACTER}/?page=${activePageNumber}&name=${searchName}`;
        },
      }),
      fetchEpisodes: builder.query<EpisodeDTO, QueryParams>({
        query({ activePageNumber }) {
          return `/${API_URL.EPISODE}/?page=${activePageNumber}`;
        },
      }),
      fetchLocations: builder.query<LocationDTO, QueryParams>({
        query({ activePageNumber }) {
          return `/${API_URL.LOCATION}/?page=${activePageNumber}`;
        },
      }),
    };
  },
});

export const { useFetchCharactersQuery, useFetchEpisodesQuery, useFetchLocationsQuery } = rickAndMortyApiSlice;
