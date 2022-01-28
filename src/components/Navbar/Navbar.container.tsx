import { FC, useState } from 'react';
import { useMutation } from 'react-query';
import { search } from 'api';
import Navbar from './Navbar';

const NavbarContainer: FC = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const { mutate } = useMutation(() => search({ page, query }));

  const doQuery = (queryToBeSearched: string) => {
    setQuery(queryToBeSearched);
    setPage(page + 1);
    mutate();
  };

  return <Navbar onQuery={doQuery} />;
};

export default NavbarContainer;
