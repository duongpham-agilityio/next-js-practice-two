import { ThemeOverride } from '@chakra-ui/react';

const commonStyle = { border: 'none', bg: 'darkRGBA' };

export const td: ThemeOverride['components'] = {
  Table: {
    baseStyle: {
      td: commonStyle,
      th: commonStyle,
    },
  },
};
