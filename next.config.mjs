/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is a single page. Old links to the former pages land on it
  // instead of a 404. Temporary (307) so the paths can be reused later.
  async redirects() {
    return ["/about", "/contact", "/products", "/services", "/services/:path*"].map((source) => ({
      source,
      destination: "/",
      permanent: false,
    }));
  },
};

export default nextConfig;
