import Link from 'next/link'

const developments = [
  {
    date: 'December 2024',
    category: 'Standards Update',
    title: 'KEEP Protocol 2.0 Released',
    description: 'Enhanced security standards for multisig estate planning and advanced key management protocols now available for certified attorneys.',
    link: '/standards/keep-protocol',
  },
  {
    date: 'November 2024',
    category: 'Legal Update',
    title: 'New State Digital Asset Laws',
    description: 'Seven states have updated their digital asset inheritance laws. Our certified attorneys are trained on all current regulations.',
    link: '/news/state-digital-asset-laws',
  },
  {
    date: 'October 2024',
    category: 'Research',
    title: 'Bitcoin Estate Planning Report',
    description: 'Annual analysis of Bitcoin inheritance challenges, successful strategies, and emerging trends in digital asset planning.',
    link: '/research/reports',
  },
]

export function RecentDevelopments() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest Developments</h2>
          <p className="text-xl text-gray-600">
            Stay informed about Bitcoin estate planning news and updates
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {developments.map((item, index) => (
            <article
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-gray-500">{item.date}</span>
                <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full uppercase tracking-wider"
                  {item.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              
              <Link
                href={item.link}
                className="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors group"
              >
                {item.category === 'Standards Update' && 'View KEEP Protocol Details'}
                {item.category === 'Legal Update' && 'Review State Law Changes'}
                {item.category === 'Research' && 'Read Full Report'}
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}