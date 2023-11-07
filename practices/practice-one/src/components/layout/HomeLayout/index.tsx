import { VStack } from '@chakra-ui/react';
import { ReactNode, memo } from 'react';

// Components
import PageInformation from '@components/PageInfomation';

const HomeLayout = ({ children }: { children: ReactNode }) => (
  <VStack as="section" gap={5}>
    <PageInformation />
    {children}
  </VStack>
);

export default memo(HomeLayout);
