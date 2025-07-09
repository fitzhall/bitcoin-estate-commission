'use client'

import { useState } from 'react'

interface InlineEmailCaptureProps {
  source?: string
  state?: string
  city?: string
}

export function InlineEmailCapture({ source, state, city }: InlineEmailCaptureProps) {
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
          userType: 'bitcoin_holder', // Assume Bitcoin holder for programmatic pages
        }),
      })

      if (!response.ok) throw new Error('Failed to subscribe')

      setSuccess(true)
      setTimeout(() => {
        window.location.href = '/thank-you?download=standards'
      }, 1000)
    } catch (err) {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <p className="text-green-800 font-medium">✓ Success! Redirecting to download...</p>
      </div>
    )
  }

  const locationText = city && state ? `${city}, ${state}` : state || 'your area'

  return (
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-6 my-8">
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          🚨 Don't Let Your Bitcoin Become Lost Forever
        </h3>
        <p className="text-gray-700 mb-4">
          Get the Bitcoin Estate Planning Standards (Early Access Draft) - the framework being used by 500+ attorneys nationwide.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <button
              type="submit"
              disabled={loading || !email}
              className="bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-orange-700 disabled:opacity-50 transition-colors whitespace-nowrap"
            >
              {loading ? 'Sending...' : 'Get Free Guide'}
            </button>
          </div>
        </form>

        <p className="text-xs text-gray-500 mt-3">
          Trusted by Bitcoin holders in {locationText} • No spam, unsubscribe anytime
        </p>
      </div>
    </div>
  )
} 