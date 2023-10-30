import { ThemeOverride } from '@chakra-ui/react';

export const text: ThemeOverride['components'] = {
  Text: {
    baseStyle: {
      color: 'primary',
      fontWeight: 'light',
    },

    variants: {
      primary: {
        fontSize: 'sm',
        fontWeight: 'light',
        lineHeight: 0,
      },

      secondary: {
        fontSize: 'lg',
        fontWeight: 'light',
      },

      titleMd: {
        fontSize: 'md',
        fontWeight: 'bold',
      },
    },
  },
};
