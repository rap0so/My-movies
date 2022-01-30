import { cleanup, render, waitFor } from '@testing-library/react';
import SwiperCore, { Navigation } from 'swiper';
import { QueryClient, QueryClientProvider } from 'react-query';

import fakeApiReturn from '__mocks__/themoviedb-upcoming.json';

import SliderMovies from '.';

SwiperCore.use([Navigation]);

describe('SliderMovies', () => {
  let fakeMethod: any;
  let fakeAction: any;
  let queryClient: any;

  afterEach(cleanup);

  beforeEach(() => {
    queryClient = new QueryClient();
    fakeAction = jest.fn().mockImplementationOnce(() => fakeApiReturn);

    fakeMethod = {
      action: fakeAction,
      name: 'method',
    };
  });

  it('should render <Loading/> when getting data', async () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <SliderMovies title="movie 1" method={fakeMethod} />
      </QueryClientProvider>,
    );

    const loadingComponent = getByTestId('bar');

    expect(loadingComponent).toBeInTheDocument();
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

    await waitFor(() => expect(fakeAction).toHaveBeenCalled());

    const movies = getAllByTestId('card-container');

    expect(movies.length).toBe(20);
  });
});
