/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https',
      },
      {
        hostname: 'images.ctfassets.net',
        protocol: 'https',
      },
    ],
  },
  compiler: {
    removeConsole: true,
  },
};

module.exports = nextConfig;
