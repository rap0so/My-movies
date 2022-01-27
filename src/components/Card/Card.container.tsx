import { Box, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';

import CardBody from './Card.body';
import CardModal from './Card.modal';
import CardControls from './Card.controls';

import { TCardContainerProps } from './types';
import { cardStyle } from './card.style';

const CardContainer: FC<TCardContainerProps> = ({
  backdrop,
  poster,
  title,
  description,
  id,
  onAddToList,
  onAddToFavorite,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box sx={cardStyle}>
      <CardBody onOpen={onOpen} poster={poster} />

      <CardControls
        onAddToList={onAddToList}
        onAddToFavorite={onAddToFavorite}
      />

      <CardModal
        title={title}
        description={description}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default CardContainer;
