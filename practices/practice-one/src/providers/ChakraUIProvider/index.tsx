'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode, memo } from 'react';

// Themes
import { overrideThemes } from '@themes/index';

const ChakraComponent = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={overrideThemes}>{children}</ChakraProvider>
);

export const ChakraUIProvider = memo(ChakraComponent);
