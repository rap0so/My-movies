import { TGetUpcomingFn } from 'api/types';
import { TCardControlFn } from 'components/Card/types';

type TMethodsAllowed = TGetUpcomingFn;

export type TSliderMoviesProps = TCardControlFn & {
  title: string;
  method: {
    name: string;
    action: TMethodsAllowed;
  };
};
