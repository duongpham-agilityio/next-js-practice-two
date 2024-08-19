import type { Metadata } from "next";

import { Poppins } from "next/font/google";

// Styles
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BlogTO",
  description: "This is a blog post about the latest trends in technology",
  keywords: "AI/ML, Funding, Marketing, Talent, Engineering, Exits, Operations",
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html className="dark" lang="en">
    <body className={poppins.className}>{children}</body>
  </html>
);

export default RootLayout;
