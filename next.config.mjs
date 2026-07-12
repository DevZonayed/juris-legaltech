/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emit a self-contained server bundle for a small production Docker image.
  output: "standalone",
  images: {
    // Design mockups & hero are local PNGs; keep unoptimized for zero-config static serving.
    unoptimized: true,
  },
};

export default nextConfig;
