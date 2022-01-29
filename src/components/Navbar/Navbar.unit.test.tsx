import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './Navbar';

describe('NavBar', () => {
  let fakeFn: any;

  afterEach(cleanup);

  beforeEach(() => {
    fakeFn = jest.fn();
  });

  it('should render cmp without crash', () => {
    render(
      <BrowserRouter>
        <NavBar onQuery={fakeFn} />
      </BrowserRouter>,
    );
  });

  it('should render links', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <NavBar onQuery={fakeFn} />
      </BrowserRouter>,
    );

    const links = getAllByRole('link') as HTMLAnchorElement[];

    expect(links.length).toBe(2);
    expect(links[0].href.endsWith('/')).toBeTruthy();
    expect(links[1].href.endsWith('/my-list')).toBeTruthy();
  });

  it('should render <SearchBar />', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <NavBar onQuery={fakeFn} />
      </BrowserRouter>,
    );

    const SearchBar = getByTestId('searchbar-container');

    expect(SearchBar).toBeInTheDocument();
  });
});
