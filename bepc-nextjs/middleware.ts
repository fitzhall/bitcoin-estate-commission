import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  
  // Check if this is a state/city URL pattern
  const stateMatch = path.match(/^\/([A-Z]{2})\/([^\/]+)\/(.*)$/)
  
  if (stateMatch) {
    // If state code is uppercase, redirect to lowercase version
    const [, state, city, rest] = stateMatch
    const lowercaseUrl = `/${state.toLowerCase()}/${city}/${rest}`
    
    return NextResponse.redirect(new URL(lowercaseUrl, request.url), 301)
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