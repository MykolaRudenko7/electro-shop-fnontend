import { NextResponse } from 'next/server'
import AuthorizationService from 'services/authorizationService '

export async function POST(request) {
  try {
    await AuthorizationService.clearAuthCookies()

    return NextResponse.json({ success: true, message: 'User logged out successfully' })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
