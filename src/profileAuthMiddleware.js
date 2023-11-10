import { NextResponse } from 'next/server'
import { endpointConfig } from 'data/shared/endpointConfig'

export function profileAuthMiddleware(request) {
  const sessionCookie = request.cookies.get('auth-token')

  const { baseUrl, loginUrl, profileUrl } = endpointConfig
  const redirectLink = `${baseUrl}${loginUrl}`

  if (request.nextUrl.pathname.startsWith(profileUrl)) {
    if (!sessionCookie) {
      return NextResponse.redirect(redirectLink)
    }
  }

  return NextResponse.next()
}

export const profileAuthConfig = {
  matcher: '/profile',
}
