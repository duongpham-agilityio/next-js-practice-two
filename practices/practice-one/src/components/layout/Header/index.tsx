import { Box, Heading } from '@chakra-ui/react';
import { memo } from 'react';

const HeaderComponent = (): JSX.Element => (
  <Box as="header" p="4px 9px">
    <Heading
      as="h1"
      fontSize="2xl"
      bg="logoRGBA"
      backgroundClip="text"
      fontWeight="extrabold"
    >
      E-Banking
    </Heading>
  </Box>
);

export const Header = memo(HeaderComponent);
