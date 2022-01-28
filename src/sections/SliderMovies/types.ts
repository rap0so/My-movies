import { TMovieMethod } from 'api/types';

type TMethodsAllowed = TMovieMethod;

export type TSliderMoviesProps = {
  title: string;
  method: {
    name: string;
    action: TMethodsAllowed;
  };
};
