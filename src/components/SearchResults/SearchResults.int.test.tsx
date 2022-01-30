import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';

import fakeMovies from '__mocks__/movies.json';

import SearchResults from '.';

describe('SearchResults', () => {
  let isOpen: any;
  let onClose: any;

  afterEach(cleanup);

  beforeEach(() => {
    isOpen = true;
    onClose = jest.fn();
  });

  it('should render a list of movies', async () => {
    const { getAllByTestId } = render(
      <SearchResults
        movies={fakeMovies}
        query="spiderman"
        rootRef={createRef()}
        isOpen={isOpen}
        onClose={onClose}
      />,
    );

    const movies = getAllByTestId('card-container');

    expect(movies.length).toBe(20);
  });

  it('should render received query', async () => {
    const { findByText } = render(
      <SearchResults
        movies={fakeMovies}
        query="spiderman"
        rootRef={createRef()}
        isOpen={isOpen}
        onClose={onClose}
      />,
    );

    const title = await findByText('spiderman');

    expect(title).toBeInTheDocument();
  });

  it('should execute close callback when exit', async () => {
    const { findByRole } = render(
      <SearchResults
        movies={fakeMovies}
        query="spiderman"
        rootRef={createRef()}
        isOpen={isOpen}
        onClose={onClose}
      />,
    );

    const closeButton = await findByRole('button', { name: 'Close' });

    userEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
  });
});
