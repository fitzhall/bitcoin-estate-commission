'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// gtag type is declared in types/gtag.d.ts

export function PerformanceWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Log Core Web Vitals
    if (typeof window !== 'undefined') {
      // Report performance metrics
      const reportWebVitals = (metric: any) => {
        // You can send these to your analytics service
        console.log('Web Vital:', metric.name, metric.value)
        
        // Send to analytics if needed
        if (window.gtag) {
          window.gtag('event', metric.name, {
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            metric_id: metric.id,
            metric_value: metric.value,
            metric_delta: metric.delta,
          })
        }
      }

      // Import web-vitals dynamically
      import('web-vitals').then(({ getCLS, getFCP, getLCP, getTTFB, onINP }) => {
        getCLS(reportWebVitals)
        getFCP(reportWebVitals)
        getLCP(reportWebVitals)
        getTTFB(reportWebVitals)
        onINP(reportWebVitals) // INP replaces FID in web-vitals v3+
      }).catch((error) => {
        console.error('Failed to load web-vitals:', error)
      })
    }

    // Prefetch visible links for faster navigation
    const prefetchVisibleLinks = () => {
      if ('IntersectionObserver' in window) {
        const links = document.querySelectorAll('a[href^="/"]')
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const link = entry.target as HTMLAnchorElement
              const href = link.getAttribute('href')
              if (href) {
                // Prefetch the link
                const linkElement = document.createElement('link')
                linkElement.rel = 'prefetch'
                linkElement.href = href
                linkElement.as = 'document'
                document.head.appendChild(linkElement)
                
                observer.unobserve(entry.target)
              }
            }
          })
        }, {
          rootMargin: '50px'
        })

        links.forEach(link => observer.observe(link))

        return () => {
          links.forEach(link => observer.unobserve(link))
        }
      }
    }

    // Run prefetching after a short delay
    const timeout = setTimeout(prefetchVisibleLinks, 1000)

    return () => clearTimeout(timeout)
  }, [pathname])

  // Add performance hints
  useEffect(() => {
    // No external fonts needed anymore - using system fonts

    // DNS prefetch for potential external resources
    const dnsPrefetchDomains = [
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
    ]

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'dns-prefetch'
      link.href = domain
      document.head.appendChild(link)
    })
  }, [])

  return <>{children}</>
}