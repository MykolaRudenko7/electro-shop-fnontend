import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

const { API_BASE_URL, REFRESH_ENDPOINT, LOGIN_PAGE_ENDPOINT, PROFILE_PAGE_URL } = process.env
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
        const responseWithCookies = redirect(new URL(PROFILE_PAGE_URL, req.url))
        responseWithCookies.cookies.set('accessToken', fetchResponse.accessToken)
        responseWithCookies.cookies.set('refreshToken', fetchResponse.refreshToken)

        return responseWithCookies
      }
    } catch (error) {
      return redirect(new URL(LOGIN_PAGE_ENDPOINT, req.url))
    }
  }

  if (!accessToken && !refreshToken) {
    return redirect(new URL(LOGIN_PAGE_ENDPOINT, req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/profile/:path*'],
}
