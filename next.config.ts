import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // No basePath needed for fxnit.github.io (root domain)
  // basePath: process.env.NODE_ENV === 'production' ? '/fxn-website' : '',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Ensure trailing slash for GitHub Pages
  trailingSlash: true,
  
  // Environment detection for dev/test
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
    ENVIRONMENT: process.env.NODE_ENV || 'development',
  },
};

export default nextConfig;
