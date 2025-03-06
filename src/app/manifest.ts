import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: 'AStack',
    short_name: 'AStack',
    description:
      'AStack is an open-source Next.js boilerplate with best practices for performance, scalability, and developer experience.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
};

export default manifest;
