import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { TopicPageTemplate } from '@/components/programmatic/TopicPageTemplate'
import { getPageBySlug, getRelatedPages, programmaticPages } from '@/lib/programmatic-content'
import { loadContent } from '@/lib/content-loader'

interface PageProps {
  params: {
    slug: string
  }
}

// Generate static params for all education pages
export async function generateStaticParams() {
  return programmaticPages
    .filter(page => page.category === 'education' && page.status === 'published')
    .map(page => ({
      slug: page.slug
    }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getPageBySlug('education', params.slug)
  
  if (!page) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    }
  }

  return {
    title: `${page.title} | BEPC`,
    description: page.metaDescription,
    keywords: page.keywords.join(', '),
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      type: 'article',
      url: `https://bitcoinestatecommission.org/education/${page.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.metaDescription,
    },
  }
}

export default async function EducationPage({ params }: PageProps) {
  const page = getPageBySlug('education', params.slug)
  
  if (!page) {
    notFound()
  }

  const content = await loadContent(page)
  
  if (!content) {
    notFound()
  }

  const relatedPages = getRelatedPages(page)

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': page.schemaType,
            name: page.title,
            description: page.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Bitcoin Estate Planning Commission',
              url: 'https://bitcoinestatecommission.org'
            },
            ...(page.schemaType === 'Course' && {
              educationalCredentialAwarded: 'BEPC Certification',
              competencyRequired: page.keywords
            }),
            ...(page.schemaType === 'HowTo' && {
              step: [
                {
                  '@type': 'HowToStep',
                  name: 'Implementation',
                  text: 'Follow the comprehensive guide'
                }
              ]
            })
          })
        }}
      />
      
      <TopicPageTemplate 
        page={page} 
        content={content} 
        relatedPages={relatedPages} 
      />
    </>
  )
}

// Force static generation
export const dynamic = 'force-static'