import { ThemeOverride } from '@chakra-ui/react';

export const container: ThemeOverride['components'] = {
  Container: {
    baseStyle: {
      maxWidth: {
        xl: '1140px',
        '2xl': '1421px',
      },
      margin: '0 auto',
    },
  },
};
