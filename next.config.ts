import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // deploy even if lint errors exits
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
