import { TGetUpcomingFn, TSearchFn } from 'api/types';
import factory from './factory';

export const getUpcoming: TGetUpcomingFn = async ({ pageParam: page }) => {
  const { data } = await factory.get('/movie/upcoming', {
    params: {
      page,
    },
  });

  return data;
};

export const search = async ({ page, query }: any) => {
  const { data } = await factory.get('/search/movie', {
    params: {
      page,
      query,
    },
  });

  return data;
};
