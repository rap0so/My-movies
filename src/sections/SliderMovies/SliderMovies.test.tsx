import { cleanup, render, waitFor } from '@testing-library/react';
import SwiperCore, { Navigation } from 'swiper';
import { QueryClient, QueryClientProvider } from 'react-query';

import fakeApiReturn from '__mocks__/themoviedb-upcoming.json';

import SliderMovies from '.';

const queryClient = new QueryClient();

SwiperCore.use([Navigation]);

describe('SliderMovies', () => {
  let fakeMethod: any;
  const fakeAction = jest.fn().mockImplementation(() => fakeApiReturn);

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  beforeEach(() => {
    fakeMethod = {
      action: fakeAction,
      name: 'method',
    };
  });

  it('should render cmp without crash', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SliderMovies title="movie 1" method={fakeMethod} />
      </QueryClientProvider>,
    );
  });

  it('should render received title', async () => {
    const { findByText } = render(
      <QueryClientProvider client={queryClient}>
        <SliderMovies title="movie 1" method={fakeMethod} />
      </QueryClientProvider>,
    );

    const title = await findByText('movie 1');

    expect(title).toBeInTheDocument();
  });

  it('should render movies', async () => {
    const { getAllByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <SliderMovies title="movie 1" method={fakeMethod} />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      const movies = getAllByTestId('card-container');

      expect(movies.length).toBe(20);
      expect(fakeAction).toHaveBeenCalled();
    });
  });
});
