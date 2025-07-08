import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  
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
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}