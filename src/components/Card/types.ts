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

export type TCardContainerProps = TCardControlFn & {
  backdrop: string | null;
  poster: string;
  title: string;
  description: string;
  id: number;
};

type TCardControlBase = (arg?: any) => void;

export type TCardControlFn = {
  onAddToList: TCardControlBase;
  onAddToFavorite: TCardControlBase;
};

export type TCardControlsPreFn = {
  onAddToList: (id: number) => TCardControlBase;
  onAddToFavorite: (id: number) => TCardControlBase;
};

export type TCardControlsProps = TCardControlFn & {};
