import { NextResponse } from 'next/server'

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
      })
        .then((res) => res.json())
        .catch((err) => {
          throw err
        })

      if (fetchResponse.success) {
        const responseWithCookies = NextResponse.rewrite(new URL(PROFILE_PAGE_URL, req.nextUrl), {
          status: 302,
        })
        responseWithCookies.cookies.set('accessToken', fetchResponse.accessToken, {
          httpOnly: true,
        })
        responseWithCookies.cookies.set('refreshToken', fetchResponse.refreshToken, {
          httpOnly: true,
        })

        return responseWithCookies
      }
    } catch (error) {
      return NextResponse.rewrite(new URL(LOGIN_PAGE_ENDPOINT, req.nextUrl))
    }
  }

  if (!accessToken && !refreshToken) {
    return NextResponse.rewrite(new URL(LOGIN_PAGE_ENDPOINT, req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/profile'],
}
