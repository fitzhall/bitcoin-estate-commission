import fs from 'fs'
import path from 'path'
import { TopicPage } from './programmatic-content'

export async function loadContent(page: TopicPage): Promise<string | null> {
  if (!page.contentFile) return null
  
  // Dynamically construct the file path based on the category
  const filePath = `content/${page.category}/${page.contentFile}`
  
  try {
    const fullPath = path.join(process.cwd(), filePath)
    const content = fs.readFileSync(fullPath, 'utf8')
    return content
  } catch (error) {
    console.error(`Error loading content for ${page.slug}:`, error)
    return null
  }
}

// Generate static params for all published pages
export function generateStaticParamsForCategory(category: string) {
  const { programmaticPages } = require('./programmatic-content')
  
  return programmaticPages
    .filter((page: TopicPage) => page.category === category && page.status === 'published')
    .map((page: TopicPage) => ({
      slug: page.slug
    }))
}