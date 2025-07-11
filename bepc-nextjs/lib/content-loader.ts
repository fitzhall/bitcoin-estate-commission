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

// Load state content
export async function loadStateContent(state: string): Promise<string | null> {
  try {
    // Map state codes to content file names
    const stateFiles: Record<string, string> = {
      'ny': 'New_York_Bitcoin_Estate_Planning.md',
      'ca': 'California_Bitcoin_Estate_Planning.md',
      'tx': 'Texas_Bitcoin_Estate_Planning.md',
      'fl': 'Florida_Bitcoin_Estate_Planning.md',
      'sd': 'South_Dakota_Bitcoin_Estate_Planning.md',
      'il': 'Illinois_Bitcoin_Estate_Planning.md',
      'wa': 'Washington_Bitcoin_Estate_Planning.md',
      'nv': 'Nevada_Bitcoin_Estate_Planning.md',
      'wy': 'Wyoming_Bitcoin_Estate_Planning.md',
      'de': 'Delaware_Bitcoin_Estate_Planning.md'
    }
    
    const filename = stateFiles[state.toLowerCase()]
    if (!filename) return null
    
    const filePath = path.join(process.cwd(), 'content', 'state', filename)
    const content = fs.readFileSync(filePath, 'utf8')
    return content
  } catch (error) {
    console.error(`Error loading state content: ${state}`, error)
    return null
  }
}

// Load topic content by filename and category
export async function loadTopicContent(filename: string, category: string): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), 'content', category, filename)
    const content = fs.readFileSync(filePath, 'utf8')
    return content
  } catch (error) {
    console.error(`Error loading topic content: ${filename} in ${category}`, error)
    return null
  }
}