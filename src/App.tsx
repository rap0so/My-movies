import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouteWrapper } from 'routes';
import theme from 'theme';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/css/bundle';
import 'swiper/css/pagination';

SwiperCore.use([Navigation]);

const queryClient = new QueryClient();

const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <RouteWrapper />
    </QueryClientProvider>
  </ChakraProvider>
);

export default App;
