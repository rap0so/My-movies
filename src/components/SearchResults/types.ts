import { LegacyRef } from 'react';
import { TModalProps, TMovie } from 'types';

export type TSearchResultsProps = TModalProps & {
  query: string;
  movies: TMovie[];
  rootRef: LegacyRef<HTMLElement>;
};
