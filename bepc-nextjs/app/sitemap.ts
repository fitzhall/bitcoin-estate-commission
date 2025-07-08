import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://bitcoinestateplanning.org'
  
  // Get all cities for location pages
  const cities = await prisma.city.findMany({
    include: { state: true }
  })
  
  // Get all attorneys
  const attorneys = await prisma.attorney.findMany({
    where: { verifiedStatus: true }
  })
  
  // Get all states
  const states = await prisma.state.findMany()
  
  // Static pages
  const staticPages = [
    '',
    '/find-attorney',
    '/certification',
    '/certification/apply',
    '/certification/overview',
    '/standards',
    '/standards/keep-protocol',
    '/standards/guidelines',
    '/standards/compliance',
    '/resources',
    '/resources/guide',
    '/resources/templates',
    '/resources/tools',
    '/education',
    '/education/cle',
    '/research',
    '/research/reports',
    '/research/case-studies',
    '/news',
    '/about',
    '/about/mission',
    '/about/team',
    '/contact',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  // Location pages (highest priority for SEO)
  const locationPages = cities.map((city) => ({
    url: `${baseUrl}/${city.state.stateCode}/${city.citySlug}/bitcoin-estate-planning-attorney`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))
  
  // State pages
  const statePages = states.map((state) => ({
    url: `${baseUrl}/${state.stateCode}/bitcoin-estate-planning`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  // Attorney pages
  const attorneyPages = attorneys.map((attorney) => ({
    url: `${baseUrl}/attorney/${attorney.slug}`,
    lastModified: attorney.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  return [...staticPages, ...locationPages, ...statePages, ...attorneyPages]
}