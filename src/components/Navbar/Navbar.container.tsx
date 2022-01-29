import useInfiniteScroll from 'react-infinite-scroll-hook';
import { FC, Ref, useCallback, useState } from 'react';
import { useMutation } from 'react-query';
import { search } from 'api';
import { TMovie } from 'types';

import Error from 'components/Error';
import SearchResults from 'components/SearchResults';

import Navbar from './Navbar';
import parseDataToGallery from './helpers/parseDataToGallery';

const NavbarContainer: FC = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<TMovie[]>([]);

  const doSearch = () => search({ page, query });

  const { mutate, error, reset, isLoading, data } = useMutation(doSearch, {
    onSuccess: (successData) => {
      setPage(page + 1);
      const parsedMovies = parseDataToGallery(successData);
      setMovies([...movies, ...parsedMovies]);
    },
  });

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    disabled: !!error,
    hasNextPage: data?.total_pages! > data?.page!,
    loading: isLoading,
    onLoadMore: mutate,
    rootMargin: '0px 0px 400px 0px',
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

  const typedSentryRef = sentryRef as Ref<HTMLDivElement>;

  return (
    <>
      {error && <Error error={error} />}

      <Navbar onQuery={doQuery} />

      <SearchResults
        ref={typedSentryRef}
        query={query}
        movies={movies}
        isOpen={hasMovies}
        onClose={closeResultsList}
        rootRef={rootRef}
      />
    </>
  );
};

export default NavbarContainer;
