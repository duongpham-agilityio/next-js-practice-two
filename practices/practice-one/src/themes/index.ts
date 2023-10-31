import { extendTheme } from '@chakra-ui/react';

// Base themes
import * as baseThemes from './base';
import { button, text, container, input, td } from './components';

export const overrideThemes = extendTheme({
  ...baseThemes,
  components: {
    ...button,
    ...text,
    ...container,
    ...input,
    ...td,
  },
});
