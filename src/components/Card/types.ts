import { UseDisclosureReturn } from '@chakra-ui/react';
import { TModalProps } from 'types';

export type TCardBodyProps = {
  poster: string;
  onOpen: UseDisclosureReturn['onOpen'];
};

export type TCardModalProps = TModalProps & {
  title: string;
  description: string;
};

export type TCardControlBase = (arg?: any) => void;
