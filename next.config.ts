import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

// For project pages (https://username.github.io/<repo>/), we need a basePath.
// For user/organization pages (https://username.github.io/), basePath should be "".
const basePath = isGitHubActions && repo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,

  images: {
    // GitHub Pages is static hosting; disable Next Image Optimization.
    unoptimized: true,
  },
};

export default nextConfig;
