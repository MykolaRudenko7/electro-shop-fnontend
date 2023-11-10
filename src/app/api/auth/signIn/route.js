import { NextResponse } from 'next/server'
import { validatePassword, checkRequiredSignInData } from 'utils/signInHelpers'

export async function POST(request) {
  try {
    const { email_signIn, password_signIn } = await request.json()

    const requiredSignInData = await checkRequiredSignInData(email_signIn, password_signIn)

    if (requiredSignInData instanceof NextResponse) {
      return requiredSignInData
    }

    return await validatePassword(requiredSignInData, password_signIn)
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
