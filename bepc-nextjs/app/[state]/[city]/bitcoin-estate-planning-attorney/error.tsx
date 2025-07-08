'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'

export default function LocationError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const params = useParams()
  const { state, city } = params

  useEffect(() => {
    // Log the error with location context
    console.error(`Location page error for ${state}/${city}:`, error)
  }, [error, state, city])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <svg
              className="mx-auto h-16 w-16 text-yellow-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Location Information Temporarily Unavailable
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              We're having trouble loading information for{' '}
              <span className="font-semibold">
                {city?.toString().split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}, {state?.toString().toUpperCase()}
              </span>
              . This is usually temporary.
            </p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={reset}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Loading Again
            </button>
            
            <a
              href="/find-attorney"
              className="block w-full text-center bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Search for Attorneys
            </a>
            
            <a
              href="/"
              className="block w-full text-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              Return to Homepage
            </a>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">
              Why am I seeing this?
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• The page may be temporarily unavailable</li>
              <li>• There might be a connection issue</li>
              <li>• The location data is being updated</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}