'use client'

import { useState } from 'react'

interface EmailCaptureProps {
  source?: string
  variant?: 'inline' | 'popup' | 'sidebar' | 'footer'
  title?: string
  description?: string
  buttonText?: string
  className?: string
}

export function EmailCapture({
  source = 'unknown',
  variant = 'inline',
  title = 'Get the Bitcoin Estate Planning Standards (Early Access)',
  description = 'Download the draft standards being reviewed by 500+ attorneys nationwide.',
  buttonText = 'Download Free Guide',
  className = ''
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [userType, setUserType] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

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
      // Redirect to thank you page or download
      window.location.href = '/thank-you?download=standards'
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 ${className}`}>
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Check Your Email!
        </h3>
        <p className="text-green-700">
          We've sent you the Bitcoin Estate Planning Standards. Check your inbox in the next few minutes.
        </p>
      </div>
    )
  }

  const variants = {
    inline: 'bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-6',
    popup: 'bg-white border border-gray-200 rounded-lg p-6 shadow-lg',
    sidebar: 'bg-gray-50 border border-gray-200 rounded-lg p-4',
    footer: 'bg-gray-900 text-white p-6 rounded-lg'
  }

  return (
    <div className={`${variants[variant]} ${className}`}>
      <div className="max-w-md mx-auto">
        <h3 className="text-xl font-bold mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="">I am a...</option>
              <option value="bitcoin_holder">Bitcoin Holder</option>
              <option value="attorney">Attorney</option>
              <option value="other">Other</option>
            </select>
          </div>

          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />

          <button
            type="submit"
            disabled={loading || !email}
            className="w-full bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Sending...' : buttonText}
          </button>
        </form>

        {error && (
          <p className="text-red-600 text-sm mt-2">{error}</p>
        )}

        <p className="text-xs text-gray-500 mt-3">
          By submitting, you agree to receive emails about Bitcoin estate planning updates. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
} 