import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // allow loading YouTube thumbnails from img.youtube.com
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
