import { ThemeOverride } from '@chakra-ui/react';

export const button: ThemeOverride['components'] = {
  Button: {
    baseStyle: {
      color: 'primary',
      borderRadius: 'full',
      fontSize: 'md',
      fontWeight: 'regular',
    },

    variants: {
      primary: {
        w: 183,
        fontSize: 'md',
        bg: 'secondary',
        p: '21px 25.047px 21px 25px',
        boxShadow: '10px 9px 22px 0px rgba(20, 78, 227, 0.38)',
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
