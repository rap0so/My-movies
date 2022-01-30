import { cleanup, render } from '@testing-library/react';
import CardContainer from './Card.container';
import movies from '__mocks__/movies.json';
import { TMovie } from 'types';
import userEvent from '@testing-library/user-event';

describe('CardContainer', () => {
  let movie: TMovie;
  afterEach(cleanup);

  beforeEach(() => {
    movie = movies[0];
  });

  it('should render cmp without crash', () => {
    render(<CardContainer {...movie} />);
  });

  it('should render image and buttons', () => {
    const { getByRole, getAllByRole } = render(<CardContainer {...movie} />);

    expect(getByRole('img'));
    expect(getAllByRole('button').length).toBe(2);
  });

  it('should show modal with description when clicked', () => {
    const { getByRole, getByText } = render(<CardContainer {...movie} />);

    const image = getByRole('img');

    userEvent.click(image);

    expect(getByText('Spider-Man: No Way Home'));
    expect(
      getByText(
        'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
      ),
    );
  });
});
