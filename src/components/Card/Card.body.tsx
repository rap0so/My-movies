import { Flex, Image } from '@chakra-ui/react';
import { FC } from 'react';

import { TCardProps } from './types';

const Card: FC<TCardProps> = ({ poster, onOpen }) => (
  <>
    <Flex flexDir="column">
      <Image
        alignSelf="center"
        h="130px"
        width="130px"
        objectFit="contain"
        src={poster}
        onClick={onOpen}
      />
    </Flex>
  </>
);

export default Card;
