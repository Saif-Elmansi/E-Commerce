import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  /** Swiper ships ESM-only; bundling it explicitly avoids flaky resolve/import errors in dev. */
  transpilePackages: ["swiper"],
};

export default nextConfig;
