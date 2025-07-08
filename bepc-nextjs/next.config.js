/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/attorneys',
        destination: '/find-attorney',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig