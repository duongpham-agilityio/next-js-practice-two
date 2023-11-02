import { Center, Spinner } from '@chakra-ui/react';
import { memo } from 'react';

const Fallback = () => (
  <Center>
    <Spinner />
  </Center>
);

export default memo(Fallback);
