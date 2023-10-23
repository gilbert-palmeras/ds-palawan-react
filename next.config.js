/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.ignoreWarnings = [
      { module: /node_modules\/next\/dist\/webpack\/loaders\/css-loaders\/src\/index\.js/ },
      { file: /node_modules\/next\/dist\/webpack\/loaders\/css-loaders\/src\/index\.js/ },
    ];
  
    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
}

module.exports = nextConfig
