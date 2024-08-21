import { ReactNode } from 'react';
import { Divider } from '@nextui-org/react';

// Components
import { Footer, Header } from '@/components';

export interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Header />
    <Divider />
    <main className="mb-10">{children}</main>
    <Footer />
  </>
);
