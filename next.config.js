/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: ['images.unsplash.com', 'images.ctfassets.net'],
  },
  env: {
    ENVIRONMENT_NAME: process.env.ENVIRONMENT_NAME,
  },
};

module.exports = nextConfig;
