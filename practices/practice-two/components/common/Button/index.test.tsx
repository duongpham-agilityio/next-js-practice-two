import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '@/components';

describe('Button Component', () => {
  it('renders with primary variant by default', () => {
    render(<Button>Primary Button</Button>);
    const button = screen.getByRole('button', { name: /Primary Button/i });

    expect(button).toHaveClass('bg-background-300');
    expect(button).toHaveClass('text-white');
  });

  it('renders with outline variant when specified', () => {
    render(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByRole('button', { name: /Outline Button/i });

    expect(button).toHaveClass('bg-transparent');
    expect(button).toHaveClass('text-text-primary');
    expect(button).toHaveClass('border-border-100');
  });

  it('triggers onClick event', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const button = screen.getByRole('button', { name: /Clickable Button/i });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies additional classes correctly', () => {
    render(<Button className="extra-class">Button with extra class</Button>);
    const button = screen.getByRole('button', {
      name: /Button with extra class/i,
    });

    expect(button).toHaveClass('extra-class');
  });
});
