import { ThemeOverride } from '@chakra-ui/react';

// Custom colors
export const colors: ThemeOverride['colors'] = {
  // Hex colors
  primary: '#C9CED6',
  secondary: '#144EE3',
  success: '#1EB036',
  warning: '#B0901E',
  danger: '#B01E1E',
  info: '#ACC3FF',
  light: '#fff',
  dark: '#0B101B',
  dark10: '#181E29',
  gray: '#353C4A',

  // Rgba colors
  successRGBA: 'rgba(30, 176, 54, 0.14)',
  titleRGBA:
    'linear-gradient(90deg, #144EE3 -0.02%, #EB568E 18.86%, #A353AA 64.49%, #144EE3 100.67%)',
  logoRGBA:
    'radial-gradient(12441.24% 97.1% at 5.56% 79.01%, #EB568E 0%, #144EE3 100%)',
};

// Custom fontSize
export const fontSizes: ThemeOverride['fontSizes'] = {
  xs: '9px',
  sm: '14px',
  md: '15px',
  lg: '16px',
  xl: '48px',
  '2xl': '64px',
};

// Custom fontWeights
export const fontWeights: ThemeOverride['fontWeights'] = {
  regular: 300,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

// Custom radii
export const radii: ThemeOverride['radii'] = {
  sm: '10px',
  xl: '48px',
};
