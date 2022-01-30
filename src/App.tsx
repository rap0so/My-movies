import { ChakraProvider } from '@chakra-ui/react';
import SwiperCore, { Navigation } from 'swiper';

import { QueryClient, QueryClientProvider } from 'react-query';
import { RouteWrapper } from 'routes';
import theme from 'theme';
import { ToastContainer } from 'react-toastify';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css'; // Navigation module
import 'swiper/components/navigation/navigation.min.css'; // Navigation module
import 'react-toastify/dist/ReactToastify.css';

SwiperCore.use([Navigation]);

const queryClient = new QueryClient();

const App = () => (
  <>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouteWrapper />
      </QueryClientProvider>
    </ChakraProvider>
    <ToastContainer hideProgressBar={false} pauseOnHover={true} />
  </>
);

export default App;
