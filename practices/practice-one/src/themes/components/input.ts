import { ThemeOverride } from '@chakra-ui/react';

export const input: ThemeOverride['components'] = {
  Input: {
    baseStyle: {
      field: {
        color: 'primary',
        fontSize: 'lg',
        _placeholder: {
          color: 'primary',
        },
      },
    },
  },
};
