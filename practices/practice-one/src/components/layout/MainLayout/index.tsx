import { ReactNode, memo } from 'react';
import { Container } from '@chakra-ui/react';

// Components
import { Header } from '../Header';
import Footer from '../Footer';

const MainLayout = ({ children }: { children: ReactNode }): JSX.Element => (
  <>
    <Header />
    <Container as="main" minH="100vh">
      {children}
    </Container>
    <Footer />
  </>
);

export default memo(MainLayout);
