import { CSSObject } from '@chakra-ui/react';

const sliderMoviesStyle: CSSObject = {
  '.swiper': {
    padding: '100px 0',

    _hover: {
      '.swiper-button-next, .swiper-button-prev': {
        opacity: 1,
      },
    },
  },

  '.swiper-wrapper': {
    maxH: '200px',
  },

  '.swiper-button-next, .swiper-button-prev': {
    color: 'white',
    fontWeight: 'bold',
    height: '200px',
    opacity: 0,
    top: '122px',
    width: '50px',
  },

  '.swiper-button-next': {
    right: '3px',
  },
  '.swiper-button-prev': {
    left: '3px',
  },
};

export default sliderMoviesStyle;
