import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bitcoinestateplanning.org',
    siteName: 'Bitcoin Estate Planning Commission',
    title: 'Bitcoin Estate Planning Commission | BEPC',
    description: 'The global authority for Bitcoin estate planning standards, certification, and professional education.',
    images: [
      {
        url: '/logos/bepc-logo-vertical.png',
        width: 1200,
        height: 1200,
        alt: 'Bitcoin Estate Planning Commission',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Estate Planning Commission | BEPC',
    description: 'The global authority for Bitcoin estate planning standards and certification.',
    creator: '@BEPC',
    images: ['/logos/bepc-logo-vertical.png'],
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
    <html lang="en" className="font-sans">
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}