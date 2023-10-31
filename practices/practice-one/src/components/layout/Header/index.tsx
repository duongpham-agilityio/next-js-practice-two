import { Heading } from '@chakra-ui/react';
import { memo } from 'react';

const HeaderComponent = (): JSX.Element => (
  <Heading
    as="h1"
    p="4px 9px"
    fontSize="2xl"
    bg="logoRGBA"
    backgroundClip="text"
    fontWeight="extrabold"
  >
    E-Banking
  </Heading>
);

export const Header = memo(HeaderComponent);
