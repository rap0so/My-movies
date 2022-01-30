import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import Logo from 'components/Logo';
import SearchBar from 'components/SearchBar';

import { TNavbarProps } from './types';

const Navbar: FC<TNavbarProps> = ({ onQuery }) => (
  <Flex
    justifyContent="space-between"
    px={['10', '20']}
    py="20px"
    flexDir={['column', 'row']}
  >
    <Flex mb={['20px', '0']} justifyContent="space-between">
      <Link to="/">
        <Logo />
      </Link>

      <Flex flexDir="row" alignItems="center" ml="45px">
        <Link to="/my-list">My List</Link>
      </Flex>
    </Flex>

    <SearchBar onQuery={onQuery} />
  </Flex>
);

export default Navbar;
