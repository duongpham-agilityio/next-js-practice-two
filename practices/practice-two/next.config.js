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
    deviceSizes: [300, 350, 450, 550],
  },
};

module.exports = nextConfig;
