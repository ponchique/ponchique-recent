import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: { unoptimized: true },
  basePath: "",
};

const config = (phase, { defaultConfig }) => withContentlayer(nextConfig);

export default config;
