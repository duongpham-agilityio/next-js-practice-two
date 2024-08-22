'use client';

import { Switch } from '@nextui-org/switch';

// Hooks
import { useColorMode } from '@/hooks';

const Switcher = () => {
  const { isDarkMode, handleToggleTheme } = useColorMode();

  return (
    <Switch isSelected={isDarkMode} onValueChange={() => handleToggleTheme()} />
  );
};

export default Switcher;
