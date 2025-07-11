import { Metadata } from 'next'
import { CouncilApplicationForm } from '@/components/CouncilApplicationForm'

export const metadata: Metadata = {
  title: 'Apply for Advisory Council Seat | Bitcoin Estate Planning Council',
  description: 'Join leading attorneys, tax professionals, and Bitcoin experts shaping the future of secure inheritance. Apply for a limited seat on the BEPC Advisory Council.',
  keywords: 'Bitcoin advisory council, cryptocurrency estate planning council, digital asset advisory board, Bitcoin inheritance leadership',
}

export default function CouncilApplicationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-dark to-primary py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Apply for Advisory Council Seat
            </h1>
            <p className="text-xl text-white/90 drop-shadow">
              Join the Bitcoin Estate Planning Council's Advisory Board
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Advisory Council Overview</h2>
            <p className="text-gray-700 mb-6">
              The Bitcoin Estate Planning Council (BEPC) Advisory Council brings together leading professionals 
              from estate planning, tax strategy, digital assets, and Bitcoin technology to shape the future 
              of secure cryptocurrency inheritance.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">Council Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Guide BEPC standards development</li>
                  <li>Review certification curriculum</li>
                  <li>Contribute to best practices</li>
                  <li>Participate in quarterly meetings</li>
                  <li>Mentor certified professionals</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Member Benefits</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Shape industry standards</li>
                  <li>Early access to KEEP Protocol</li>
                  <li>Professional recognition</li>
                  <li>Network with elite professionals</li>
                  <li>Influence certification development</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary-light/10 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-lg mb-2">Eligibility Requirements</h3>
              <p className="text-gray-700 mb-3">
                Advisory Council members must demonstrate:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Minimum 5 years professional experience in relevant field</li>
                <li>Expertise in estate planning, tax strategy, digital assets, or Bitcoin technology</li>
                <li>Commitment to advancing secure cryptocurrency inheritance practices</li>
                <li>Ability to attend quarterly virtual meetings</li>
                <li>Willingness to contribute to standards development</li>
              </ul>
            </div>
          </div>

          <CouncilApplicationForm />
        </div>
      </div>
    </main>
  )
}