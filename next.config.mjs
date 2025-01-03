import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  output: "export",
  images: { unoptimized: true },
  experimental: {
    mdxRs: true,
  },
  basePath: "",
};

export default withContentlayer(nextConfig);
