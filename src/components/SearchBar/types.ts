import { ChangeEvent, CSSProperties } from 'react';
import { DebouncedFunc } from 'lodash';

export type TOnQuery = (query: string) => void;

export type THandleOnChangeFn = ({
  target,
}: ChangeEvent<HTMLInputElement>) => void;

export type TSearchBarProps = {
  handleOnChangeDebounced: DebouncedFunc<TOnQuery>;
  inputStyle: CSSProperties;
  onClick: () => void;
};

export type TSearchBarContainerProps = {
  onQuery: TOnQuery;
};
