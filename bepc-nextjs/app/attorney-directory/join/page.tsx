import { Metadata } from 'next'
import Link from 'next/link'
import { AttorneyListingForm } from '@/components/AttorneyListingForm'

export const metadata: Metadata = {
  title: 'Join the BEPC Attorney Directory | Bitcoin Estate Planning Commission',
  description: 'Apply to be listed in the premier directory of Bitcoin estate planning attorneys. Reach families seeking cryptocurrency inheritance expertise.',
  openGraph: {
    title: 'Join the BEPC Attorney Directory',
    description: 'Connect with Bitcoin holders seeking estate planning expertise',
    type: 'website',
  },
}

export default function JoinAttorneyDirectory() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Join the Premier Bitcoin Estate Planning Directory
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md max-w-2xl mx-auto">
              Connect with high-net-worth Bitcoin holders actively seeking specialized estate planning expertise
            </p>
            <div className="bg-accent text-white px-6 py-3 rounded-lg inline-block font-semibold">
              Limited to 100 Founding Attorneys Nationwide
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Join the BEPC Attorney Directory?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-accent text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">Qualified Leads</h3>
                <p className="text-gray-700">
                  Connect with Bitcoin holders who understand the importance of specialized estate planning and are ready to engage professional services.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-accent text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3">Professional Authority</h3>
                <p className="text-gray-700">
                  Position yourself as a forward-thinking attorney at the intersection of traditional estate planning and digital asset innovation.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-accent text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3">Growing Market</h3>
                <p className="text-gray-700">
                  Tap into the rapidly expanding market of Bitcoin wealth transfer, estimated at over $140 billion in assets at risk.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Directory Listing Includes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Premium profile with photo and detailed bio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Direct contact form on your profile</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>State and city-specific visibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Bitcoin expertise badges and certifications</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Priority ranking in search results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Monthly leads report and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>BEPC resource library access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Continuing education opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Directory Requirements
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Minimum Qualifications</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Active bar membership in good standing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>3+ years estate planning experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Professional liability insurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Commitment to Bitcoin education and best practices</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold mb-4">Preferred Qualifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>BEPC Certification (or willingness to obtain)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Experience with digital assets or cryptocurrency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Advanced estate planning certifications (CES, AEP, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Published articles or speaking experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Apply for Directory Listing
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Complete the form below to begin your application. We'll review your submission and contact you within 48 hours.
            </p>
            
            <AttorneyListingForm />
            
            <p className="text-sm text-gray-500 text-center mt-8">
              By applying, you agree to our professional standards and commit to maintaining 
              current knowledge of Bitcoin estate planning best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8">Join Industry Leaders</h3>
            <p className="text-lg text-gray-700 mb-6">
              BEPC directory attorneys serve clients with over $10M in combined Bitcoin holdings
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div>States Represented</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div>Client Inquiries Monthly</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">$140B</div>
                <div>Market Opportunity</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}