import { cleanup, render } from '@testing-library/react';
import Logo from '.';
import logoImage from './logo.png';

describe('Logo', () => {
  afterEach(cleanup);

  it('should render cmp without crash', () => {
    render(<Logo />);
  });

  it('should render the image', () => {
    const { container } = render(<Logo />);

    const img = container.querySelector('img');

    expect(img).toBeInTheDocument();
    expect(img?.src).toMatch(logoImage);
  });
});
