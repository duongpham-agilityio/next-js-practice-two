import { Box, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';

// Constants
import { ROUTES } from '@constants/url';

const HeaderComponent = (): JSX.Element => (
  <Box as="header" p="4px 9px">
    <Heading
      as="h1"
      fontSize="2xl"
      bg="logoRGBA"
      backgroundClip="text"
      fontWeight="extrabold"
    >
      <Link href={`${ROUTES.ROOT}`}>E-Banking</Link>
    </Heading>
  </Box>
);

export const Header = memo(HeaderComponent);
