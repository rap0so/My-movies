import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useOutsideClick,
  Text,
} from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { TCardModalProps } from './types';

const CardModal: FC<TCardModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
}) => {
  const ref = useRef(null);

  useOutsideClick({
    ref,
    handler: onClose,
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{description}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardModal;
