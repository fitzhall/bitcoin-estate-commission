import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPageBySlug, getPagesByCategory } from '@/lib/programmatic-content'
import { TopicPageTemplate } from '@/components/programmatic/TopicPageTemplate'

export async function generateStaticParams() {
  const pages = getPagesByCategory('technical')
  return pages.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = getPageBySlug('technical', params.slug)
  
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

export default function TechnicalPage({ params }: { params: { slug: string } }) {
  const page = getPageBySlug('technical', params.slug)
  
  if (!page) {
    notFound()
  }

  return <TopicPageTemplate page={page} />
}