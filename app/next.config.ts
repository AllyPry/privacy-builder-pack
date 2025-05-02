import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/privacy-builder-pack',
  assetPrefix: '/privacy-builder-pack',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
