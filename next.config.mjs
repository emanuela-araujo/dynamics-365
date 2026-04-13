/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Descomente a linha abaixo se o repositório NÃO for seu-usuario.github.io
  basePath: '/dynamics-365.github.io',
}

export default nextConfig
