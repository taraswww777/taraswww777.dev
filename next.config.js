/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'custom',
    loaderFile: './_next.config/imageLoader.js',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

// module.exports = nextConfig
//
//

const nextMdx = require('@next/mdx');

const withMdx = nextMdx({
  // By default only the .mdx extension is supported.
  extension: /\.mdx?$/,
  options: {providerImportSource: '@mdx-js/react',  /* otherOptions… */}
})

module.exports = withMdx({
  ...nextConfig,
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
})
