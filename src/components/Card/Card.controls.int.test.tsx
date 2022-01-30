import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import movies from '__mocks__/movies.json';
import { TMovie } from 'types';
import {
  getFavorite,
  setFavorite,
  removeFavorite,
  getMyList,
  setMyList,
  removeMyList,
} from 'localStorage';

import CardControls from './Card.controls';

jest.mock('localStorage/favorite', () => ({
  __esModule: true,
  default: 'mockedDefaultExport',
  get: jest.fn(),
  remove: jest.fn(),
  set: jest.fn(),
}));

jest.mock('localStorage/list', () => ({
  __esModule: true,
  default: 'mockedDefaultExport',
  get: jest.fn(),
  remove: jest.fn(),
  set: jest.fn(),
}));

describe('CardControls', () => {
  let movie: TMovie;
  afterEach(cleanup);

  beforeEach(() => {
    movie = movies[0];
  });

  it('should render cmp without crash', () => {
    render(<CardControls {...movie} />);
  });

  it('should check storage when start', () => {
    render(<CardControls {...movie} />);

    expect(getFavorite).toHaveBeenCalled();
    expect(getMyList).toHaveBeenCalled();
  });

  it('should call proper callback when click buttons', () => {
    const { getAllByRole } = render(<CardControls {...movie} />);

    const [listButton, favoriteButton] = getAllByRole('button');

    userEvent.click(listButton);
    userEvent.click(favoriteButton);

    expect(setFavorite).toHaveBeenCalled();
    expect(setMyList).toHaveBeenCalled();

    userEvent.click(listButton);
    userEvent.click(favoriteButton);

    expect(removeFavorite).toHaveBeenCalled();
    expect(removeMyList).toHaveBeenCalled();
  });

  it('should change background when clicked', () => {
    const { getAllByRole } = render(<CardControls {...movie} />);

    const [, favoriteButton] = getAllByRole('button');

    const styles = window.getComputedStyle(favoriteButton);

    expect(styles.backgroundColor).toBe('rgb(0, 0, 0)');

    userEvent.click(favoriteButton);

    waitFor(() => expect(styles.backgroundColor).toBe('rgb(255, 255, 255)'));
  });
});
