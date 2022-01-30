import { CSSObject } from '@chakra-ui/react';
import { size } from './Card.body';

export const cardStyle: CSSObject = {
  '@media screen and (min-width: 30em)': {
    '.controls': {
      opacity: 0,
    },
  },
  bgColor: '#000',
  cursor: 'pointer',
  filter: 'brightness(0.7)',
  maxH: size,
  overflow: 'hidden',
  pos: 'relative',
  w: size,

  _hover: {
    '@media screen and (min-width: 30em)': {
      '.controls': {
        opacity: 1,
      },
      filter: 'brightness(1)',
      maxH: '340px',
      mb: '-300px',
      pb: '5px',
      transform: 'scale(1.1)',
      zIndex: 1,
    },
  },

  '@media screen and (max-width: 30em)': {
    overflow: 'visible',
  },
};
