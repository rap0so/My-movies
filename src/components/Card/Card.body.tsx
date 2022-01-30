import { Flex, Image } from '@chakra-ui/react';
import { FC } from 'react';

import { TCardBodyProps } from './types';

export const size = ['160px', '200px'];

const CardBody: FC<TCardBodyProps> = ({ poster, onOpen }) => (
  <>
    <Flex flexDir="column">
      <Image
        fallbackSrc="https://www.colorbook.io/imagecreator.php?width=125&height=200&hex=eee"
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

export default CardBody;
