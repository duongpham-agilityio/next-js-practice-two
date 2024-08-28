import { renderHook, act } from '@testing-library/react';
import { useTheme } from 'next-themes';

// Hooks
import { useColorMode } from '@/hooks';
// Constants
import { ThemeType } from '@/constants';

jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('useColorMode', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize with the correct theme', () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: ThemeType.LightMode,
      setTheme: jest.fn(),
    });

    const { result } = renderHook(() => useColorMode());

    expect(result.current.theme).toBe(ThemeType.LightMode);
    expect(result.current.isDarkMode).toBe(false);
  });

  test('should update isDarkMode based on theme', () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: ThemeType.DarkMode,
      setTheme: jest.fn(),
    });

    const { result, rerender } = renderHook(() => useColorMode());

    expect(result.current.isDarkMode).toBe(true);

    (useTheme as jest.Mock).mockReturnValue({
      theme: ThemeType.LightMode,
      setTheme: jest.fn(),
    });

    rerender();

    expect(result.current.isDarkMode).toBe(false);
  });
});
