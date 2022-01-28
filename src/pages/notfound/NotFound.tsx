import { Center, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = () => (
  <Center h="100vh" flexDir="column">
    <Text fontSize="4xl">Hmmm... Page Not Found</Text>
    <Text fontWeight="semibold" color="white">
      <Link to="/">Go back home</Link>
    </Text>
  </Center>
);

export default NotFound;
