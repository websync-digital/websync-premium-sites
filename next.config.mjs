/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true, // Keeping standard img behavior for zero regression
    },
};

export default nextConfig;
