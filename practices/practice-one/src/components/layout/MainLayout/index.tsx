import { ReactNode, memo } from 'react';
import { Box, Container, VStack } from '@chakra-ui/react';

// Components
import { Header } from '../Header';
import Footer from '../Footer';

const MainLayout = ({ children }: { children: ReactNode }): JSX.Element => (
  <Container>
    <VStack
      minH="100vh"
      justifyContent="space-between"
      alignItems="unset"
      pt={3}
    >
      <Box>
        <Header />
        <Box as="main">{children}</Box>
      </Box>
      <Footer />
    </VStack>
  </Container>
);

export default memo(MainLayout);
