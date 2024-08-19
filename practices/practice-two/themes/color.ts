const foregroundColor = '#ffffff';
const defaultForegroundDark = foregroundColor;

export const textPrimaryDarkColors = {
  text: {
    primary: '#ffffff',
    100: '#ffffff',
    200: '#000000',
    300: '#e64537',
  },
};
export const textPrimaryLightColors = {
  text: {
    primary: '#000000',
    100: '#e64537',
    200: '#ffffff',
    300: '#ffffff',
  },
};

export const backgroundDarkMode = {
  background: {
    100: '#faeeee',
    200: '#bc1902',
    300: '#e64537',
  },
};

export const backgroundLightMode = {
  background: {
    100: '#e64537',
    200: '#e63946',
    300: '#ff6b6b',
  },
};

export const borderDarkColors = {
  border: {
    100: '#ffffff',
    200: '#e64537',
  },
};

export const borderLightColors = {
  border: {
    100: '#000000',
    200: '#e64537',
  },
};

const primaryDarkColors = {
  primary: {
    400: '#e64537',
    500: '#bc1902',
    DEFAULT: '#e64537',
    foreground: defaultForegroundDark,
  },
};

const secondaryDarkColors = {
  secondary: {
    100: '#faeeee',
    300: '#dadce0',
    500: '#2b2d33',
    900: '#000000',
    DEFAULT: '#1f1f1f',
    foreground: defaultForegroundDark,
  },
};

const primaryLightColors = {
  primary: {
    400: '#ff6b6b',
    500: '#e63946',
    DEFAULT: '#ff6b6b',
    foreground: defaultForegroundDark,
  },
};

const secondaryLightColors = {
  secondary: {
    100: '#f9f9f9',
    300: '#e0e0e0',
    500: '#4a4a4a',
    900: '#2b2b2b',
    DEFAULT: '#333333',
    foreground: '#000000',
  },
};

export {
  foregroundColor as foreground,
  primaryDarkColors,
  secondaryDarkColors,
  primaryLightColors,
  secondaryLightColors,
};
