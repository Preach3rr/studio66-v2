import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "192.168.87.143",
    "192.168.87.143:3000",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
