'use client'

import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import { EmailCapture } from '@/components/EmailCapture'
import { TopicPage } from '@/lib/programmatic-content'

interface TopicPageTemplateProps {
  page: TopicPage
  content: string
  relatedPages?: TopicPage[]
}

export function TopicPageTemplate({ page, content, relatedPages = [] }: TopicPageTemplateProps) {
  const [activeSection, setActiveSection] = useState('')
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])

  // Extract headings for table of contents
  useEffect(() => {
    const extractedHeadings: { id: string; text: string; level: number }[] = []
    const lines = content.split('\n')
    
    lines.forEach((line) => {
      const match = line.match(/^(#{1,3})\s+(.+)/)
      if (match && match[2] !== page.title) { // Skip the main title
        const level = match[1].length
        const text = match[2]
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        extractedHeadings.push({ id, text, level })
      }
    })
    
    setHeadings(extractedHeadings)
  }, [content, page.title])

  // Track scroll position for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = headings.map(h => ({
        id: h.id,
        offset: document.getElementById(h.id)?.offsetTop || 0
      }))
      
      const scrollPosition = window.scrollY + 100
      const current = sections.reduce((acc, section) => {
        if (scrollPosition >= section.offset) return section.id
        return acc
      }, '')
      
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  const categoryNames = {
    'professional-standards': 'Professional Standards',
    'education': 'Education',
    'technical': 'Technical',
    'compliance': 'Compliance'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href={`/${page.category}`} className="text-gray-500 hover:text-gray-700">
              {categoryNames[page.category]}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{page.title}</span>
          </nav>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3 prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold text-gray-900 mb-8">{children}</h1>
                ),
                h2: ({ children }) => {
                  const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-')
                  return (
                    <h2 id={id} className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-20">
                      {children}
                    </h2>
                  )
                },
                h3: ({ children }) => {
                  const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-')
                  return (
                    <h3 id={id} className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20">
                      {children}
                    </h3>
                  )
                },
                p: ({ children }) => (
                  <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-gray-700">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-gray-900">{children}</strong>
                ),
                a: ({ href, children }) => (
                  <Link href={href || '#'} className="text-primary hover:text-primary-dark underline">
                    {children}
                  </Link>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-6 italic text-gray-700 my-6">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {content}
            </ReactMarkdown>

            {/* Bottom CTA */}
            <div className="mt-12 pt-8 border-t">
              <EmailCapture
                source={`${page.category}-${page.slug}`}
                variant="inline"
                title="Get the Complete Bitcoin Estate Planning Standards"
                description="Join 500+ attorneys implementing professional Bitcoin estate planning solutions."
                buttonText="Download Standards PDF"
              />
            </div>

            {/* Related Content */}
            {relatedPages.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-2xl font-bold mb-6">Related Resources</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPages.slice(0, 4).map((related) => (
                    <Link
                      key={related.slug}
                      href={`/${related.category}/${related.slug}`}
                      className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">{related.title}</h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {related.metaDescription}
                      </p>
                      <span className="text-primary text-sm font-medium mt-2 inline-block">
                        Learn more →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Table of Contents */}
            {headings.length > 0 && (
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm transition-colors ${
                          activeSection === heading.id
                            ? 'text-primary font-medium'
                            : 'text-gray-600 hover:text-gray-900'
                        } ${heading.level === 3 ? 'pl-4' : ''}`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Quick Links */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link
                      href="/get-standards"
                      className="flex items-center text-primary hover:text-primary-dark font-medium"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Standards
                    </Link>
                    <Link
                      href="/certification"
                      className="flex items-center text-primary hover:text-primary-dark font-medium"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Get Certified
                    </Link>
                    <Link
                      href="/find-attorney"
                      className="flex items-center text-primary hover:text-primary-dark font-medium"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Find Attorney
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}