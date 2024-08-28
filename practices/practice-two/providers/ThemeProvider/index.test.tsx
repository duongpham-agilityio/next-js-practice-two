import { render } from '@testing-library/react';

// Providers
import { ThemeProvider } from '@/providers';

describe('ThemeProvider', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  test('renders children correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>Test Child</div>
      </ThemeProvider>,
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });
});
