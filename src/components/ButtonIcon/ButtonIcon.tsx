import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { TButtonIconProps } from './types';

const ButtonIcon: FC<TButtonIconProps> = ({ iconName, isActive, options }) => {
  const bgColor = isActive ? '#fff' : '#000';

  return (
    <Button
      bgColor={bgColor}
      border="1px solid #fff"
      borderRadius="full"
      fontSize="10px"
      h="25px"
      minWidth="0"
      p="0"
      w="25px"
      data-testid="button-icon"
    >
      <i className={`fas fa-${iconName} ${options}`} />
    </Button>
  );
};

export default ButtonIcon;
