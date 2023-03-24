/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    remotePatterns: [{ protocol: "https", hostname: "openweathermap.org" }],
  },
};

module.exports = nextConfig;
