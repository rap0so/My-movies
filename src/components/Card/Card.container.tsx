import { Flex, Image, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';

import Card from './Card';
import CardModal from './Card.modal';
import CardControls from './Card.controls';
import { cardStyle } from './card.style';

import { TCardContainerProps } from './types';

const CardContainer: FC<TCardContainerProps> = ({
  backdrop,
  poster,
  title,
  description,
  id,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card onOpen={onOpen} poster={poster} />

      <CardControls />

      <CardModal
        title={title}
        description={description}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default CardContainer;
