import { BarLoader } from 'react-spinners';

import { TLoadingProps } from './types';
import { Flex } from '@chakra-ui/react';

const Loading = ({ full, color = '#fff' }: TLoadingProps) =>
  full ? (
    <Flex
      alignItems="center"
      data-testid="full"
      justifyContent="center"
      height="100%"
      inset="0"
      position="fixed"
    >
      <BarLoader color="#fff" />
    </Flex>
  ) : (
    <Flex data-testid="bar">
      <BarLoader color={color} />
    </Flex>
  );

export default Loading;
