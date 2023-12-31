const { nextImageLoaderRegex } = require('next/dist/build/webpack-config')

/** @type {import('next').NextConfig} */
const nextConfig = {
    //webpack: nextImageLoaderRegex,
    images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "*",
          },
        ],
      },
}

module.exports = nextConfig
