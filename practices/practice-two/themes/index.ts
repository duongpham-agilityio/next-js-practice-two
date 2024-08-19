import { ConfigThemes } from '@nextui-org/react';

// Themes
import {
  backgroundDarkMode,
  backgroundLightMode,
  borderDarkColors,
  borderLightColors,
  foreground,
  primaryDarkColors,
  primaryLightColors,
  secondaryDarkColors,
  secondaryLightColors,
  textPrimaryDarkColors,
  textPrimaryLightColors,
} from './color';

export const themes: ConfigThemes = {
  light: {
    colors: {
      ...primaryLightColors,
      ...secondaryLightColors,
      ...textPrimaryLightColors,
      ...backgroundLightMode,
      ...borderLightColors,
      foreground,
    },
  },
  dark: {
    colors: {
      ...primaryDarkColors,
      ...secondaryDarkColors,
      ...textPrimaryDarkColors,
      ...backgroundDarkMode,
      ...borderDarkColors,
      foreground: secondaryLightColors.secondary.foreground,
    },
  },
};
