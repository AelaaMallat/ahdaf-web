import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ enables static export
  images: {
    unoptimized: true, // ✅ required for static sites (no image optimization server)
  },
};

export default nextConfig;
