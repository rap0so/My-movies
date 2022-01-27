import { CSSObject } from '@chakra-ui/react';

export const cardStyle: CSSObject = {
  '.controls': {
    opacity: 0,
  },
  bgPos: 'center',
  bgRepeat: 'no-repeat',
  bgSize: 'cover',
  cursor: 'pointer',
  maxH: '130px',
  overflow: 'hidden',
  transition: 'all .5s ease',
  w: '100px',

  _hover: {
    '.controls': {
      opacity: 1,
    },
    bgColor: '#000',
    boxShadow: '0 0 100px 20px #000',
    maxH: '340px',
    pos: 'relative',
    transform: 'scale(1.5)',
    transition: 'all .5s ease',
    zIndex: 1,
  },
};
