import fs from 'fs'
import path from 'path'
import { TopicPage } from './programmatic-content'

// Map content files to their local paths
const contentFileMap: Record<string, string> = {
  '01_Bitcoin_Estate_Planning_Certification_Overview.md': 'content/professional-standards/01_Bitcoin_Estate_Planning_Certification_Overview.md',
  '02_BEPC_Professional_Standards_Framework.md': 'content/professional-standards/02_BEPC_Professional_Standards_Framework.md',
  '03_KEEP_Protocol_Implementation_Guide.md': 'content/professional-standards/03_KEEP_Protocol_Implementation_Guide.md',
  '04_Bitcoin_Estate_Planning_Best_Practices.md': 'content/professional-standards/04_Bitcoin_Estate_Planning_Best_Practices.md',
  '05_Professional_Certification_Requirements.md': 'content/professional-standards/05_Professional_Certification_Requirements.md',
}

export async function loadContent(page: TopicPage): Promise<string | null> {
  if (!page.contentFile) return null
  
  const filePath = contentFileMap[page.contentFile]
  if (!filePath) return null
  
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