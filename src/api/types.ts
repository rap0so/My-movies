import { QueryFunctionContext, MutateFunction } from 'react-query';

export type TTMDBResponse = {
  page: number;
  results: TTMDBMovie[];
};

export type TTMDBMovie = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
};

export type TMovieMethod = (
  context: QueryFunctionContext,
) => Promise<TTMDBResponse>;

export type TGetMoviesByCategoryFn = (category: string) => TMovieMethod;

type TSearchMoviesProps = {
  page: number;
  query: string;
};
export type TSearchMoviesFn = ({
  page,
  query,
}: TSearchMoviesProps) => Promise<TTMDBResponse>;

export type TSearchFn = MutateFunction;
