import {
  TLocalStorageGetter,
  TLocalStorageSetter,
  TMovieStorage,
} from './types';
import store from 'store';
import { TMovie } from 'types';

const KEY_NAME = 'favoriteMovies';

export const getAll = (): TMovieStorage => store.get(KEY_NAME) ?? {};

export const set: TLocalStorageSetter = (movie: TMovie) => {
  const allFavorites = getAll();
  allFavorites[movie.id] = movie;

  return store.set(KEY_NAME, allFavorites);
};

export const remove = (movieId: TMovie['id']) => {
  const allFavorites = getAll();
  delete allFavorites[movieId];

  return store.set(KEY_NAME, allFavorites);
};

export const get: TLocalStorageGetter = (movieId: TMovie['id']) => {
  const allFavorites = getAll();

  return allFavorites[movieId];
};
