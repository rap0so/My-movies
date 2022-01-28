import { forwardRef } from 'react';
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
  ModalHeader,
  Text,
  Box,
} from '@chakra-ui/react';

import Gallery from 'components/Gallery';

import { TSearchResultsProps } from './types';

const SearchResults = forwardRef<HTMLDivElement, TSearchResultsProps>(
  ({ movies, query, isOpen, onClose, rootRef }, ref) => (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered={true}
      trapFocus={false}
      scrollBehavior="inside"
      size="full"
    >
      <ModalContent backgroundColor="#000" ref={rootRef}>
        <ModalHeader px="20">
          <Text textTransform="uppercase">{query}</Text>
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody py="15px">
          <Flex flexWrap="wrap" px="20" pb="28" justifyContent="space-between">
            <Gallery movies={movies} />
            <Box ref={ref} />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  ),
);

export default SearchResults;
