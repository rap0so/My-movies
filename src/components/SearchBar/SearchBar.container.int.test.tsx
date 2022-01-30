import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  it('should invoke onQuery when type on input', async () => {
    const { getByRole } = render(<SearchBarContainer onQuery={onQuery} />);

    const input = getByRole('textbox');

    userEvent.type(input, 'the amazing movie');

    jest.runAllTimers();

    expect(onQuery).toHaveBeenLastCalledWith('the amazing movie');
  });
});
