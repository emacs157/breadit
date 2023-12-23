/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ["uploadthing.com", "lh3.googleusercontent.com"],
  },
  experimental: {
    appDir: true,
  },
  // webpack(config, { dev }) {
  //   if (dev) {
  //     config.devtool = "cheap-module-source-map";
  //   }
  //   return config;
  // },
};

module.exports = nextConfig;
