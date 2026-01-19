/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
  },
  // Performance optimizations
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
