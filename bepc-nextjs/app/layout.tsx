import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Bitcoin Estate Planning Commission | BEPC',
    template: '%s | Bitcoin Estate Planning Commission'
  },
  description: 'The global authority for Bitcoin estate planning standards, certification, and professional education. Find BEPC certified attorneys specializing in cryptocurrency inheritance.',
  keywords: 'bitcoin estate planning, cryptocurrency inheritance, bitcoin trust, digital asset probate, bitcoin attorney',
  authors: [{ name: 'Bitcoin Estate Planning Commission' }],
  creator: 'BEPC',
  publisher: 'Bitcoin Estate Planning Commission',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bitcoinestateplanning.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bitcoinestateplanning.org',
    siteName: 'Bitcoin Estate Planning Commission',
    title: 'Bitcoin Estate Planning Commission | BEPC',
    description: 'The global authority for Bitcoin estate planning standards, certification, and professional education.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bitcoin Estate Planning Commission',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Estate Planning Commission | BEPC',
    description: 'The global authority for Bitcoin estate planning standards, certification, and professional education.',
    images: ['/og-image.png'],
    creator: '@BitcoinEstatePlanning',
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}