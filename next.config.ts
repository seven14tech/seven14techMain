import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old URLs from before the site was reorganised around the three offerings.
  async redirects() {
    return [
      { source: "/product", destination: "/billing", permanent: true },
      { source: "/solutions", destination: "/billing#industries", permanent: true },
    ];
  },
};

export default nextConfig;
