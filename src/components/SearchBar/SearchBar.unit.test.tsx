import { cleanup, render, screen } from '@testing-library/react';
import {
  inputClosedStyle,
  inputOpenedStyle,
} from 'components/SearchBar/SearchBar.style';
import userEvent from '@testing-library/user-event';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  let fakeDebouncedFn: any;
  let fakeFn: any;

  afterEach(cleanup);

  beforeEach(() => {
    fakeDebouncedFn = jest.fn();
    fakeFn = jest.fn();
  });

  it('should render cmp without crash', () => {
    render(
      <SearchBar
        handleOnChangeDebounced={fakeDebouncedFn}
        inputStyle={inputClosedStyle}
        onClick={fakeFn}
      />,
    );
  });

  it('should invoke callback when click icon', () => {
    const { getByTestId } = render(
      <SearchBar
        handleOnChangeDebounced={fakeDebouncedFn}
        inputStyle={inputClosedStyle}
        onClick={fakeFn}
      />,
    );

    const icon = getByTestId('search-wrapper');
    userEvent.click(icon);

    expect(fakeFn).toHaveBeenCalledTimes(1);
  });

  it('should invoke callback when type', () => {
    const { container: hiddenBox } = render(
      <SearchBar
        handleOnChangeDebounced={fakeDebouncedFn}
        inputStyle={inputClosedStyle}
        onClick={fakeFn}
      />,
    );

    userEvent.hover(hiddenBox);

    const input = screen.getByRole('textbox');
    const query = 'spiderman';

    userEvent.type(input, query);

    expect(fakeDebouncedFn).toHaveBeenLastCalledWith('spiderman');
  });

  it('should render styles when receive it', () => {
    const inputStyle = {
      width: '250px',
    };

    render(
      <SearchBar
        handleOnChangeDebounced={fakeDebouncedFn}
        inputStyle={inputStyle}
        onClick={fakeFn}
      />,
    );

    const input = screen.getByRole('textbox');
    const styles = window.getComputedStyle(input);

    expect(styles.getPropertyValue('width')).toBe('250px');
  });
});
