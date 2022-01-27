import { QueryFunctionContext, MutateFunction } from 'react-query';

type TTMDBResponse = {
  results: [
    {
      backdrop_path: string;
      poster_path: string;
      title: string;
      overview: string;
    },
  ];
};

export type TMovieMethod = (
  context: QueryFunctionContext,
) => Promise<TTMDBResponse>;

export type TGetMoviesByCategoryFn = (category: string) => TMovieMethod;

export type TSearchFn = MutateFunction;
