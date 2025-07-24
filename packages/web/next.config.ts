import type { NextConfig } from "next";

console.log("!!!---!!!", process.env.NEXT_PUBLIC_BASE_PATH);

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "/"
};

export default nextConfig;
