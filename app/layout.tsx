import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Clausum Application',
  description: 'Een rustige studietool voor naamvalpatronen van Tsjechische zelfstandige naamwoorden.',
  icons: {
    icon: 'https://me.clausum.nl/7f3a9c1e4b2d8a6f.png',
    shortcut: 'https://me.clausum.nl/7f3a9c1e4b2d8a6f.png',
    apple: 'https://me.clausum.nl/7f3a9c1e4b2d8a6f.png',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
