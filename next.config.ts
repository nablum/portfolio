import type { NextConfig } from "next";

/**
 * Base path under which the site is served (e.g. "/portfolio" on GitHub Pages).
 * Injected by the deploy workflow; empty when running locally.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
