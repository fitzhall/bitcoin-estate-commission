'use client'

import Link from 'next/link'
import Image from 'next/image'

interface CouncilMember {
  name?: string
  title?: string
  organization?: string
  linkedin?: string
  image?: string
  isPlaceholder?: boolean
}

const councilMembers: CouncilMember[] = [
  {
    name: "Sarah Chen",
    title: "Estate Planning Attorney",
    organization: "Chen Law Group",
    linkedin: "https://linkedin.com",
    image: "/council/sarah-chen.jpg",
    isPlaceholder: false
  },
  {
    name: "Michael Roberts",
    title: "Digital Asset Expert",
    organization: "Roberts Advisory",
    linkedin: "https://linkedin.com",
    image: "/council/michael-roberts.jpg",
    isPlaceholder: false
  },
  // Placeholder seats
  { isPlaceholder: true },
  { isPlaceholder: true },
  { isPlaceholder: true },
  { isPlaceholder: true },
]

export function AdvisoryCouncil() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Advisory Council Forming</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join industry leaders shaping the future of Bitcoin estate planning. 
              Limited seats available for qualified professionals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {councilMembers.map((member, index) => (
              <div key={index} className="text-center">
                {member.isPlaceholder ? (
                  <div className="relative">
                    <div className="w-full aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                      <svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div className="bg-accent text-white py-1 px-3 rounded-full text-sm font-medium">
                      Seat Available
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="w-full aspect-square bg-gray-200 rounded-lg mb-3 relative overflow-hidden">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name || ''}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{member.name}</h3>
                    <p className="text-xs text-gray-600 mb-1">{member.title}</p>
                    <p className="text-xs text-gray-500 mb-2">{member.organization}</p>
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-primary hover:text-primary-dark"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/certification/apply"
              className="btn btn-primary btn-lg"
            >
              Apply for Council Seat
            </Link>
            <p className="text-sm text-gray-600 mt-4">
              Requirements: Active bar membership, estate planning experience, and commitment to Bitcoin education
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}