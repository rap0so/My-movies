import { cleanup, render } from '@testing-library/react';
import ButtonIcon from '.';

describe('ButtonIcon', () => {
  afterEach(cleanup);

  it('should render cmp without crash', () => {
    render(<ButtonIcon iconName="plus" />);
  });

  it('should render iconName on icon', () => {
    const { container } = render(<ButtonIcon iconName="plus" />);

    const icon = container.querySelector('i');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('fa-plus');
  });

  it('should render additional props on icon', () => {
    const { container } = render(
      <ButtonIcon iconName="plus" options="fa-sm" />,
    );

    const icon = container.querySelector('i');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('fa-sm');
  });

  it('should render black button when unactive', () => {
    const { getByTestId } = render(
      <ButtonIcon iconName="plus" isActive={false} />,
    );
    const button = getByTestId('button-icon');

    const styles = window.getComputedStyle(button);

    expect(styles.getPropertyValue('background-color')).toBe('rgb(0, 0, 0)');
  });

  it('should render white button when active', () => {
    const { getByTestId } = render(
      <ButtonIcon iconName="plus" isActive={true} />,
    );
    const button = getByTestId('button-icon');

    const styles = window.getComputedStyle(button);

    expect(styles.getPropertyValue('background-color')).toBe(
      'rgb(255, 255, 255)',
    );
  });
});
