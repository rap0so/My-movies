import { Flex, Image, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';

import { cardStyle } from './card.style';
import { TCardProps } from './types';

const Card: FC<TCardProps> = ({ poster, onOpen }) => (
  <>
    <Flex sx={cardStyle} flexDir="column">
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
