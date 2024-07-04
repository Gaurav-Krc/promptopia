// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//     serverComponentsExternalPackages: ["mongoose"],
//   },
//   images: {
//     domains: ['lh3.googleusercontent.com'],
//   },
//   webpack(config) {
//     config.experiments = {
//       ...config.experiments,
//       topLevelAwait: true,
//     }
//     return config
//   }
// }

// export default nextConfig;

// @ts-check
 
/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  /* config options here */
  experimental: {
    serverComponentsExternalPackages: ['@acme/ui'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
}
 
export default nextConfig