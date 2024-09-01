/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    assetPrefix: isProd ? '/slider-horizontal-cards-slider-clone/' : '',
    basePath: isProd ? '/slider-horizontal-cards-slider-clone' : '',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
      },
};

export default nextConfig;
