import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

// Providers
import { ChakraUIProvider, ReactQueryProvider } from '@providers/index';

// Components
import MainLayout from '@components/layout/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Card management',
  description: 'This is the website for manage card',
  icons: '/next.svg',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body
      className={inter.className}
      style={{
        background: "url('/background.png') no-repeat center",
        backgroundSize: 'cover',
      }}
    >
      <ChakraUIProvider>
        <ReactQueryProvider>
          <MainLayout>{children}</MainLayout>
        </ReactQueryProvider>
      </ChakraUIProvider>
    </body>
  </html>
);

export default RootLayout;
