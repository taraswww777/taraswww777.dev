import nextMdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  compiler: {
    styledComponents: true,
  },
  experimental: {
    forceSwcTransforms: true,
    serverComponentsExternalPackages: ['next/font'],
  },
}
/** @type {import('next').NextConfig} */
const withMdx = nextMdx({
  // By default only the .mdx extension is supported.
  extension: /\.mdx?$/,
  options: { providerImportSource: '@mdx-js/react',  /* otherOptions… */ }
})

/** @type {import('next').NextConfig} */
export default withMdx(nextConfig);
