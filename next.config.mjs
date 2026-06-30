/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Отключаем строгую проверку грамматики (кавычек, ссылок) при сборке
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Отключаем строгую проверку типов TypeScript при сборке
    ignoreBuildErrors: true,
  },
};

export default nextConfig;