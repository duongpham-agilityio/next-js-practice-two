// Components
import { VStack } from '@chakra-ui/react';
import { memo } from 'react';

// Components
import ActionBar from '@pages/Home/components/ActionBar';
import PageInformation from '@components/PageInfomation';
import Table from '@components/Table';

const Home = (): JSX.Element => (
  <VStack as="section" gap={5}>
    <PageInformation />
    <ActionBar />
    <Table />
  </VStack>
);

export default memo(Home);
