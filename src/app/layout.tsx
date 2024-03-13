import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "src/globals.css";
import { ReactNode } from 'react';
import { YaMetricCounter } from '../components/metrics/YaMetricCounter';
import { DEFAULT_KEYWORDS } from '../constants/keywords';
import { SITE_NAME } from '../constants/common';

const inter = Inter({ subsets: ["cyrillic"] });
import type { Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: 'black',
}

export const metadata: Metadata = {
  title: SITE_NAME,
  openGraph: {
    title: SITE_NAME,
  },
  description: '',
  keywords: DEFAULT_KEYWORDS
};



export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru-RU">
    <head>
      <meta name="zen-verification" content="z0wd2SS2t0DrS2qFsQEG5fIHme88fCZEm4V3N4nuwewvhhKFLkWCuVjwFYJeFIaG" />
      <script src="https://kit.fontawesome.com/45f9b38c9b.js" crossOrigin="anonymous"></script>
    </head>
    <body className={inter.className}>
    {children}
    <YaMetricCounter />
    </body>
    </html>
  );
}
