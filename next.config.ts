import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    basePath: isProd ? '/web' : '',
    assetPrefix: isProd ? '/web' : '',
    /* config options here */
};

export default nextConfig;
