import { cleanup, render } from '@testing-library/react';

import { toast } from 'react-toastify';

import ErrorComponent from '.';

jest.mock('react-toastify', () => ({
  __esModule: true,
  default: 'mockedDefaultExport',
  toast: {
    error: jest.fn(),
  },
}));

describe('Error', () => {
  let error: any;
  afterEach(cleanup);

  beforeEach(() => {
    error = Error('this is an error');
  });

  it('should render cmp without crash', () => {
    render(<ErrorComponent error={error} />);
  });

  it('should invoke a toast showing the error message', () => {
    render(<ErrorComponent error={error} />);

    expect(toast.error).toHaveBeenCalledWith('this is an error');
  });

  it('should render an empty box', () => {
    const { getByTestId } = render(<ErrorComponent error={error} />);
    const box = getByTestId('error');

    expect(box).toBeEmptyDOMElement();
  });
});
