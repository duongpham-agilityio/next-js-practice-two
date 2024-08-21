'use server';

import { cookies } from 'next/headers';

// Constants
import { COOKIE, ThemeType } from '@/constants';

export const getColorMode = (): ThemeType => {
  const clientMode = cookies().get(COOKIE.THEME)?.value ?? ThemeType.LightMode;
  const mode: Record<string, ThemeType> = {
    [ThemeType.DarkMode]: ThemeType.DarkMode,
    [ThemeType.LightMode]: ThemeType.LightMode,
  };

  return mode[clientMode];
};
