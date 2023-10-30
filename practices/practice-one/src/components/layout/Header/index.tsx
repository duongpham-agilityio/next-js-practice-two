import { Text } from '@chakra-ui/react';
import { memo } from 'react';

const HeaderComponent = (): JSX.Element => (
  <Text
    p="4px 9px"
    fontSize="2xl"
    bg="logoRGBA"
    backgroundClip="text"
    fontWeight="extrabold"
  >
    E-Banking
  </Text>
);

export const Header = memo(HeaderComponent);
