/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.travel.rakuten.co.jp",
      },
    ],
  },
};

export default nextConfig;
