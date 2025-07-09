import Link from 'next/link'
import { LeadMagnetCTA } from '@/components/LeadMagnetCTA'

export function PathSelection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16">Choose Your Path</h2>
        
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Attorney Path */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-primary via-primary-light to-accent/30 text-white p-8">
              <h3 className="text-2xl font-bold mb-2">For Attorneys</h3>
              <p className="text-gray-100">
                Expand your practice with Bitcoin estate planning expertise
              </p>
            </div>
            
            <div className="p-8">
              <h4 className="text-lg font-semibold mb-4 text-accent-dark">
                Why Get Certified?
              </h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">$50B+ market opportunity</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Average 3x fee premium</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Reduce malpractice risk</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Professional credibility</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Network referrals</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-accent/10 text-accent-dark border border-accent/20 rounded-full text-sm font-medium">
                  CLE Credits
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent-dark border border-accent/20 rounded-full text-sm font-medium">
                  Digital Badge
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent-dark border border-accent/20 rounded-full text-sm font-medium">
                  Directory Listing
                </span>
              </div>
              
              <div className="space-y-3">
                <Link href="/certification" className="btn bg-accent hover:bg-accent-dark text-white btn-lg w-full shadow-md hover:shadow-lg transition-all">
                  Start Certification
                </Link>
                <LeadMagnetCTA audience="attorney" variant="button" className="w-full justify-center" />
              </div>
            </div>
          </div>
          
          {/* Family Path */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-accent to-accent-dark text-white p-8">
              <h3 className="text-2xl font-bold mb-2">For Families</h3>
              <p className="text-gray-100">
                Protect your Bitcoin wealth for future generations
              </p>
            </div>
            
            <div className="p-8">
              <h4 className="text-lg font-semibold mb-4 text-accent-dark">
                Why Use Certified Attorneys?
              </h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Specialized Bitcoin knowledge</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Proven security protocols</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Regulatory compliance</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Family protection plans</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Peace of mind</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-accent/10 text-accent-dark border border-accent/20 rounded-full text-sm font-medium">
                  Free Consultation
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent-dark border border-accent/20 rounded-full text-sm font-medium">
                  Verified Professionals
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent-dark border border-accent/20 rounded-full text-sm font-medium">
                  Nationwide Network
                </span>
              </div>
              
              <div className="space-y-3">
                <Link href="/find-attorney" className="btn bg-accent hover:bg-accent-dark text-white btn-lg w-full shadow-md hover:shadow-lg transition-all">
                  Find Attorney
                </Link>
                <LeadMagnetCTA audience="holder" variant="button" className="w-full justify-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}