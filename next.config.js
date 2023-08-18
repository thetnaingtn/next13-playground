/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  headers() {
    console.log("next.config(HEADERS)");
    return [];
  },
  redirects() {
    console.log("next.config(REDIRECTS)");
    return [
      {
        source: "/about",
        destination: "/",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com/**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
