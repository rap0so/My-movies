import { cleanup, render } from '@testing-library/react';

import fakeMovies from '__mocks__/movies.json';

import Gallery from '.';

describe('Gallery', () => {
  afterEach(cleanup);

  it('should render a list of movies', async () => {
    const { getAllByTestId } = render(<Gallery movies={fakeMovies} />);

    const movies = getAllByTestId('card-container');

    expect(movies.length).toBe(20);
  });

  it('should NOT render when there is no movies', async () => {
    const { queryAllByTestId } = render(<Gallery movies={[]} />);

    expect(queryAllByTestId('card-container')).toEqual([]);
  });
});
