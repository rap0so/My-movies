import { TMovie } from 'types';

export type TLocalStorageGetter = (id: TMovie['id']) => TMovie | undefined;

export type TLocalStorageSetter = (movie: TMovie) => null;

export type TMovieStorage = {
  [key in string]: TMovie;
};
