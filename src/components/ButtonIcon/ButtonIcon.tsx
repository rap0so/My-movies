import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { TButtonIconProps } from './types';

const ButtonIcon: FC<TButtonIconProps> = ({ iconName, options }) => (
  <Button
    bgColor="transparent"
    border="1px solid #fff"
    borderRadius="full"
    fontSize="10px"
    h="25px"
    minWidth="0"
    p="0"
    w="25px"
  >
    <i className={`fas fa-${iconName} ${options}`} />
  </Button>
);

export default ButtonIcon;
