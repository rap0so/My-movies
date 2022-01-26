import { extendTheme } from '@chakra-ui/react';
import colors from './colors';

const theme = {
  colors,
  styles: {
    global: {
      '*': { transition: 'all .3s ease!important' },
      'html, body': {
        backgroundColor: '#060606',
        color: 'text',
        lineHeight: 'tall',
      },
    },
  },
};

const extendedTheme = extendTheme(theme);

export default extendedTheme;
