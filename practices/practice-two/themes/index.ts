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
  colorPalette,
} from './color';

export const themes: ConfigThemes = {
  light: {
    colors: {
      ...colorPalette,
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
      ...colorPalette,
      ...primaryDarkColors,
      ...secondaryDarkColors,
      ...textPrimaryDarkColors,
      ...backgroundDarkMode,
      ...borderDarkColors,
      foreground: secondaryLightColors.secondary.foreground,
    },
  },
};
