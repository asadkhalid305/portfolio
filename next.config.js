/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/about",
      },
    ];
  },
};

module.exports = nextConfig;
