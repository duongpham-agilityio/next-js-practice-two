import { ThemeOverride } from '@chakra-ui/react';

export const button: ThemeOverride['components'] = {
  Button: {
    baseStyle: {
      color: 'primary',
      borderRadius: 'full',
      fontSize: 'md',
      fontWeight: 'regular',
      _hover: {
        opacity: 0.8,
      },
    },

    variants: {
      primary: {
        w: 183,
        h: '60px',
        fontSize: 'lg',
        bg: 'secondary',
        boxShadow: '10px 9px 22px 0px rgba(20, 78, 227, 0.38)',
        fontWeight: 'semibold',
      },

      action: {
        w: 35,
        h: 35,
      },

      pagination: {
        w: 45,
        h: 45,
        fontSize: 'xs',
        borderRadius: 'full',
        boxShadow: '10px 9px 22px 0px rgba(20, 78, 227, 0.38)',
      },
    },
  },
};
