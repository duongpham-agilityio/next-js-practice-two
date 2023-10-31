// Components
import { VStack } from '@chakra-ui/react';
import { memo } from 'react';

// Components
import ActionBar from '@pages/Home/components/ActionBar';
import PageInformation from '@components/PageInfomation';
import Table from '@components/Table';

// Service
import { getAllCard } from '@services/card';

const Home = async () => {
  const card = await getAllCard();

  return (
    <VStack as="section" gap={5}>
      <PageInformation />
      <ActionBar />
      <Table data={card} />
    </VStack>
  );
};

export default memo(Home);
