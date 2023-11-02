import { Suspense, memo } from 'react';

// Components
import HomeBody from './components/HomeBody';
import HomeLayout from '@components/layout/HomeLayout';

// Service

const Home = () => (
  <HomeLayout>
    <Suspense>
      <HomeBody />
    </Suspense>
  </HomeLayout>
);

export default memo(Home);
