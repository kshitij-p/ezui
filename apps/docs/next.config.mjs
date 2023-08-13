import { withContentlayer } from "next-contentlayer";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fake-img.com',
        port: '',
        pathname: '*/**',
      },
    ],
    domains: ["https://fake-img.com"]
  },
  reactStrictMode: true,

  typescript: {
    //TS errors will be checked in CI
    ignoreBuildErrors: true,
  },
  eslint: {
    //Eslint errors will be checked in CI
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
};

export default withContentlayer(config);
