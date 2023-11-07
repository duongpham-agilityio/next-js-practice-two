import { Center, Text } from '@chakra-ui/react';
import { memo } from 'react';

const Footer = (): JSX.Element => (
  <Center as="footer" py="44px">
    <Text variant="primary" color="secondary">
      ©E-Banking 2023
    </Text>
  </Center>
);

export default memo(Footer);
