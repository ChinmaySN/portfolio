/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // fail production builds on type errors
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
