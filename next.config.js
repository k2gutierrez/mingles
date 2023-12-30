const { nextImageLoaderRegex } = require('next/dist/build/webpack-config')

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: nextImageLoaderRegex,
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "*",
          },
        ],
      },
}

module.exports = nextConfig
