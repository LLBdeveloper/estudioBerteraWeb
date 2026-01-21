/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- ESTO ES LO MÁS IMPORTANTE
  images: {
    unoptimized: true, // Hostinger no puede optimizar imágenes de Next solo
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
