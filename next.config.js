/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreBuildErrors:true
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'rickandmortyapi.com/**',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
