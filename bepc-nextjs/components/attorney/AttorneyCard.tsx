import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { Attorney } from '@prisma/client'

interface Props {
  attorney: Attorney
}

export function AttorneyCard({ attorney }: Props) {
  const specializations = attorney.specializations as string[] || []
  const contactInfo = attorney.contactInfo as { email?: string; phone?: string } || {}

  return (
    <div className="attorney-card p-6 hover:shadow-xl transition-all relative">
      {/* KEEP Badge for certified attorneys */}
      {attorney.verifiedStatus && (
        <div className="absolute top-4 right-4">
          <Image
            src="/logos/keep-practitioner-badge.png"
            alt="KEEP Licensed Practitioner"
            width={80}
            height={40}
            className="h-10 w-auto"
          />
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div className="pr-24">
          <h3 className="text-xl font-bold mb-1">{attorney.name}</h3>
          {attorney.firmName && (
            <p className="text-gray-600">{attorney.firmName}</p>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-2 mb-3">
        <span className={cn(
          "certification-badge",
          attorney.certificationLevel === 'Expert' && "certification-expert",
          attorney.certificationLevel === 'Advanced' && "certification-advanced",
          attorney.certificationLevel === 'Foundation' && "certification-foundation"
        )}>
          {attorney.certificationLevel} Certified
        </span>
        {attorney.featured && (
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>

      {attorney.yearsExperience > 0 && (
        <p className="text-sm text-gray-600 mb-3">
          {attorney.yearsExperience} years experience
        </p>
      )}

      {attorney.bio && (
        <p className="text-gray-700 mb-4 line-clamp-3">
          {attorney.bio}
        </p>
      )}

      {specializations.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-semibold mb-2">Specializations:</p>
          <div className="flex flex-wrap gap-2">
            {specializations.map((spec, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <Link
          href={`/attorney/${attorney.slug}`}
          className="btn btn-primary btn-sm"
        >
          View Profile
        </Link>
        {contactInfo.phone && (
          <a
            href={`tel:${contactInfo.phone}`}
            className="btn btn-outline btn-sm"
          >
            Call Now
          </a>
        )}
      </div>
    </div>
  )
}