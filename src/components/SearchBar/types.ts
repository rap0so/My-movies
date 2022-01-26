import { ChangeEvent, CSSProperties, MutableRefObject } from 'react';
import { DebouncedFunc } from 'lodash';

type setQuery = (query: string) => void;

export type THandleOnChangeFn = ({
  target,
}: ChangeEvent<HTMLInputElement>) => void;

export type TSearchBarProps = {
  ref: MutableRefObject<null>;
  handleOnChangeDebounced: DebouncedFunc<THandleOnChangeFn>;
  inputStyle: CSSProperties;
  onClick: () => void;
};

export type TSearchBarContainerProps = {
  setQuery: setQuery;
};
