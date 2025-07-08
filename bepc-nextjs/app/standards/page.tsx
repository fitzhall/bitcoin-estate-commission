import { Metadata } from 'next'
import Link from 'next/link'
import { OrganizationSchema } from '@/components/SchemaMarkup'
import { familyGuideContent } from '@/lib/content-data'

export const metadata: Metadata = {
  title: 'KEEP Framework Standards | Bitcoin Estate Planning Commission',
  description: 'The comprehensive KEEP framework for Bitcoin estate planning. Learn about our four pillars: Keep it Secure, Establish Legal Protection, Ensure Access Through Governance, and Plan for the Future.',
  keywords: 'KEEP framework, bitcoin estate planning standards, cryptocurrency inheritance, digital asset protection',
}

export default function StandardsPage() {
  const keepData = familyGuideContent.keepProtocol

  return (
    <>
      <OrganizationSchema />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              The KEEP Framework
            </h1>
            <p className="text-xl text-gray-200 mb-4">
              Your Complete Bitcoin Estate Planning System
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {keepData.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Four Essential Pillars of Bitcoin Protection
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Keep it Secure */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold">K</div>
                  <div>
                    <h3 className="text-2xl font-bold">{keepData.pillars.K.title}</h3>
                    <p className="text-primary-light">Foundation of Protection</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{keepData.pillars.K.description}</p>
                <ul className="space-y-2">
                  {keepData.pillars.K.elements.map((element, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Establish Legal Protection */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold">E</div>
                  <div>
                    <h3 className="text-2xl font-bold">{keepData.pillars.E1.title}</h3>
                    <p className="text-primary-light">Legal Certainty</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{keepData.pillars.E1.description}</p>
                <ul className="space-y-2">
                  {keepData.pillars.E1.elements.map((element, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ensure Access Through Governance */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold">E</div>
                  <div>
                    <h3 className="text-2xl font-bold">{keepData.pillars.E2.title}</h3>
                    <p className="text-primary-light">Clear Succession</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{keepData.pillars.E2.description}</p>
                <ul className="space-y-2">
                  {keepData.pillars.E2.elements.map((element, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Plan for the Future */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold">P</div>
                  <div>
                    <h3 className="text-2xl font-bold">{keepData.pillars.P.title}</h3>
                    <p className="text-primary-light">Adaptive Strategy</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{keepData.pillars.P.description}</p>
                <ul className="space-y-2">
                  {keepData.pillars.P.elements.map((element, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why the KEEP Framework Works
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {keepData.benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                The Difference Between Success and Loss
              </h3>
              <p className="text-gray-700 mb-4">
                Traditional estate planning wasn't designed for Bitcoin's unique challenges. 
                Without proper security, legal frameworks, governance, and future planning, 
                Bitcoin wealth can be lost forever.
              </p>
              <p className="text-gray-700">
                The KEEP framework addresses each critical aspect of Bitcoin estate planning, 
                ensuring your digital wealth transfers successfully to your beneficiaries while 
                remaining secure during your lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              KEEP Framework Implementation Process
            </h2>
            
            <div className="space-y-6">
              {Object.entries(keepData.implementation).map(([phase, description], index) => (
                <div key={phase} className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">
                      {phase.replace('phase', 'Phase ')}: {description.split(' - ')[0]}
                    </h3>
                    <p className="text-gray-700">
                      {description.split(' - ')[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Implement the KEEP Framework?
            </h2>
            <p className="text-xl mb-8">
              Work with a BEPC-certified attorney trained in all four pillars of the KEEP framework
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/find-attorney" className="btn btn-secondary btn-lg">
                Find a KEEP-Certified Attorney
              </Link>
              <Link href="/certification" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
                Become KEEP Certified
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Learn More About KEEP
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/resources/keep-whitepaper" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">KEEP Framework Whitepaper</h3>
                <p className="text-gray-600">Comprehensive guide to implementing all four pillars</p>
              </Link>

              <Link href="/education/keep-certification" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">KEEP Certification Course</h3>
                <p className="text-gray-600">Professional training in the KEEP framework</p>
              </Link>

              <Link href="/resources/case-studies" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Case Studies</h3>
                <p className="text-gray-600">Real-world KEEP framework implementations</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}