import Link from 'next/link'

const pillars = [
  {
    number: '01',
    title: 'Professional Standards',
    problem: 'No established standards exist for Bitcoin estate planning',
    agitation: 'Attorneys are making it up as they go, risking malpractice and client assets',
    solution: 'The KEEP Protocol provides the first comprehensive framework for professional Bitcoin estate planning',
    features: [
      'Research-based security protocols',
      'Tested legal frameworks',
      'Step-by-step implementation guides',
      'Quarterly standard updates',
    ],
    link: '/standards',
    linkText: 'Learn About Standards',
  },
  {
    number: '02',
    title: 'Attorney Certification',
    problem: 'Estate attorneys lack Bitcoin-specific training',
    agitation: 'One mistake in key management can cost families millions',
    solution: 'Rigorous certification ensures attorneys have specialized Bitcoin estate planning competence',
    features: [
      '40+ hours specialized training',
      'Comprehensive competency testing',
      'Hands-on security protocols',
      'Ongoing education requirements',
    ],
    link: '/certification',
    linkText: 'View Certification Program',
  },
  {
    number: '03',
    title: 'Expert Network',
    problem: 'Bitcoin holders can\'t find qualified estate planning help',
    agitation: 'Generic estate attorneys don\'t understand Bitcoin\'s unique inheritance challenges',
    solution: 'Connect with verified, certified attorneys who specialize in Bitcoin estate planning',
    features: [
      'Pre-screened Bitcoin expertise',
      'Transparent certification levels',
      'Client protection standards',
      'Geographic coverage network',
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
              <div className="space-y-3 mb-6">
                <p className="text-gray-900 font-medium">
                  <span className="text-red-600">Problem:</span> {pillar.problem}
                </p>
                <p className="text-gray-700">
                  <span className="text-orange-600">Why it matters:</span> {pillar.agitation}
                </p>
                <p className="text-gray-900">
                  <span className="text-green-600">Our solution:</span> {pillar.solution}
                </p>
              </div>
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