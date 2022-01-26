import { UseDisclosureReturn } from '@chakra-ui/react';

export type TCardProps = {
  poster: string;
  onOpen: UseDisclosureReturn['onOpen'];
};

export type TCardModalProps = {
  isOpen: UseDisclosureReturn['isOpen'];
  onClose: UseDisclosureReturn['onClose'];
  title: string;
  description: string;
};

export type TCardContainerProps = {
  backdrop: string | null;
  poster: string;
  title: string;
  description: string;
  id: number;
};

export type TCardControls = {
  onAddToList: () => void;
  onAddToFavorite: () => void;
};
