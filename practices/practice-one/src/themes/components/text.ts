import { ThemeOverride } from '@chakra-ui/react';

export const text: ThemeOverride['components'] = {
  Text: {
    baseStyle: {
      color: 'primary',
      fontWeight: 'regular',
    },

    variants: {
      primary: {
        fontSize: 'sm',
        fontWeight: 'regular',
        lineHeight: 0,
      },

      secondary: {
        fontSize: 'lg',
        fontWeight: 'regular',
      },

      titleMd: {
        fontSize: 'md',
        fontWeight: 'bold',
      },
    },
  },
};
