import withPlaiceholder from '@plaiceholder/next'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sl3kw8d2cbj902ry.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default withPlaiceholder(nextConfig)
