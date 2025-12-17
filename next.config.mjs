/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // options config
        remotePatterns: [
            {
                protocol:"https",
                hostname:"cdn.dummyjson.com"
            }
        ]
    }
};

export default nextConfig;
