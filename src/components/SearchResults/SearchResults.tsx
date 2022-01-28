import {
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
  ModalHeader,
  Text,
} from '@chakra-ui/react';
import Gallery from 'components/Gallery';
import { FC } from 'react';

import { TSearchResultsProps } from './types';

const SearchResults: FC<TSearchResultsProps> = ({
  movies,
  query,
  isOpen,
  onClose,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    isCentered={true}
    trapFocus={false}
    scrollBehavior="inside"
    size="full"
  >
    <ModalContent backgroundColor="#000">
      <ModalHeader px="20">
        <Text textTransform="uppercase">{query}</Text>
      </ModalHeader>

      <ModalCloseButton />

      <ModalBody py="15px">
        <Flex flexWrap="wrap" px="20" pb="28" justifyContent="space-between">
          <Gallery movies={movies} />
        </Flex>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default SearchResults;
