const foregroundColor = '#ffffff';
const defaultForegroundDark = foregroundColor;

const colorPalette = {
  white: '#ffffff',
  black: '#000000',
  red: {
    light: '#ff6b6b',
    medium: '#e63946',
    dark: '#bc1902',
    primary: '#e64537',
  },
  gray: {
    light: '#f9f9f9',
    mediumLight: '#e0e0e0',
    mediumDark: '#4a4a4a',
    dark: '#2b2b2b',
    darker: '#1f1f1f',
    darkest: '#000000',
  },
  secondaryLight: '#faeeee',
  secondaryDark: '#dadce0',
};

export const textPrimaryDarkColors = {
  text: {
    primary: colorPalette.white,
    100: colorPalette.white,
    200: colorPalette.white,
    300: colorPalette.red.primary,
  },
};
export const textPrimaryLightColors = {
  text: {
    primary: colorPalette.black,
    100: colorPalette.red.primary,
    200: colorPalette.white,
    300: colorPalette.white,
  },
};

export const backgroundDarkMode = {
  background: {
    100: colorPalette.secondaryLight,
    200: colorPalette.red.dark,
    300: colorPalette.red.primary,
    400: colorPalette.gray.darker,
  },
};

export const backgroundLightMode = {
  background: {
    100: colorPalette.red.primary,
    200: colorPalette.red.medium,
    300: colorPalette.red.light,
    400: colorPalette.gray.light,
  },
};

export const borderDarkColors = {
  border: {
    100: colorPalette.white,
    200: colorPalette.red.primary,
  },
};

export const borderLightColors = {
  border: {
    100: colorPalette.black,
    200: colorPalette.red.primary,
  },
};

const primaryDarkColors = {
  primary: {
    400: colorPalette.red.primary,
    500: colorPalette.red.dark,
    DEFAULT: colorPalette.red.primary,
    foreground: defaultForegroundDark,
  },
};

const secondaryDarkColors = {
  secondary: {
    100: colorPalette.secondaryLight,
    300: colorPalette.secondaryDark,
    500: '#2b2d33',
    900: colorPalette.black,
    DEFAULT: colorPalette.gray.darker,
    foreground: defaultForegroundDark,
  },
};

const primaryLightColors = {
  primary: {
    400: colorPalette.red.light,
    500: colorPalette.red.medium,
    DEFAULT: colorPalette.red.light,
    foreground: defaultForegroundDark,
  },
};

const secondaryLightColors = {
  secondary: {
    100: colorPalette.gray.light,
    300: colorPalette.gray.mediumLight,
    500: colorPalette.gray.mediumDark,
    900: colorPalette.gray.dark,
    DEFAULT: '#333333',
    foreground: colorPalette.black,
  },
};

export {
  foregroundColor as foreground,
  primaryDarkColors,
  secondaryDarkColors,
  primaryLightColors,
  secondaryLightColors,
};
