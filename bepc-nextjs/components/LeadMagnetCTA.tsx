import Link from 'next/link'

interface LeadMagnetCTAProps {
  audience?: 'attorney' | 'holder' | 'general'
  variant?: 'button' | 'banner' | 'inline'
  className?: string
}

export function LeadMagnetCTA({ 
  audience = 'general', 
  variant = 'button',
  className = '' 
}: LeadMagnetCTAProps) {
  
  // Audience-specific messaging
  const messaging = {
    attorney: {
      text: 'Get Certification Standards',
      description: 'Professional framework for Bitcoin estate planning',
      url: '/get-standards?audience=attorney'
    },
    holder: {
      text: 'Protect Your Bitcoin Legacy',
      description: 'Free guide to securing your digital inheritance',
      url: '/get-standards?audience=holder'
    },
    general: {
      text: 'Download Bitcoin Estate Planning Standards',
      description: 'Comprehensive guide trusted by 500+ attorneys',
      url: '/get-standards'
    }
  }

  const content = messaging[audience]

  if (variant === 'button') {
    return (
      <Link 
        href={content.url}
        className={`inline-flex items-center bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all ${className}`}
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {content.text}
      </Link>
    )
  }

  if (variant === 'banner') {
    return (
      <div className={`bg-gradient-to-r from-primary to-accent text-white rounded-lg p-6 ${className}`}>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h4 className="text-xl font-bold mb-1">{content.text}</h4>
            <p className="text-white/90">{content.description}</p>
          </div>
          <Link 
            href={content.url}
            className="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Download Free
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    )
  }

  // Default: inline variant
  return (
    <div className={`text-center py-8 ${className}`}>
      <p className="text-gray-600 mb-4">{content.description}</p>
      <Link 
        href={content.url}
        className="inline-flex items-center text-primary hover:text-primary-dark font-semibold hover:underline"
      >
        {content.text}
        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
  )
}