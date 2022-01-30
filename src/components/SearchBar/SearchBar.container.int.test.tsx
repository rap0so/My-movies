import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';

import fakeMovies from '__mocks__/movies.json';

import SearchBarContainer from '.';

jest.useFakeTimers();

describe('SearchBarContainer', () => {
  let onQuery: any;

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  beforeEach(() => {
    onQuery = jest.fn();
  });

  it('should render without crashing', async () => {
    render(<SearchBarContainer onQuery={onQuery} />);
  });

  fit('should invoke onQuery when type on input', async () => {
    const { getByRole } = render(<SearchBarContainer onQuery={onQuery} />);

    const input = getByRole('textbox');

    userEvent.type(input, 'the amazing movie');

    jest.runAllTimers();

    expect(onQuery).toHaveBeenLastCalledWith('the amazing movie');

    // expect(onQuery).toHaveBeenLastCalledWith('the amazing movie');
  });

  xit('should execute close callback when exit', async () => {
    const { findByRole } = render(
      <SearchBarContainer
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
