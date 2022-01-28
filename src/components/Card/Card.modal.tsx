import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { TCardModalProps } from './types';

const CardModal: FC<TCardModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
}) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered={true} trapFocus={false}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody py="15px">
        <Text>{description}</Text>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default CardModal;
