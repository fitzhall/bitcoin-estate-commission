import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  
  // Only process paths that might have uppercase state codes
  // Skip if path doesn't start with exactly 2 uppercase letters
  if (!/^\/[A-Z]{2}(\/|$)/.test(path)) {
    // Skip middleware entirely for most requests
    return NextResponse.next()
  }
  
  // Check if path starts with uppercase state code (2 letters)
  const uppercaseStateMatch = path.match(/^\/([A-Z]{2})(\/|$)/)
  
  if (uppercaseStateMatch) {
    // Convert the state code to lowercase and keep the rest of the path
    const lowercasePath = path.replace(/^\/([A-Z]{2})/, (match, state) => `/${state.toLowerCase()}`)
    
    // Only redirect if the path actually changed
    if (lowercasePath !== path) {
      return NextResponse.redirect(new URL(lowercasePath, request.url), 301)
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Only match paths that could be state URLs
     * This reduces middleware execution significantly
     */
    '/[A-Z][A-Z]/:path*',
    '/[A-Z][A-Z]',
  ],
}