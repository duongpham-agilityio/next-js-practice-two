import { ReactNode, memo } from 'react';
import { Container } from '@chakra-ui/react';

// Components
import { Header } from '../Header';
import Footer from '../Footer';

const MainLayout = ({ children }: { children: ReactNode }): JSX.Element => (
  <Container as="main" minH="100vh" pt={4}>
    <Header />
    {children}
    <Footer />
  </Container>
);

export default memo(MainLayout);
