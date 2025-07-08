'use client'

import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Find Attorney', href: '/find-attorney' },
  { name: 'Certification', href: '/certification' },
  { name: 'Standards', href: '/standards' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-accent p-2 rounded-lg group-hover:bg-accent-dark transition-colors">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold font-serif text-primary">BEPC</span>
          </Link>
          <div className="hidden md:flex md:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Link
            href="/certification/apply"
            className="hidden md:inline-flex btn bg-accent hover:bg-accent-dark text-white btn-sm shadow-sm hover:shadow-md transition-all"
          >
            Get Certified
          </Link>
          
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden",
        mobileMenuOpen ? "block" : "hidden"
      )}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/certification/apply"
            className="block rounded-md bg-accent px-3 py-2 text-base font-medium text-white hover:bg-accent-dark transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Certified
          </Link>
        </div>
      </div>
    </header>
  )
}