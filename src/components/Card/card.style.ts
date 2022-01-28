import { CSSObject } from '@chakra-ui/react';

export const cardStyle: CSSObject = {
  '.controls': {
    opacity: 0,
  },
  bgPos: 'center',
  bgRepeat: 'no-repeat',
  bgSize: 'cover',
  cursor: 'pointer',
  filter: 'brightness(0.7)',
  maxH: '200px',
  overflow: 'hidden',
  transition: 'all .5s ease',
  w: '200px',

  _hover: {
    '.controls': {
      opacity: 1,
    },
    filter: 'brightness(1)',
    maxH: '340px',
    mb: '-300px',
    pos: 'relative',
    transform: 'scale(1.5) translate(0px, 0)',
    transition: 'all .5s ease',
    zIndex: 1,
  },
};
