import { act, cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import mockApiReturn from '__mocks__/themoviedb-upcoming.json';
import { search } from 'api';

import NavBarContainer from '.';

import '__mocks__/intersectionObserverMock';

jest.useFakeTimers();

jest.mock('api', () => ({
  __esModule: true,
  default: 'mockedDefaultExport',
  search: jest.fn().mockImplementationOnce(() => mockApiReturn),
}));

describe('NavBarContainer', () => {
  let queryClient: any;

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  beforeEach(() => {
    queryClient = new QueryClient();
  });

  it('should invoke "search module" when type on input', async () => {
    const { getByRole, getAllByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NavBarContainer />
        </BrowserRouter>
      </QueryClientProvider>,
    );

    const input = getByRole('textbox');

    userEvent.type(input, 'the amazing movie');

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => expect(search).toHaveBeenCalled());

    const movies = getAllByTestId('card-container');
    expect(movies.length).toBe(20);
  });
});
