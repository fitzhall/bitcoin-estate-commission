import Link from 'next/link'

const pillars = [
  {
    number: '01',
    title: 'Professional Standards',
    description: 'The KEEP Protocol (Key, Estate, Execution, Protection) establishes the global standard for Bitcoin inheritance planning. Our rigorous certification ensures attorneys understand the unique challenges of digital asset transfer.',
    features: [
      'Comprehensive security protocols',
      'Legal compliance frameworks',
      'Technical implementation guides',
      'Ongoing education requirements',
    ],
    link: '/standards',
    linkText: 'Learn About Standards',
  },
  {
    number: '02',
    title: 'Expert Certification',
    description: 'Our multi-tiered certification program ensures attorneys have the specialized knowledge to handle Bitcoin estate planning safely and effectively. From basic understanding to advanced multisig strategies.',
    features: [
      'Foundation level certification',
      'Advanced technical training',
      'Expert specialization tracks',
      'Continuing education credits',
    ],
    link: '/certification',
    linkText: 'View Certification Program',
  },
  {
    number: '03',
    title: 'Qualified Attorney Network',
    description: 'Connect with verified, certified attorneys who specialize in Bitcoin estate planning. Our directory includes detailed profiles, specializations, and client reviews to help you find the right legal partner.',
    features: [
      'Verified professional credentials',
      'Specialization matching',
      'Location-based search',
      'Client review system',
    ],
    link: '/find-attorney',
    linkText: 'Find Your Attorney',
  },
]

export function ValuePillars() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            The Three Pillars of Bitcoin Estate Protection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Why the Bitcoin Estate Planning Commission exists and why it matters
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="border-2 border-gray-200 rounded-lg p-8 hover:border-primary transition-colors"
            >
              <div className="text-5xl font-bold text-secondary mb-4">
                {pillar.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-gray-600 mb-6">{pillar.description}</p>
              <ul className="space-y-2 mb-8">
                {pillar.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={pillar.link}
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark"
              >
                {pillar.linkText}
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}