import { FC } from 'react';
import Logo from 'components/Logo';

import { TNavbarProps } from './types';
import { Flex } from '@chakra-ui/react';
import SearchBar from 'components/SearchBar';

const Navbar: FC<TNavbarProps> = ({ onQuery }) => {
  return (
    <Flex justifyContent="space-between" px="4%" py="20px">
      <Logo />
      <SearchBar onQuery={onQuery} />
    </Flex>
  );
};

export default Navbar;
