interface OrganizationSchemaProps {
  url?: string
}

export function OrganizationSchema({ url = 'https://bitcoinestateplanning.org' }: OrganizationSchemaProps) {
  const schemas = [
    // Organization Schema
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${url}/#organization`,
      name: 'Bitcoin Estate Planning Commission',
      alternateName: 'BEPC',
      url: url,
      logo: `${url}/logos/bepc-logo-vertical.png`,
      image: `${url}/logos/bepc-logo-vertical.png`,
      description: 'The global authority for Bitcoin estate planning standards, certification, and professional education.',
      foundingDate: '2024',
      founder: {
        '@type': 'Person',
        name: 'Bitcoin Estate Planning Commission Founders',
        description: 'Leading estate planning experts who identified the critical gap in Bitcoin inheritance planning'
      },
      sameAs: [
        'https://twitter.com/BitcoinEstatePlanning',
        'https://www.linkedin.com/company/bitcoin-estate-planning-commission',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'info@bitcoinestateplanning.org',
        url: `${url}/contact`,
        availableLanguage: ['English']
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
    },
    // ProfessionalService Schema
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${url}/#service`,
      name: 'Bitcoin Estate Planning Certification & Standards',
      serviceType: ['Legal Certification', 'Professional Education', 'Industry Standards'],
      provider: {
        '@id': `${url}/#organization`
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'BEPC Professional Services',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Attorney Certification Program',
            description: 'Comprehensive 40+ hour Bitcoin estate planning certification for legal professionals',
            url: `${url}/certification`
          },
          {
            '@type': 'Offer', 
            name: 'KEEP Framework Standards',
            description: 'Comprehensive framework for Bitcoin estate planning: Keep it Secure, Establish Legal Protection, Ensure Access Through Governance, Plan for the Future',
            url: `${url}/standards`
          },
          {
            '@type': 'Offer',
            name: 'Certified Attorney Directory',
            description: 'Connect Bitcoin holders with certified estate planning attorneys nationwide',
            url: `${url}/find-attorney`
          }
        ]
      }
    },
    // WebSite Schema with Search
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${url}/#website`,
      url: url,
      name: 'Bitcoin Estate Planning Commission',
      description: 'Professional standards and certification for Bitcoin estate planning attorneys',
      publisher: {
        '@id': `${url}/#organization`
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${url}/find-attorney?location={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    }
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  )
}

interface LocalBusinessSchemaProps {
  cityName: string
  stateName: string
  stateCode: string
  latitude?: number | null
  longitude?: number | null
}

export function LocalBusinessSchema({
  cityName,
  stateName,
  stateCode,
  latitude,
  longitude,
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `Bitcoin Estate Planning Attorneys in ${cityName}, ${stateName}`,
    description: `BEPC certified Bitcoin estate planning attorneys serving ${cityName} and surrounding areas.`,
    url: `https://bitcoinestateplanning.org/${stateCode}/${cityName.toLowerCase().replace(/ /g, '-')}/bitcoin-estate-planning-attorney`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityName,
      addressRegion: stateName,
      addressCountry: 'US',
    },
    ...(latitude && longitude && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: latitude,
        longitude: longitude,
      },
    }),
    areaServed: {
      '@type': 'City',
      name: cityName,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface AttorneySchemaProps {
  name: string
  firmName?: string | null
  bio?: string | null
  certificationLevel?: string | null
  specializations?: string[]
  cityName?: string
  stateName?: string
}

export function AttorneySchema({
  name,
  firmName,
  bio,
  certificationLevel,
  specializations,
  cityName,
  stateName,
}: AttorneySchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: name,
    description: bio || `${name} is a BEPC certified Bitcoin estate planning attorney.`,
    ...(firmName && {
      worksFor: {
        '@type': 'LegalService',
        name: firmName,
      },
    }),
    ...(specializations && {
      knowsAbout: specializations,
    }),
    ...(cityName && stateName && {
      address: {
        '@type': 'PostalAddress',
        addressLocality: cityName,
        addressRegion: stateName,
        addressCountry: 'US',
      },
    }),
    ...(certificationLevel && {
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: `${certificationLevel} Certification`,
        issuedBy: {
          '@type': 'Organization',
          name: 'Bitcoin Estate Planning Commission',
        },
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQSchemaProps {
  questions: Array<{
    question: string
    answer: string
  }>
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}