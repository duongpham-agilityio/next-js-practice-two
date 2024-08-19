import { ConfigThemes } from '@nextui-org/react';

// Themes
import {
  foreground,
  primaryDarkColors,
  primaryLightColors,
  secondaryDarkColors,
  secondaryLightColors,
} from './color';

export const themes: ConfigThemes = {
  light: {
    colors: {
      ...primaryLightColors,
      ...secondaryLightColors,
      foreground,
    },
  },
  dark: {
    colors: {
      ...primaryDarkColors,
      ...secondaryDarkColors,
      foreground: secondaryLightColors.secondary.foreground,
    },
  },
};
