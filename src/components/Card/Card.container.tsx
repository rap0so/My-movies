import { Box, useDisclosure } from '@chakra-ui/react';

import CardBody from './Card.body';
import CardModal from './Card.modal';
import CardControls from './Card.controls';

import { cardStyle } from './card.style';
import { TMovie } from 'types';

const CardContainer = (movie: TMovie) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { poster, title, description } = movie;

  return (
    <Box sx={cardStyle}>
      <CardBody onOpen={onOpen} poster={poster} />

      <CardControls {...movie} />

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
