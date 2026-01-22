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
      // Rewrite to serve external Vercel app under /apps/streamwise-ai
      {
        source: "/apps/streamwise-ai",
        destination: "https://streamwise-ai.vercel.app/apps/streamwise-ai",
      },
      {
        source: "/apps/streamwise-ai/:path*",
        destination:
          "https://streamwise-ai.vercel.app/apps/streamwise-ai/:path*",
      },
      // Rewrite to serve external Vercel app under /apps/keyfinz
      {
        source: "/apps/keyfinz",
        destination: "https://www.keyfinz.com",
      },
      {
        source: "/apps/keyfinz/:path*",
        destination: "https://www.keyfinz.com/:path*",
      },
      // Rewrite to serve external Vercel app under /apps/onstage
      {
        source: "/apps/onstage",
        destination: "https://onstage-demo.vercel.app/",
      },
      {
        source: "/apps/onstage/:path*",
        destination: "https://onstage-demo.vercel.app/:path*",
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
