import { Box, Flex, Input } from '@chakra-ui/react';
import { THandleOnChangeFn, TSearchBarProps } from 'components/SearchBar/types';
import { FC } from 'react';

import { iconStyle } from './SearchBar.style';

const SearchBar: FC<TSearchBarProps> = ({
  handleOnChangeDebounced,
  inputStyle,
  onClick,
}) => {
  const onChange: THandleOnChangeFn = (event) =>
    handleOnChangeDebounced(event?.target.value);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      data-testid="searchbar"
    >
      <Input style={inputStyle} onChange={onChange} />
      <Box
        ml="3"
        onClick={onClick}
        cursor="pointer"
        data-testid="search-wrapper"
      >
        <i className="fas fa-search fa-lg" style={iconStyle} />
      </Box>
    </Flex>
  );
};

export default SearchBar;
