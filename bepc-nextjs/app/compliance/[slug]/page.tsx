import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPageBySlug, getPagesByCategory } from '@/lib/programmatic-content'
import { loadTopicContent } from '@/lib/content-loader'
import { TopicPageTemplate } from '@/components/programmatic/TopicPageTemplate'

export async function generateStaticParams() {
  const pages = getPagesByCategory('compliance')
  return pages.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = getPageBySlug('compliance', params.slug)
  
  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: `${page.title} | BEPC`,
    description: page.metaDescription,
    keywords: page.keywords.join(', '),
  }
}

export default async function CompliancePage({ params }: { params: { slug: string } }) {
  const page = getPageBySlug('compliance', params.slug)
  
  if (!page) {
    notFound()
  }

  // Load the markdown content
  const content = await loadTopicContent(page.contentFile, 'compliance')
  
  if (!content) {
    notFound()
  }

  // Get related pages
  const relatedPages = getPagesByCategory('compliance')
    .filter(p => p.slug !== page.slug)
    .slice(0, 4)

  return <TopicPageTemplate page={page} content={content} relatedPages={relatedPages} />
}