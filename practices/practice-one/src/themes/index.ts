import { extendTheme } from '@chakra-ui/react';

// Base themes
import * as baseThemes from './base';

export const overrideThemes = extendTheme({
  ...baseThemes,
});
