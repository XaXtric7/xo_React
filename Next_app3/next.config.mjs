/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // 🔁 Updated to HTTPS (since the URL is HTTPS)
        hostname: "www.bmw-kunexclusive-hyderabad.in",
        port: "",
        pathname: "/sites/default/files/**", // ✅ Match all images in this path
      },
    ],
  },
};

export default nextConfig;
