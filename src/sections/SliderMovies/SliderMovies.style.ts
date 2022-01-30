import { CSSObject } from '@chakra-ui/react';

const sliderMoviesStyle: CSSObject = {
  '.swiper-container-initialized': {
    marginBottom: '-60px',
    padding: '70px 0 100px',
    transform: 'translate(0, -60px)',

    _hover: {
      '.swiper-button-next:not(.swiper-button-disabled), .swiper-button-prev:not(.swiper-button-disabled)':
        {
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
    top: '90px',
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
