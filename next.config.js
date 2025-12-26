/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // fail production builds on type errors
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ui.aceternity.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
