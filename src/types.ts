import { UseDisclosureReturn } from '@chakra-ui/react';

export type TMovie = {
  poster: string;
  title: string;
  description: string;
  id: number;
};

export type TModalProps = {
  isOpen: UseDisclosureReturn['isOpen'];
  onClose: UseDisclosureReturn['onClose'];
};
