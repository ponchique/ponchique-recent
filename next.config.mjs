import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  output: "export",
  images: { unoptimized: true },
  basePath: "/ponchique-recent",
};

const config = (phase, { defaultConfig }) => withContentlayer(nextConfig);

export default config;
