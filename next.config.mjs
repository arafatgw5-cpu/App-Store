/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "upload.wikimedia.org",
    },
    {
      protocol: "https",
      hostname: "i.pinimg.com",
    },
    {
      protocol: "https",
      hostname: "png.pngtree.com",
    },
  ],
}
};

export default nextConfig;
