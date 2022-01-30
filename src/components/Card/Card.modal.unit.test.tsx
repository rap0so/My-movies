import { cleanup, render } from '@testing-library/react';

import CardModal from './Card.modal';

describe('CardModal', () => {
  let onClose: any;
  let isOpen: boolean;
  let title: string;
  let description: string;

  afterEach(cleanup);

  beforeEach(() => {
    isOpen = true;
    onClose = jest.fn();
    title = 'my title';
    description = 'my description';
  });

  it('should render cmp without crash', () => {
    render(
      <CardModal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        description={description}
      />,
    );
  });

  it('should render received title and description', () => {
    const { getByText } = render(
      <CardModal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        description={description}
      />,
    );

    expect(getByText('my title'));
    expect(getByText('my description'));
  });
});
