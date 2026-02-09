/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const assetPrefix = basePath ? `${basePath.replace(/\/$/, '')}/` : '';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: basePath || undefined,
  assetPrefix: assetPrefix || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;