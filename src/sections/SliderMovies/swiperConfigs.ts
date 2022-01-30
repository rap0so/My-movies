import { SwiperOptions } from 'swiper';

const swiperConfigs: SwiperOptions = {
  breakpoints: {
    1600: {
      slidesPerView: 7,
    },
    1366: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 5.2,
    },
    900: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2.2,
    },
  },
  navigation: true,
  slidesPerView: 1.7,
};

export default swiperConfigs;
