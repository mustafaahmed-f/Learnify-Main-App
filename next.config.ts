import type { NextConfig } from "next";
import { withMicrofrontends } from "@vercel/microfrontends/next/config";

// Next.js 15 - experimental.turbopack
const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    // @ts-expect-error
    turbopack: true,
    turbopackFileSystemCacheForDev: true,
  },

  transpilePackages: ["@learnify/ui"],
  async rewrites() {
    return [
      {
        source: "/adminDashboard/:path*",
        destination:
          process.env.ENVIRONMENT === "dev"
            ? `http://localhost:3001/:path*`
            : `https://learnify-admin-dashboard-tau.vercel.app/:path*`,
      },
    ];
  },
};

export default withMicrofrontends(nextConfig);
