import type { Metadata } from 'next';

import { Poppins } from 'next/font/google';

// Styles
import '@/styles/globals.css';

// Providers
import { ThemeProvider } from '@/providers';
// Layout
import { MainLayout } from '@/layouts';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'BlogTO',
  description: 'This is a blog post about the latest trends in technology',
  keywords: 'AI/ML, Funding, Marketing, Talent, Engineering, Exits, Operations',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [
      {
        url: '/images/logo.webp',
        width: 800,
        height: 600,
      },
    ],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={poppins.className}>
      <ThemeProvider>
        <MainLayout>{children}</MainLayout>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
