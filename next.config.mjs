/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.dummyjson.com',
          port: '',
          pathname: '/product-images/**',
        },
      ],
    },
    async redirects() {
      return [
        {
          source: '/:slug',
          destination: '/',
          permanent: true,
        },
      ]
    },
    
};

export default nextConfig;
