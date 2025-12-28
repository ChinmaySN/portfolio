import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import { NavBar } from '@/components/ui/tubelight-navbar';

export const metadata: Metadata = {
  // Page title - appears in browser tab and search results
  title: 'Chinmay S N – Creative Technologist',
  
  // Meta description - shown in search results (155-160 chars ideal)
  description: 'Engineering reliable systems across data, trading, and the web. Specializing in machine learning, algorithmic trading, and full-stack development.',
  
  // Keywords for search engines
  keywords: [
    'Chinmay S N',
    'Creative Technologist',
    'Software Engineer',
    'Machine Learning',
    'Algorithmic Trading',
    'Full Stack Developer',
    'Python',
    'JavaScript',
    'React',
    'Pine Script',
    'Data Analysis'
  ],
  
  // Author information
  authors: [{ name: 'Chinmay S N' }],
  
  // Site metadata
  creator: 'Chinmay S N',
  publisher: 'Chinmay S N',
  
  // Open Graph metadata for social sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Chinmay S N – Creative Technologist',
    description: 'Engineering reliable systems across data, trading, and the web.',
    url: 'https://chinmaysn.dev', // Update with actual domain
    siteName: 'Chinmay S N Portfolio',
    images: [
      {
        url: '/og-image.png', // 1200x630px recommended
        width: 1200,
        height: 630,
        alt: 'Chinmay S N - Creative Technologist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter/X Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Chinmay S N – Creative Technologist',
    description: 'Engineering reliable systems across data, trading, and the web.',
    creator: '@chinmaysn', // Update with actual Twitter handle if exists
    images: ['/og-image.png'],
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <NavBar />
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-slate-900 focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
