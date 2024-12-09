import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { decodeJwt } from 'jose'

const { API_BASE_URL, REFRESH_ENDPOINT, LOGIN_PAGE_ENDPOINT, PROFILE_PAGE_URL } = process.env
const refreshTokenUrl = `${API_BASE_URL}${REFRESH_ENDPOINT}`
const accessTokenMinTime = 300

export default async function middleware(req) {
  const accessToken = cookies(req).get('accessToken')?.value
  const refreshToken = cookies(req).get('refreshToken')?.value

  if (!accessToken && refreshToken) {
    try {
      const fetchResponse = await fetch(refreshTokenUrl, {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'X-Refresh-Token': refreshToken,
        },
      })

      if (fetchResponse.status === 200) {
        const newAccessToken = fetchResponse.headers.get('Authorization')?.split(' ')[1]
        const newRefreshToken = fetchResponse.headers.get('X-Refresh-Token')

        const responseWithCookies = NextResponse.redirect(
          new URL(PROFILE_PAGE_URL, req.nextUrl.clone()),
        )
        responseWithCookies.headers.set('x-middleware-cache', 'no-cache')
        responseWithCookies.cookies.set('accessToken', newAccessToken)
        responseWithCookies.cookies.set('refreshToken', newRefreshToken)

        return responseWithCookies
      }
    } catch (error) {
      const responseWithoutCookies = NextResponse.redirect(
        new URL(LOGIN_PAGE_ENDPOINT, req.nextUrl.clone()),
      )
      responseWithoutCookies.headers.set('x-middleware-cache', 'no-cache')
      responseWithoutCookies.cookies.delete('accessToken')
      responseWithoutCookies.cookies.delete('refreshToken')

      return responseWithoutCookies
    }
  }

  if (accessToken) {
    const decodedToken = decodeJwt(accessToken)
    const tokenExpirationTime = decodedToken.exp * 1000

    if (tokenExpirationTime < Date.now() || tokenExpirationTime - Date.now() < accessTokenMinTime) {
      try {
        const fetchResponse = await fetch(refreshTokenUrl, {
          credentials: 'include',
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'X-Refresh-Token': refreshToken,
          },
        })

        if (fetchResponse.status === 200) {
          const newAccessToken = fetchResponse.headers.get('Authorization')?.split(' ')[1]
          const newRefreshToken = fetchResponse.headers.get('X-Refresh-Token')

          const responseWithUpdatedCookies = NextResponse.next()
          responseWithUpdatedCookies.headers.set('x-middleware-cache', 'no-cache')
          responseWithUpdatedCookies.cookies.set('accessToken', newAccessToken)
          responseWithUpdatedCookies.cookies.set('refreshToken', newRefreshToken)

          return responseWithUpdatedCookies
        }
      } catch (error) {
        const responseWithoutCookies = NextResponse.redirect(
          new URL(LOGIN_PAGE_ENDPOINT, req.nextUrl.clone()),
        )
        responseWithoutCookies.headers.set('x-middleware-cache', 'no-cache')
        responseWithoutCookies.cookies.delete('accessToken')
        responseWithoutCookies.cookies.delete('refreshToken')

        return responseWithoutCookies
      }
    }
  }

  if ((accessToken && !refreshToken) || (!accessToken && !refreshToken)) {
    const responseWithoutCookies = NextResponse.redirect(
      new URL(LOGIN_PAGE_ENDPOINT, req.nextUrl.clone()),
    )
    responseWithoutCookies.headers.set('x-middleware-cache', 'no-cache')
    responseWithoutCookies.cookies.delete('accessToken')
    responseWithoutCookies.cookies.delete('refreshToken')

    return responseWithoutCookies
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/profile/:path*', '/shopping-cart/:path*'],
}
