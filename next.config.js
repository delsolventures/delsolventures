/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //domains: ["storageapi.fleek.co", "savivets.wpengine.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fleek.co/**",
        pathname: "/20626237-8360-4375-83b2-2294cdded30d-bucket/assets/img/**",
      },
    ],
    domains: ["storageapi.fleek.co"],
  },
};

module.exports = nextConfig;
