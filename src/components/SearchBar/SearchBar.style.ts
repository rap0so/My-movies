import { CSSObject } from '@chakra-ui/react';
import { CSSProperties } from 'react';

export const inputOpenedStyle: CSSObject = {
  borderWidth: '1px',
  padding: '0 40px 0 20px',
  width: '100%',
};

export const inputClosedStyle: CSSObject = {
  '@media screen and (max-width: 30em)': inputOpenedStyle,
  borderWidth: 0,
  padding: 0,
  width: 0,
};

export const iconStyle: CSSProperties = {
  color: '#fff',
};
