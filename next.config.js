/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/about",
      },
      // Rewrite to serve external Vercel app under /apps/movie-and-series-picker
      {
        source: "/apps/movie-and-series-picker",
        destination: "https://multi-agent-movie-picker.vercel.app/apps/movie-and-series-picker",
      },
      {
        source: "/apps/movie-and-series-picker/:path*",
        destination: "https://multi-agent-movie-picker.vercel.app/apps/movie-and-series-picker/:path*",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
