import { TMovieMethod } from 'api/types';
import { TCardControlFn } from 'components/Card/types';

type TMethodsAllowed = TMovieMethod;

export type TSliderMoviesProps = TCardControlFn & {
  title: string;
  method: {
    name: string;
    action: TMethodsAllowed;
  };
};
