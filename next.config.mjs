/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'files.edgestore.dev',
            port: '',
            pathname: '/hz54m8xa5kwgk3a0/publicFiles/_public/**',
          },
        ],
      },
};



export default nextConfig;
