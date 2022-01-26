import { ChakraProvider } from '@chakra-ui/react';

import { RouteWrapper } from 'routes';
import theme from 'theme';

const App = () => (
  <ChakraProvider theme={theme}>
    <RouteWrapper />
  </ChakraProvider>
);

export default App;
