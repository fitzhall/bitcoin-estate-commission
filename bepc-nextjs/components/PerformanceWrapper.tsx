'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Declare gtag type for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function PerformanceWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Log Core Web Vitals
    if (typeof window !== 'undefined' && 'web-vital' in window) {
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
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(reportWebVitals)
        getFID(reportWebVitals)
        getFCP(reportWebVitals)
        getLCP(reportWebVitals)
        getTTFB(reportWebVitals)
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
    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ]

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = domain
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

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