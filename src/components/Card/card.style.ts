import { CSSObject } from '@chakra-ui/react';

export const cardStyle: CSSObject = {
  '.controls': {
    opacity: 0,
  },
  bgColor: '#000',
  cursor: 'pointer',
  filter: 'brightness(0.7)',
  maxH: '200px',
  overflow: 'hidden',
  pos: 'relative',
  w: '200px',

  _hover: {
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
};
