'use client'

import { useState, useEffect } from 'react'

interface FloatingEmailCTAProps {
  source?: string
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center'
  trigger?: 'immediate' | 'scroll' | 'exit-intent'
  className?: string
}

export function FloatingEmailCTA({
  source = 'floating-cta',
  position = 'bottom-right',
  trigger = 'scroll',
  className = ''
}: FloatingEmailCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (trigger === 'immediate') {
      setTimeout(() => setIsVisible(true), 2000)
    } else if (trigger === 'scroll') {
      const handleScroll = () => {
        const scrolled = window.scrollY > 300
        setIsVisible(scrolled)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    } else if (trigger === 'exit-intent') {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0) {
          setIsVisible(true)
        }
      }
      document.addEventListener('mouseleave', handleMouseLeave)
      return () => document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [trigger])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source,
          userType: 'bitcoin_holder',
        }),
      })

      if (!response.ok) throw new Error('Failed to subscribe')

      setSuccess(true)
      setTimeout(() => {
        window.location.href = '/thank-you?download=standards'
      }, 1500)
    } catch (err) {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!isVisible) return null

  const positions = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-center': 'bottom-6 left-1/2 transform -translate-x-1/2'
  }

  if (success) {
    return (
      <div className={`fixed ${positions[position]} z-50 ${className}`}>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg max-w-sm">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">Success! Check your email.</span>
          </div>
        </div>
      </div>
    )
  }

  if (!isExpanded) {
    return (
      <div className={`fixed ${positions[position]} z-50 ${className}`}>
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-primary to-accent text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        >
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-semibold whitespace-nowrap">Get Standards</span>
          </div>
        </button>
      </div>
    )
  }

  return (
    <div className={`fixed ${positions[position]} z-50 ${className}`}>
      <div className="bg-white border-2 border-primary/20 rounded-lg shadow-xl max-w-sm p-6 relative">
        {/* Close button */}
        <button
          onClick={() => setIsExpanded(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Get Bitcoin Standards
        </h3>
        
        <p className="text-sm text-gray-600 mb-4">
          Free early access to the standards used by 500+ attorneys nationwide.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-sm"
          />
          
          <button
            type="submit"
            disabled={loading || !email}
            className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-2 px-4 rounded-lg disabled:opacity-50 transition-all text-sm shadow-md hover:shadow-lg"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </div>
            ) : 'Download Free'}
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-3 text-center">
          No spam • Unsubscribe anytime
        </p>
      </div>
    </div>
  )
} 