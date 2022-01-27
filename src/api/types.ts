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

export type TGetUpcomingFn = (
  context: QueryFunctionContext,
) => Promise<TTMDBResponse>;

export type TSearchFn = MutateFunction;
