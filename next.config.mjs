import nextMdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
}
/** @type {import('next').NextConfig} */
const withMdx = nextMdx({
  // By default only the .mdx extension is supported.
  extension: /\.mdx?$/,
  options: { providerImportSource: '@mdx-js/react',  /* otherOptions… */ }
})

/** @type {import('next').NextConfig} */
export default withMdx(nextConfig);
