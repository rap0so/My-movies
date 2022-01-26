import { ChangeEvent, CSSProperties } from 'react';
import { DebouncedFunc } from 'lodash';

type setQuery = (query: string) => void;

export type THandleOnChangeFn = ({
  target,
}: ChangeEvent<HTMLInputElement>) => void;

export type TSearchBarProps = {
  handleOnChangeDebounced: DebouncedFunc<THandleOnChangeFn>;
  inputStyle: CSSProperties;
  onClick: () => void;
};

export type TSearchBarContainerProps = {
  setQuery: setQuery;
};
