import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import ButtonIcon from 'components/ButtonIcon';
import { TCardControlsProps } from 'components/Card/types';

const CardControls: FC<TCardControlsProps> = ({
  onAddToList,
  onAddToFavorite,
}) => (
  <>
    <Flex
      className="controls"
      alignItems="center"
      justifyContent="center"
      p="6px"
    >
      <Box mr="10px" onClick={onAddToList}>
        <ButtonIcon iconName="plus" options="fa-sm" />
      </Box>

      <Box onClick={onAddToFavorite}>
        <ButtonIcon iconName="star" options="fa-sm" />
      </Box>
    </Flex>
  </>
);

export default CardControls;