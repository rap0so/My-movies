import { Box, Flex, Input } from '@chakra-ui/react';
import { TSearchBarProps } from 'components/SearchBar/types';
import { FC } from 'react';

import { iconStyle } from './SearchBar.style';

const SearchBar: FC<TSearchBarProps> = ({
  handleOnChangeDebounced,
  inputStyle,
  onClick,
}) => (
  <Flex alignItems="center" justifyContent="space-between">
    <Input style={inputStyle} onChange={handleOnChangeDebounced} />
    <Box ml="3" onClick={onClick} cursor="pointer">
      <i className="fas fa-search fa-lg" style={iconStyle} />
    </Box>
  </Flex>
);

export default SearchBar;
