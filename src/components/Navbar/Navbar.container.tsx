import { FC, useCallback, useReducer, useState } from 'react';
import { useMutation } from 'react-query';
import { search } from 'api';
import Navbar from './Navbar';
import Error from 'components/Error';
import parseDataToGallery from 'components/Navbar/parseDataToGallery';
import { TMovie } from 'types';
import SearchResults from 'components/SearchResults';

const NavbarContainer: FC = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const [movies, setMovies] = useState<TMovie[]>([]);

  const doSearch = () => search({ page, query });

  const { mutate, error, reset } = useMutation(doSearch, {
    onSuccess: (data) => {
      setPage(page + 1);
      const parsedMovies = parseDataToGallery(data);
      setMovies([...movies, ...parsedMovies]);
    },
  });

  const doQuery = useCallback(
    (queryToBeSearched: string) => {
      setQuery(queryToBeSearched);
      mutate();
    },
    [mutate],
  );

  const closeResultsList = () => {
    reset();
    setQuery('');
    setPage(1);
    setMovies([]);
  };

  const hasMovies = !!movies.length;

  return (
    <>
      {error && <Error error={error} />}

      <Navbar onQuery={doQuery} />

      <SearchResults
        query={query}
        movies={movies}
        isOpen={hasMovies}
        onClose={closeResultsList}
        onMore={doQuery}
      />
    </>
  );
};

export default NavbarContainer;
