import { cleanup, render, screen } from '@testing-library/react';
import Title from '.';

describe('Title', () => {
  afterEach(cleanup);

  it('should render cmp without crash', () => {
    render(<Title>title</Title>);
  });

  it('should render text when Title receive children', async () => {
    render(<Title>title</Title>);

    const text = await screen.getByText(/title/i);

    expect(text).toBeInTheDocument();
  });
});
