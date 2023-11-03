import { Center, Spinner } from '@chakra-ui/react';
import { memo } from 'react';

const Fallback = () => (
  <Center h="80vh">
    <Spinner color="white" size="xl" />
  </Center>
);

export default memo(Fallback);
