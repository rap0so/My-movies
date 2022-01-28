import { Box, Flex } from '@chakra-ui/react';
import { FC, useReducer } from 'react';

import ButtonIcon from 'components/ButtonIcon';
import {
  getFavorite,
  setFavorite,
  removeFavorite,
  getMyList,
  setMyList,
  removeMyList,
} from 'localStorage';
import { TMovie } from 'types';

const CardControls: FC<TMovie> = ({ ...movie }) => {
  const hasList = !!getMyList(movie.id);
  const hasFavorite = !!getFavorite(movie.id);

  const [isFavorite, setIsFavorite] = useReducer(
    (_: boolean, newState: boolean) => {
      newState ? setFavorite(movie) : removeFavorite(movie.id);
      return newState;
    },
    hasFavorite,
  );

  const [isList, setIsList] = useReducer((_: boolean, newState: boolean) => {
    newState ? setMyList(movie) : removeMyList(movie.id);
    return newState;
  }, hasList);

  const onAddToFavorite = () => setIsFavorite(!isFavorite);
  const onAddToMyList = () => setIsList(!isList);

  return (
    <>
      <Flex
        className="controls"
        alignItems="center"
        justifyContent="center"
        p="6px"
      >
        <Box mr="10px" onClick={onAddToMyList}>
          <ButtonIcon iconName="plus" options="fa-sm" isActive={isList} />
        </Box>

        <Box onClick={onAddToFavorite}>
          <ButtonIcon iconName="star" options="fa-sm" isActive={isFavorite} />
        </Box>
      </Flex>
    </>
  );
};

export default CardControls;
