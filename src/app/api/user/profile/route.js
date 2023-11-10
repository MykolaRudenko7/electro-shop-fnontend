import { NextResponse } from 'next/server'
import AuthorizationService from 'services/authorizationService '

export async function GET(request) {
  try {
    const user = await AuthorizationService.isUserAuthorized()

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Please log in to view profile' },
        { status: 403 },
      )
    }

    return NextResponse.json({ success: true, user })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
