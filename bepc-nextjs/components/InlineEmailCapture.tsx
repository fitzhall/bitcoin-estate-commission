'use client'

import { useState } from 'react'

interface InlineEmailCaptureProps {
  source?: string
  state?: string
  city?: string
  variant?: 'urgent' | 'professional' | 'minimal'
}

export function InlineEmailCapture({ 
  source, 
  state, 
  city,
  variant = 'urgent'
}: InlineEmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

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
          source: source || window.location.pathname,
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

  if (success) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center my-8">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-green-800 font-semibold">✓ Success! Redirecting to your download...</p>
      </div>
    )
  }

  const locationText = city && state ? `${city}, ${state}` : state || 'your area'

  if (variant === 'minimal') {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Get the Bitcoin Estate Planning Standards
          </h3>
          <p className="text-gray-600 mb-4">
            Free early access to the standards used by 500+ attorneys nationwide.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
              />
              <button
                type="submit"
                disabled={loading || !email}
                className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-2 rounded-lg disabled:opacity-50 transition-colors whitespace-nowrap"
              >
                {loading ? 'Sending...' : 'Get Guide'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  if (variant === 'professional') {
    return (
      <div className="bg-white border-2 border-primary/20 rounded-lg shadow-sm hover:shadow-md transition-shadow p-8 my-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start lg:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Bitcoin Estate Planning Standards (Early Access)
              </h3>
              <p className="text-gray-600 mb-4">
                Download the comprehensive standards being reviewed by 500+ attorneys. Learn the KEEP Protocol and protect your Bitcoin legacy in {locationText}.
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                />
                <button
                  type="submit"
                  disabled={loading || !email}
                  className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg disabled:opacity-50 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  {loading ? 'Sending...' : 'Download Free'}
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-3">
                Trusted by Bitcoin holders in {locationText} • No spam, unsubscribe anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default: urgent variant
  return (
    <div className="bg-gradient-to-r from-red-50 via-orange-50 to-amber-50 border-2 border-orange-200 rounded-lg p-8 my-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')]"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Warning icon */}
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          🚨 Don't Let Your Bitcoin Become Lost Forever
        </h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Get the <strong>Bitcoin Estate Planning Standards (Early Access Draft)</strong> - the framework protecting Bitcoin families in {locationText} and nationwide.
        </p>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-6 border border-orange-200">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium text-gray-700">500+ Attorneys</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span className="font-medium text-gray-700">Research-Based</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-medium text-gray-700">Proven Secure</span>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white/90 backdrop-blur-sm"
            />
            <button
              type="submit"
              disabled={loading || !email}
              className="bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-lg disabled:opacity-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
            >
              {loading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </div>
              ) : 'Get Free Guide'}
            </button>
          </div>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          Trusted by Bitcoin holders in {locationText} • No spam, unsubscribe anytime
        </p>
      </div>
    </div>
  )
} 