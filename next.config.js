/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath:"/ashraful",
  assetPrefix:"/ashraful",
  images: {
    loader: "akamai",
    path:""
  }
}

module.exports = nextConfig
