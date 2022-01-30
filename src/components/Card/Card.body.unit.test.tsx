import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardBody from './Card.body';

describe('CardBody', () => {
  let fakeFn: any;
  let poster: any;

  afterEach(cleanup);

  beforeEach(() => {
    fakeFn = jest.fn();
    poster = 'an-extraordinary-image.png';
  });

  it('should render cmp without crash', () => {
    render(<CardBody onOpen={fakeFn} poster={poster} />);
  });

  it('should invoke call when clicked', () => {
    const { getByRole } = render(<CardBody onOpen={fakeFn} poster={poster} />);
    const imagePoster = getByRole('img');

    userEvent.click(imagePoster);

    expect(fakeFn).toHaveBeenCalled();
  });

  it('should render image properly', () => {
    const { getByRole } = render(<CardBody onOpen={fakeFn} poster={poster} />);
    const imagePoster = getByRole('img') as HTMLImageElement;

    expect(imagePoster.src).toBeTruthy();
  });
});
