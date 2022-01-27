import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouteWrapper } from 'routes';
import theme from 'theme';

import 'swiper/css';
import 'swiper/css/pagination';

const queryClient = new QueryClient();

const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <RouteWrapper />
    </QueryClientProvider>
  </ChakraProvider>
);

export default App;
