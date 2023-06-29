import { withContentlayer } from "next-contentlayer";

/** @type {import("next").NextConfig} */
const config = {
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
