/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jentu-production.up.railway.app',
        port: '',
        pathname: '/static/**',
      },
    ],
  },
}

module.exports = nextConfig
