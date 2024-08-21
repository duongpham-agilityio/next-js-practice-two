import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Constants
import { ThemeType } from '@/constants';

export const useColorMode = () => {
  const { theme = ThemeType.LightMode, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () =>
    setTheme(isDarkMode ? ThemeType.LightMode : ThemeType.DarkMode);

  useEffect(() => {
    setIsDarkMode(theme === ThemeType.DarkMode);
  }, [theme]);

  return {
    theme,
    isDarkMode,
    handleToggleTheme,
  };
};
