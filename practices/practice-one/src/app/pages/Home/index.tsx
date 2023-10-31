import { VStack } from '@chakra-ui/react';
import { Suspense, memo } from 'react';

// Components
import PageInformation from '@components/PageInfomation';
import HomeBody from './components/HomeBody';

// Service
import { getAllCard } from '@services/card';

const Home = async () => {
  const card = await getAllCard();

  return (
    <VStack as="section" gap={5}>
      <PageInformation />
      <Suspense>
        <HomeBody data={card} />
      </Suspense>
    </VStack>
  );
};

export default memo(Home);
