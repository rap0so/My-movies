import { Flex, Image } from '@chakra-ui/react';
import { FC } from 'react';

import { TCardProps } from './types';

const size = '200px';

const Card: FC<TCardProps> = ({ poster, onOpen }) => (
  <>
    <Flex flexDir="column">
      <Image
        alignSelf="center"
        h={size}
        width={size}
        objectFit="contain"
        src={poster}
        onClick={onOpen}
      />
    </Flex>
  </>
);

export default Card;
