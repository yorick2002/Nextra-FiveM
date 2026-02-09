import nextra from 'nextra'

const withNextra = nextra({});

export default withNextra({
  turbopack: {
    resolveExtensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx', '.md']
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'r2.fivemanage.com'
      }
    ]
  }
})