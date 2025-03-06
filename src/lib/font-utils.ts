import { Geist } from 'next/font/google';
import { Geist_Mono } from 'next/font/google';

export const sans = Geist({
  display: 'swap',
  subsets: ['latin'],
  variable: '--geist-sans',
  adjustFontFallback: true,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
});

export const mono = Geist_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--geist-mono',
  adjustFontFallback: true,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
});
