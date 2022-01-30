import { CSSObject } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { DebouncedFunc } from 'lodash';

export type TOnQuery = (query: string) => void;

export type THandleOnChangeFn = ({
  target,
}: ChangeEvent<HTMLInputElement>) => void;

export type TSearchBarProps = {
  handleOnChangeDebounced: DebouncedFunc<TOnQuery>;
  inputStyle: CSSObject;
  onClick: () => void;
};

export type TSearchBarContainerProps = {
  onQuery: TOnQuery;
};
