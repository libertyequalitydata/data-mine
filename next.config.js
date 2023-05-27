/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/data-sources",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
