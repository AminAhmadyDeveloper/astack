import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AStack – Open Source Next.js Boilerplate',
  description:
    'AStack is an open-source Next.js boilerplate with best practices for performance, scalability, and developer experience.',
  keywords: [
    'AStack',
    'Next.js boilerplate',
    'open source',
    'web development',
    'developer tools',
  ],
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/icon.svg',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/icon.ong',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-icon.png',
    },
  ],
  openGraph: {
    title: 'AStack – Open Source Next.js Boilerplate',
    description:
      'Kickstart your Next.js project with AStack, a modern, open-source boilerplate optimized for scalability and best practices.',
    url: 'https://github.com/AminAhmadyDeveloper/astack',
    siteName: 'AStack',
    images: [
      {
        url: 'https://github.com/AminAhmadyDeveloper/astack/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AStack – Open Source Next.js Boilerplate',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AStack – Open Source Next.js Boilerplate',
    description:
      'Kickstart your Next.js project with AStack, a modern, open-source boilerplate optimized for scalability and best practices.',
    images: ['https://github.com/AminAhmadyDeveloper/astack/og-image.png'],
  },
  metadataBase: new URL('https://github.com/AminAhmadyDeveloper/astack'),
  authors: [
    {
      name: 'Amin Ahmady',
      url: 'https://github.com/AminAhmadyDeveloper',
    },
  ],
  creator: 'Amin Ahmady',
  publisher: 'AStack',
  applicationName: 'AStack',
};
