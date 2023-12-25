import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { redirectEndpoints } from 'data/shared/redirectEndpoints'

const { loginUrl, profileUrl } = redirectEndpoints
const { API_BASE_URL, REFRESH_ENDPOINT } = process.env
const refreshTokenUrl = `${API_BASE_URL}${REFRESH_ENDPOINT}`

export default async function middleware(req, res) {
  const accessToken = req.cookies.get('accessToken')
  const refreshToken = req.cookies.get('refreshToken')

  if (!accessToken && refreshToken) {
    try {
      const fetchResponse = await fetch(refreshTokenUrl, {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refreshToken,
        }),
      }).then((res) => res.json())

      if (fetchResponse.success) {
        const responseWithCookies = NextResponse.redirect(new URL(profileUrl, req.url))
        responseWithCookies.cookies.set('accessToken', fetchResponse.accessToken)
        responseWithCookies.cookies.set('refreshToken', fetchResponse.refreshToken)

        return responseWithCookies
      }
    } catch (error) {
      return NextResponse.redirect(new URL(loginUrl, req.url))
    }
  }

  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL(loginUrl, req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/profile'],
}
