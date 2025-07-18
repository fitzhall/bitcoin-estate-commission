import { MetadataRoute } from 'next'
import { safeDb } from '@/lib/database'
import { US_MAJOR_CITIES } from '@/lib/cities-data'
import { getAllPublishedPages } from '@/lib/programmatic-content'

// List of all US states
const US_STATES = [
  { code: 'al', name: 'Alabama' },
  { code: 'ak', name: 'Alaska' },
  { code: 'az', name: 'Arizona' },
  { code: 'ar', name: 'Arkansas' },
  { code: 'ca', name: 'California' },
  { code: 'co', name: 'Colorado' },
  { code: 'ct', name: 'Connecticut' },
  { code: 'de', name: 'Delaware' },
  { code: 'fl', name: 'Florida' },
  { code: 'ga', name: 'Georgia' },
  { code: 'hi', name: 'Hawaii' },
  { code: 'id', name: 'Idaho' },
  { code: 'il', name: 'Illinois' },
  { code: 'in', name: 'Indiana' },
  { code: 'ia', name: 'Iowa' },
  { code: 'ks', name: 'Kansas' },
  { code: 'ky', name: 'Kentucky' },
  { code: 'la', name: 'Louisiana' },
  { code: 'me', name: 'Maine' },
  { code: 'md', name: 'Maryland' },
  { code: 'ma', name: 'Massachusetts' },
  { code: 'mi', name: 'Michigan' },
  { code: 'mn', name: 'Minnesota' },
  { code: 'ms', name: 'Mississippi' },
  { code: 'mo', name: 'Missouri' },
  { code: 'mt', name: 'Montana' },
  { code: 'ne', name: 'Nebraska' },
  { code: 'nv', name: 'Nevada' },
  { code: 'nh', name: 'New Hampshire' },
  { code: 'nj', name: 'New Jersey' },
  { code: 'nm', name: 'New Mexico' },
  { code: 'ny', name: 'New York' },
  { code: 'nc', name: 'North Carolina' },
  { code: 'nd', name: 'North Dakota' },
  { code: 'oh', name: 'Ohio' },
  { code: 'ok', name: 'Oklahoma' },
  { code: 'or', name: 'Oregon' },
  { code: 'pa', name: 'Pennsylvania' },
  { code: 'ri', name: 'Rhode Island' },
  { code: 'sc', name: 'South Carolina' },
  { code: 'sd', name: 'South Dakota' },
  { code: 'tn', name: 'Tennessee' },
  { code: 'tx', name: 'Texas' },
  { code: 'ut', name: 'Utah' },
  { code: 'vt', name: 'Vermont' },
  { code: 'va', name: 'Virginia' },
  { code: 'wa', name: 'Washington' },
  { code: 'wv', name: 'West Virginia' },
  { code: 'wi', name: 'Wisconsin' },
  { code: 'wy', name: 'Wyoming' }
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://bitcoinestatecommission.org'
  
  // Skip database entirely - use static data only
  let cities: any[] = []
  let attorneys: any[] = []
  
  // Static pages - only include pages that exist
  const staticPages = [
    '',
    '/find-attorney',
    '/certification',
    '/certification/apply',
    '/standards',
    '/standards/keep-protocol',
    '/resources',
    '/about',
    '/get-standards',
    '/thank-you',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  // Location pages (highest priority for SEO)
  // Use our predefined major cities list if database is not available
  const locationPages = cities.length > 0 
    ? cities.map((city: any) => ({
        url: `${baseUrl}/${city.state?.stateCode || city.stateId}/${city.citySlug}/bitcoin-estate-planning-attorney`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      }))
    : US_MAJOR_CITIES.map((city) => ({
        url: `${baseUrl}/${city.state}/${city.city}/bitcoin-estate-planning-attorney`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      }))
  
  // State pages - All 50 states
  const statePages = US_STATES.map((state) => ({
    url: `${baseUrl}/${state.code}/bitcoin-estate-planning`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))
  
  // Attorney pages
  const attorneyPages = attorneys.map((attorney) => ({
    url: `${baseUrl}/attorney/${attorney.slug}`,
    lastModified: attorney.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Programmatic topic pages
  const programmaticPages = getAllPublishedPages().map((page) => ({
    url: `${baseUrl}/${page.category}/${page.slug}`,
    lastModified: new Date(page.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))
  
  // Category landing pages
  const categoryPages = [
    '/professional-standards',
    '/education',
    '/technical',
    '/compliance'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))
  
  return [...staticPages, ...locationPages, ...statePages, ...attorneyPages, ...programmaticPages, ...categoryPages]
}