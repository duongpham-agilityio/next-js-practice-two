import { render, screen } from '@testing-library/react';

// Components
import { Input } from '@/components';

describe('Input Component', () => {
  it('renders with default styles', () => {
    render(<Input placeholder="Default Input" />);
    const input = screen.getByPlaceholderText('Default Input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('border');
    expect(input).toHaveClass('border-px');
    expect(input).toHaveClass('border-border-100');
    expect(input).toHaveClass('rounded-xl');
    expect(input).toHaveClass('text-text-primary');
    expect(input).toHaveClass('p-3');
  });

  it('applies isInvalid class when isInvalid is true', () => {
    render(<Input isInvalid placeholder="Invalid Input" />);
    const input = screen.getByPlaceholderText('Invalid Input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('border-red-500');
  });

  it('does not apply isInvalid class when isInvalid is false', () => {
    render(<Input placeholder="Valid Input" />);
    const input = screen.getByPlaceholderText('Valid Input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('border-border-100');
  });

  it('applies additional classes correctly', () => {
    render(
      <Input className="extra-class" placeholder="Input with extra class" />,
    );
    const input = screen.getByPlaceholderText('Input with extra class');

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('extra-class');
  });

  it('renders with all provided attributes', () => {
    render(
      <Input disabled id="password" placeholder="Password" type="password" />,
    );
    const input = screen.getByPlaceholderText('Password');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
    expect(input).toHaveAttribute('id', 'password');
    expect(input).toBeDisabled();
  });
});
