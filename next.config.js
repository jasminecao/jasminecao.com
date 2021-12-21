const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})
const withImages = require('next-images')

module.exports = withImages()
module.exports = withMDX({
  // Pick up MDX files in the /pages/ directory
  pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
})
