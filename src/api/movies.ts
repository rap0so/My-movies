import { TGetMoviesByCategoryFn } from 'api/types';
import factory from './factory';

export const getMoviesByCategory: TGetMoviesByCategoryFn =
  (category) =>
  async ({ pageParam: page }) => {
    const { data } = await factory.get(`/movie/${category}`, {
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
