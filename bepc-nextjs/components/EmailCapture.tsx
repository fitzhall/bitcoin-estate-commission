'use client'

import { useState } from 'react'

interface EmailCaptureProps {
  source?: string
  variant?: 'hero' | 'inline' | 'sidebar' | 'compact'
  title?: string
  description?: string
  buttonText?: string
  className?: string
  showModal?: boolean
}

export function EmailCapture({
  source = 'unknown',
  variant = 'hero',
  title = 'Get Early Access: Bitcoin Estate Planning Standards',
  description = 'Join 500+ attorneys and thousands of Bitcoin holders preparing for the future.',
  buttonText = 'Download Free Standards',
  className = '',
  showModal = false
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [userType, setUserType] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [showThankYouModal, setShowThankYouModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          userType: userType || undefined,
          source,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to subscribe')
      }

      setSuccess(true)
      if (showModal) {
        setShowThankYouModal(true)
      } else {
        // Redirect to thank you page or download
        window.location.href = '/thank-you?download=standards'
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 ${className}`}>
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Success! Check Your Email
          </h3>
          <p className="text-green-700">
            We've sent you the Bitcoin Estate Planning Standards. Check your inbox in the next few minutes.
          </p>
        </div>
      </div>
    )
  }

  const variants = {
    hero: 'bg-gradient-to-br from-primary via-primary-light to-accent/20 text-white relative overflow-hidden',
    inline: 'bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow',
    sidebar: 'bg-gradient-to-r from-primary to-primary-light text-white rounded-lg shadow-lg',
    compact: 'bg-gray-50 border border-gray-200 rounded-lg'
  }

  // Thank You Modal
  if (showThankYouModal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Success! Check Your Email
            </h3>
            <p className="text-gray-600 mb-6">
              We've sent the Bitcoin Estate Planning Standards to your inbox. You should receive it within the next few minutes.
            </p>
            <a
              href="/standards-download.pdf"
              download
              className="inline-flex items-center bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-all mb-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Standards Now
            </a>
            <p className="text-sm text-gray-500">
              Check your email for bonus content and implementation checklists
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${variants[variant]} ${className}`}>
      {/* Background pattern for hero variant */}
      {variant === 'hero' && (
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      )}
      
      <div className="relative z-10 p-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
            variant === 'hero' || variant === 'sidebar' 
              ? 'bg-white/10 backdrop-blur-sm' 
              : 'bg-accent/10'
          }`}>
            <svg className={`w-8 h-8 ${
              variant === 'hero' || variant === 'sidebar' ? 'text-white' : 'text-accent'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>

          <h3 className={`text-2xl font-bold mb-4 ${
            variant === 'hero' || variant === 'sidebar' ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h3>
          
          <p className={`text-lg mb-8 ${
            variant === 'hero' || variant === 'sidebar' 
              ? 'text-gray-200' 
              : 'text-gray-600'
          }`}>
            {description}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900 placeholder-gray-500"
              />
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
                className={`px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white ${
                  userType === '' ? 'text-gray-500' : 'text-gray-900'
                }`}
              >
                <option value="">I am a...</option>
                <option value="attorney">Attorney</option>
                <option value="family">Family Member</option>
                <option value="other">Other</option>
              </select>
            </div>

            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900 placeholder-gray-500"
            />

            <button
              type="submit"
              disabled={loading || !email || !userType}
              className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </div>
              ) : buttonText}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <p className={`text-sm mt-6 ${
            variant === 'hero' || variant === 'sidebar' 
              ? 'text-gray-300' 
              : 'text-gray-500'
          }`}>
            By submitting, you agree to receive emails about Bitcoin estate planning updates. Unsubscribe anytime.
          </p>

          {/* Trust signals */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <svg className={`w-4 h-4 mr-2 ${
                  variant === 'hero' || variant === 'sidebar' ? 'text-accent-light' : 'text-accent'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className={variant === 'hero' || variant === 'sidebar' ? 'text-gray-300' : 'text-gray-600'}>
                  500+ Attorneys
                </span>
              </div>
              <div className="flex items-center">
                <svg className={`w-4 h-4 mr-2 ${
                  variant === 'hero' || variant === 'sidebar' ? 'text-accent-light' : 'text-accent'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className={variant === 'hero' || variant === 'sidebar' ? 'text-gray-300' : 'text-gray-600'}>
                  Research-Based
                </span>
              </div>
              <div className="flex items-center">
                <svg className={`w-4 h-4 mr-2 ${
                  variant === 'hero' || variant === 'sidebar' ? 'text-accent-light' : 'text-accent'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className={variant === 'hero' || variant === 'sidebar' ? 'text-gray-300' : 'text-gray-600'}>
                  Trusted Nationwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 