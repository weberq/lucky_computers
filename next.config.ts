import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The original Vite app removed <StrictMode> because the Hero's phase
  // timer sequence was being double-fired in development. Keep parity.
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
