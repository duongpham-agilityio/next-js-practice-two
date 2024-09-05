'use client';

import { Switch } from '@nextui-org/react';

// Hooks
import { useColorMode } from '@/hooks';

const Switcher = () => {
  const { isDarkMode, handleToggleTheme } = useColorMode();

  return (
    <Switch
      aria-label="Switch color mode"
      isSelected={isDarkMode}
      onValueChange={() => handleToggleTheme()}
    />
  );
};

export default Switcher;
