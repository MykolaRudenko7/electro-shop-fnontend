import { NextResponse } from 'next/server'
import { compare } from 'bcryptjs'
import { connectToMongoDB } from 'lib/db'
import User from 'models/User'
import AuthorizationService from 'services/authorizationService '

export async function checkRequiredSignInData(email_signIn, password_signIn) {
  if (!email_signIn) {
    return createErrorResponse('Email is required')
  }

  if (!password_signIn) {
    return createErrorResponse('Password is required')
  }

  await connectToMongoDB().catch((err) => createErrorResponse(err))

  const user = await User.findOne({ email: email_signIn }).select('+password')

  if (!user) {
    return createErrorResponse('User with email does not exist')
  }

  return user
}

export async function validatePassword(user, password_signIn) {
  if (user.lockUntil === Infinity) {
    return createErrorResponse('Account is locked. Please contact support.', 403)
  }

  if (user.lockUntil && user.lockUntil > Date.now()) {
    const minutesLeft = Math.ceil((user.lockUntil - Date.now()) / (60 * 1000))

    return createErrorResponse(
      `Too many login attempts. Please try again after ${minutesLeft} minutes.`,
      403,
    )
  }

  const isPasswordCorrect = await compare(password_signIn, user.password)

  if (!isPasswordCorrect) {
    user.loginAttempts += 1

    if (user.loginAttempts >= 5 && user.lockUntil === null) {
      user.lockUntil = Date.now() + 3 * 60 * 1000
    } else if (user.loginAttempts >= 10) {
      user.lockUntil = Infinity
    }

    await user.save()
    const remainingAttempts = 10 - user.loginAttempts

    return createErrorResponse(
      `Password is incorrect. Remaining attempts: ${remainingAttempts + 1}`,
      401,
    )
  }

  user.loginAttempts = 0
  user.lockUntil = null
  await user.save()

  const authToken = AuthorizationService.generateAuthToken(user._id)
  await AuthorizationService.setAuthCookies(authToken)

  return NextResponse.json(
    {
      success: true,
      message: 'User logged in successfully',
      user: {
        name: user.name,
        email: user.email,
        _id: user._id,
      },
    },
    { status: 200 },
  )
}

function createErrorResponse(message, status = 400) {
  return NextResponse.json({ success: false, error: message }, { status })
}
