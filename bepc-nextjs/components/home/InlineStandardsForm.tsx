'use client'

import { useState } from 'react'

export function InlineStandardsForm() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [role, setRole] = useState('')
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
          firstName,
          userType: role,
          source: 'hero-inline-form',
          tags: [`${role}-new`, 'standards-download'],
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to subscribe')
      }

      setSuccess(true)
      setShowThankYouModal(true)
      
      // Track conversion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'standards_download',
          'value': 1.0,
          'currency': 'USD',
          'transaction_id': Date.now().toString()
        })
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Thank You Modal
  if (showThankYouModal) {
    return (
      <>
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
                We've sent the Bitcoin Estate Planning Standards to {email}. You should receive it within the next few minutes.
              </p>
              <a
                href="/bitcoin-estate-planning-standards-2025.pdf"
                download
                className="inline-flex items-center bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-all mb-4"
                onClick={() => {
                  // Track download
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'file_download', {
                      'file_name': 'bitcoin-estate-planning-standards-2025.pdf',
                      'file_extension': 'pdf',
                      'link_text': 'Download Standards Now'
                    })
                  }
                }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Standards Now
              </a>
              <p className="text-sm text-gray-500">
                Check your email for bonus content and {role === 'attorney' ? 'implementation checklists' : 'family protection guides'}
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (success && !showThankYouModal) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
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

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="text-xl font-semibold text-white">
            📄 Download Draft Standards (32-page PDF)
          </h3>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Name (required)"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900 placeholder-gray-500"
            />
            
            <input
              type="email"
              placeholder="Email (required)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900 placeholder-gray-500"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="role"
                value="attorney"
                checked={role === 'attorney'}
                onChange={(e) => setRole(e.target.value)}
                required
                className="sr-only"
              />
              <span className={`px-6 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                role === 'attorney' 
                  ? 'bg-accent text-white border-accent' 
                  : 'bg-white text-gray-700 border-gray-300 hover:border-accent'
              }`}>
                Attorney
              </span>
            </label>
            
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="role"
                value="family"
                checked={role === 'family'}
                onChange={(e) => setRole(e.target.value)}
                required
                className="sr-only"
              />
              <span className={`px-6 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                role === 'family' 
                  ? 'bg-accent text-white border-accent' 
                  : 'bg-white text-gray-700 border-gray-300 hover:border-accent'
              }`}>
                Family
              </span>
            </label>
            
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="role"
                value="other"
                checked={role === 'other'}
                onChange={(e) => setRole(e.target.value)}
                required
                className="sr-only"
              />
              <span className={`px-6 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                role === 'other' 
                  ? 'bg-accent text-white border-accent' 
                  : 'bg-white text-gray-700 border-gray-300 hover:border-accent'
              }`}>
                Other
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || !email || !firstName || !role}
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
          ) : '📄 Download Draft Standards (32-page PDF)'}
        </button>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        )}
      </form>
    </div>
  )
}