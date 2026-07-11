import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.87.143",
    "192.168.87.143:3000",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
