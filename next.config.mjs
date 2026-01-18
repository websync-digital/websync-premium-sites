/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // eslint config removed as it is no longer supported in next.config.js
    images: {
        unoptimized: true, // Keeping standard img behavior for zero regression
    },
};

export default nextConfig;
