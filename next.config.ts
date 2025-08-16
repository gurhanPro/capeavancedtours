import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  }
};

// Only initialize Cloudflare dev mode if explicitly enabled
if (process.env.NODE_ENV === "development" && process.env.ENABLE_CLOUDFLARE_DEV !== "false") {
  try {
    const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
    initOpenNextCloudflareForDev();
    console.log("✅ Cloudflare development mode initialized");
  } catch (error) {
    console.warn("⚠️ Cloudflare development mode not available - using standard Next.js dev mode");
    console.warn("This won't affect production deployment to Cloudflare Pages");
  }
}

export default nextConfig;
