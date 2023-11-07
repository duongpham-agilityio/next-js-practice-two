import { Suspense, memo } from 'react';

// Components
import HomeBody from './components/HomeBody';
import HomeLayout from '@components/layout/HomeLayout';
import Fallback from '@components/Fallback';

const Home = () => (
  <HomeLayout>
    <Suspense fallback={<Fallback />}>
      <HomeBody />
    </Suspense>
  </HomeLayout>
);

export default memo(Home);
