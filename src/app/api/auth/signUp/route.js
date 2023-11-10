import mongoose from 'mongoose'
import { NextResponse } from 'next/server'
import { connectToMongoDB } from 'lib/db'
import AuthorizationService from 'services/authorizationService '
import { checkUserByEmail, checkUserByPhone } from 'utils/signUpHelpers'
import User from 'models/User'

export async function POST(request) {
  try {
    const { name_newUser, email_newUser, password_newUser, mobileNumber_newUser } =
      await request.json()

    await connectToMongoDB().catch((err) => NextResponse.json(err))

    const userExistsByEmail = await checkUserByEmail(email_newUser)
    const userExistsByPhone = await checkUserByPhone(mobileNumber_newUser)

    if (userExistsByEmail || userExistsByPhone) {
      return NextResponse.json(
        { success: false, error: 'A user with this email or phone number already exists' },
        { status: 409 },
      )
    }

    const newUser = await User.create({
      name: name_newUser,
      email: email_newUser,
      password: password_newUser,
      mobileNumber: mobileNumber_newUser,
      loginAttempts: 0,
      lockUntil: null,
    })

    const authToken = AuthorizationService.generateAuthToken(newUser._id)
    await AuthorizationService.setAuthCookies(authToken)

    return NextResponse.json(
      {
        success: true,
        error: 'User logged in successfully',
        user: {
          name: newUser.name,
          email: newUser.email,
          _id: newUser._id,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorMessages = Object.keys(error.errors).map((field) => error.errors[field].message)

      return NextResponse.json({ success: false, error: errorMessages })
    }

    return NextResponse.json({ success: false, error })
  }
}
