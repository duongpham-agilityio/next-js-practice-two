import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { Switcher } from '@/components';
// Hooks
import { useColorMode } from '@/hooks';

jest.mock('@/hooks', () => ({
  useColorMode: jest.fn(),
}));

describe('Switcher Component', () => {
  const mockHandleToggleTheme = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with the correct initial state', () => {
    // Set up the hook mock to return initial state
    (useColorMode as jest.Mock).mockReturnValue({
      isDarkMode: false,
      handleToggleTheme: mockHandleToggleTheme,
    });

    render(<Switcher />);

    // Check if the Switch component is rendered
    const switchElement = screen.getByRole('switch');

    expect(switchElement).toBeInTheDocument();

    // Verify the switch state
    expect(switchElement).not.toBeChecked();
  });

  it('calls handleToggleTheme on switch toggle', () => {
    // Set up the hook mock to return initial state
    (useColorMode as jest.Mock).mockReturnValue({
      isDarkMode: false,
      handleToggleTheme: mockHandleToggleTheme,
    });

    render(<Switcher />);

    // Toggle the switch
    const switchElement = screen.getByRole('switch');

    fireEvent.click(switchElement);

    // Verify that handleToggleTheme is called
    expect(mockHandleToggleTheme).toHaveBeenCalled();
  });

  it('renders with the switch in the checked state if isDarkMode is true', () => {
    // Set up the hook mock to return dark mode state
    (useColorMode as jest.Mock).mockReturnValue({
      isDarkMode: true,
      handleToggleTheme: mockHandleToggleTheme,
    });

    render(<Switcher />);

    // Check if the Switch component is rendered
    const switchElement = screen.getByRole('switch');

    expect(switchElement).toBeInTheDocument();

    // Verify the switch state
    expect(switchElement).toBeChecked();
  });
});
